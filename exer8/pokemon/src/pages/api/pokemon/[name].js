export default async function handler(req,res) {
    if (req.method === "GET") {
        const name = req.query.name;
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;

        const response = await fetch(URL);
        if (!response.ok) {
            res.status(404).json({Error:"No such pokemon found"});
        }
        const parsedData = await response.json();

        const newTypes = parsedData.types.map((type) => {
                
            return type["type"]["name"];
        });
        
        res.status(200).json({name:parsedData.name, sprite:parsedData.sprites.front_default, types:newTypes});
        }else {
            res.status(400).json({Error:"Only GET query available at this endpoint."});
        }

}