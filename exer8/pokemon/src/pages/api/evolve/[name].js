export default async function handler(req,res) {
    if (req.method === "GET") {
        //First get ID from pokemon search, that use that to search up the species, then use that to get the evolution chain. Turn evolution chain into a list for each access
        const name = req.query.name;
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
        const response = await fetch(URL);
        if (!response.ok) {
            res.status(404).json({Error:"No such pokemon found."});
        }

        const data = await response.json();
        const id = data.id;
        const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
        const secondResponse = await fetch(speciesURL);
        const speciesData = await secondResponse.json();
        const chainURL = speciesData.evolution_chain.url;
        const thirdResponse = await fetch(chainURL);
        const chainData = await thirdResponse.json();
        let chain = chainData.chain;
        const pokemonChain = [];
        while (true) {
            console.log(chain);
            pokemonChain.push(chain.species.name);
            if (chain.evolves_to.length === 0) {
                break;
            }
            chain = chain.evolves_to[0];
        }
        
        let index = pokemonChain.indexOf(name);
        if (index === (pokemonChain.length -1)) {
            //No other evolutions
            res.status(200).json({name: name});
        }

        res.status(200).json({name: pokemonChain[index+1]});

    }else {
        res.status(400).json({Error:"Only GET query available at this endpoint."});
    }
}