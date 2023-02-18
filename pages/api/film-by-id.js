import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const { id } = req.query;

    const films = await sql`
        select * from films
        where id = ${id}
    `;

    if (films.length < 1) {
        res.status(404).json({ message: "Film not found" });
        return;
    }
    const foundFilm = films[0];

    res.json({film: foundFilm}); 
}