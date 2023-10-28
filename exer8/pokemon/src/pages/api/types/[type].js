export default async function handler(req,res) {
    if (req.method === "GET") {
        const type = req.query.type;
        const URL = `https://pokeapi.co/api/v2/type/${type}/`;

        const response = await fetch(URL);
    
        if (!response.ok) {
            res.status(400).json({Error:"No such type exists"});
        }
        const data = await response.json();
        let pokemon = data.pokemon;
        pokemon = pokemon.map((poke) => {
            return poke["pokemon"].name;
        });
        res.status(200).json(pokemon);
    }else {
        res.status(400).json({Error:"Only GET query available at this endpoint."});
    }
}