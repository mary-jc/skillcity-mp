export default function handler(req, res) {
    
    const films=[
        
        {
            title: "The Hobbit",
            production: "Warner Bros.",
            imgUrl: "/assets/1.jpg"
        },
        {
            title: "Lord of the Rings Trilogy",
            production: "New Line Cinema",
            imgUrl: "/assets/2.jpg"
        },
        {
            title: "Top Gun: Maverick",
            production: "Paramount Pictures",
            imgUrl:"/assets/3.jpg"
        }
    ];

    res.json(films)
}