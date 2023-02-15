export default function handler(req, res) {
    
    const films=[
        
        {
            title: "The Hobbit",
            production: "Warner Bros."
        },
        {
            title: "Lord of the Rings Trilogy",
            production: "New Line Cinema"
        },
        {
            title: "Top Gun: Maverick",
            production: "Paramount Pictures"
        }
    ];

    res.json(films)
}