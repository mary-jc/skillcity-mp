import Header from "@/components/shared/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/shared/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SingleFilm() {
    const router = useRouter();
    const[film, setFilm] = useState(null);
    const{ filmId } = router.query;

    useEffect(() => {
        if(!filmId) return;

        getFilm(filmId); 
    }, [filmId]);

    const getFilm = async (id) => {
        const response = await fetch(`/api/film-by-id?id=${id}`);
        const data = await response.json();
        const { film } = data;
        setFilm(film);
    }
    if (!film) {
        return (
            <div> Loading...</div>
        )
    }
    
    return (
        <div className="w-full">
            <Header name={film.title}
            />

            <Hero 
            imgUrl={film.imgUrl}
            title={film.title}
            subtitle={film.production} 
            />

            <Footer 
            title="Next book"
            href={`/single-film/${+film.id + 1}`}
            />
            </div>
    )
}