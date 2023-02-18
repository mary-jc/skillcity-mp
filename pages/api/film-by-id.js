export default function handler(req, res) {
    const { id } = req.query;

    const films=[
        
        {
            id: "1",
            title: "The Hobbit trilogy",
            production: "Warner Bros.",
            imgUrl: "/assets/1.jpg",
            linkToPurchase: "https://www.amazon.co.uk/Hobbit-Trilogy-DVD-Martin-Freeman/dp/B00S80X00G/ref=sr_1_1?keywords=the+hobbit+trilogy+dvd&qid=1676726202&sprefix=the+hobbit+t%2Caps%2C109&sr=8-1",
        },
        {
            id: "2",
            title: "Lord of the Rings Trilogy",
            production: "New Line Cinema",
            imgUrl: "/assets/2.jpg",
            linkToPurchase:"https://www.amazon.co.uk/Lord-Rings-Trilogy-DVD/dp/B013E4OXMO/ref=sr_1_1?keywords=lord+of+the+rings+trilogy+dvd&qid=1676726464&sprefix=lord+of+the++trilogy+dvd%2Caps%2C130&sr=8-1"
        },
        {
            id: "3",
            title: "Top Gun: Maverick",
            production: "Paramount Pictures",
            imgUrl:"/assets/3.jpg",
            linkToPurchase: "https://www.amazon.co.uk/Top-Gun-Maverick-Tom-Cruise/dp/B09ZYWVFMQ/ref=sr_1_1?keywords=top+gun+maverick+dvd&qid=1676726517&sprefix=top+gun+maveric+dvd%2Caps%2C80&sr=8-1"
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