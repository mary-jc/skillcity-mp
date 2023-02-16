import { useState } from "react";

export default function FilmItem({film}) {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        let newLikes = likes +1;
        setLikes(newLikes);
    }

    return(
        <div className="border rounded-lg p-4">
            <img src={film.imgUrl} className="rounded-lg h-50" />
            <p className="text-xl font-medium">{film.title}</p>
            <p className="text-gray-700">{film.production}</p>
            <button 
            onClick={handleLike}
            type="button"
            className="bg-blue-500 px-2 py-1 rounded text-white">
                Like ({likes} likes)
            </button>
        </div>
    )
}