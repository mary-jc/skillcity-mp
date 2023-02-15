import FilmGrid from "@/components/film/films-grid";
import Link from "next/link";

export default function FilmPage() {
    return(
        <div className="bg-emerald-600 text-white">
            Film page

            <FilmGrid />


            <div>
                <Link href="/">
                    Go to homepage
                </Link>
            </div>
        </div>
    )
}