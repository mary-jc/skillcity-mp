import { useState } from "react"

export default function Bio() {
    const[likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleIncrementLike = () => {
        let newValue = likes+1;

        setLikes(newValue)
    }

    const handleDecrementLike = () => {
        let newValue = dislikes +1;

        setDislikes(newValue);
    }
    return(
           <div 
           className="border rounded-full boder-4 border-solid border-teal-900 text-center py-1 mt-10"
           >

           <p>Bootcamp student Software Engineering at SkillsCity.</p> 
            <p>I'm a beginner level and for this website I'm using Js,Node and React.</p>
            <p>Put a like or a dislike for the website, any feedback would be amazing!😀</p>

            <div className="w-full flex flex-row justify-center mt-10">

            <p className="text-center text-zinc-400 font-medium px-3">
                {likes} likes
                </p>

            
                <div>
                <button className="bg-blue-900 text-white px-3 py-1 rounded-lg "
                onClick={handleIncrementLike}> 
            Like 
            </button>
            </div>
            <p 
            className="text-center text-zinc-400 font-medium px-3"
            >
                {dislikes} dislikes
                </p>

            <div>
                 <button className="bg-rose-900 text-white px-3 py-1 rounded-lg"
                 onClick={handleDecrementLike}>
                Dislike
            </button>
            </div>
           
            
            </div>
            
            
            
            </div>

    )
}