export default function handler(req, res) {
    const { id } = req.query;

    const films=[
        
        {
            id: "1",
            title: "The Hobbit",
            production: "Warner Bros.",
            imgUrl: "/assets/1.jpg"
        },
        {
            id: "2",
            title: "Lord of the Rings Trilogy",
            production: "New Line Cinema",
            imgUrl: "/assets/2.jpg"
        },
        {
            id: "3",
            title: "Top Gun: Maverick",
            production: "Paramount Pictures",
            imgUrl:"/assets/3.jpg"
        }
    ];

    const foundFilm = films.find((film) => {
        if (film.id === id) {
            return true;
        }
        else{
            return false;
        }
    });

    res.json({film: foundFilm}); 
}