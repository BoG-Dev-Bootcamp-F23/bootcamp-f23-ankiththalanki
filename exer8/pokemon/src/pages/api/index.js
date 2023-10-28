export default async function handler(req,res) {
    if (req.method === "GET") {
        //Return a random pokemon
        //[1,1117]
        //Pokeapi: 
        //Math.random() returns a number grater than or equal to 0, and less than 1.
        const randInt  = Math.floor(Math.random() * 1017) + 1; // 1 to 1017, inclusive 
        const URL = `https://pokeapi.co/api/v2/pokemon/${randInt}/`
        const data = await fetch(URL);
        const parsedData = await data.json();
        
        const newTypes = parsedData.types.map((type) => {
            
            return type["type"]["name"];
        });
        
        res.status(200).json({name:parsedData.name, sprite:parsedData.sprites.front_default, types:newTypes});
    }else {
        res.status(400).json({Error:"Only GET query available at this endpoint."});
    }
}