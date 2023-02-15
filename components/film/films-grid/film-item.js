export default function FilmItem({film}) {
    return(
        <div className="bg-lime-100 text-black">
            <p>{film.title}</p>
            <p>{film.production}</p>
        </div>
    )
}