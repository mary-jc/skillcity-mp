import FilmItem from "./film-item";
import { useEffect, useState } from "react";


export default function FilmGrid() {
    const [films, setFilms] =useState([]);
    
    useEffect(() => {
        getFilms();
    }, []);

    const getFilms = async () => {
        const response = await fetch(`/api/films`);
        const data = await response.json();
        setFilms(data);
    }
    return(
        <div className="w-full grid grid-cols-3 gap-4">
            {films.map((film) => (
                <FilmItem film={film} />
            ))}
        </div>
    )
}