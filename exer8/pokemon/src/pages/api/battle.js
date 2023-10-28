export default async function handler(req,res) {
    if (req.method === "POST") {
        const pokemon1 = req.body.pokemon1;
        const URL1 = `https://pokeapi.co/api/v2/pokemon/${pokemon1}/`;

        const response1 = await fetch(URL1);
        if (!response1.ok) {
            res.status(404).json({Error:"One of the pokemon cannot be found"});
        }
        const data1 = await response1.json();
        const pokemon2 = req.body.pokemon2;
        const URL2 = `https://pokeapi.co/api/v2/pokemon/${pokemon2}/`;

        const response2 = await fetch(URL2);
        if (!response2.ok) {
            res.status(404).json({Error:"One of the pokemon cannot be found"});
        }
        const data2 = await response2.json();

        //Now I should have two valid Pokemon objects
        //There are several base_stats, so I will return the one with the higher hp.
        const poke1hp = data1.stats[0].base_stat;
        const poke2hp = data2.stats[0].base_stat;
        if (poke1hp >= poke2hp) {
            res.status(200).json({Winner: pokemon1});
        }else {
            res.status(200).json({Winner: pokemon2});
        }


    }else {
        res.status(400).json({Error:"Only POST query available at this endpoint."});
    }
}