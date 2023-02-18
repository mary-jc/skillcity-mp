import sql from "@/utils/postgres";

export default async function handler(req, res) {
    const films = await sql`
        select * from films
    `;



    res.json(films);
}