import Header from "@/components/shared/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/shared/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Content from "@/components/shared/content";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
            imgUrl={film.img_url}
            title={film.title}
            subtitle={film.production} 
            />

            <Content>
                <div className="w-full flex flex-col">

                    <div>
                        <CopyToClipboard text={film.linkToPurchase}>
                     <button
                        className="bg-blue-500 text-white px-4 py-2  rounded-lg "
                        type="button">
                        Copy link to Amazon
                    </button>
                        </CopyToClipboard>
                        
                    </div>

                    

                    <a href={film.linkToPurchase} target="_blank" className="mt-5">
                        Buy on Amazon
                    </a>
                </div>
            </Content>

            <Footer 
            title="Next film"
            href={`/single-film/${+film.id + 1}`}
            />
            </div>
    )
}