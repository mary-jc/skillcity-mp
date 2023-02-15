import Link from "next/link";
import { router, useRouter } from "next/router";

import Hero from "../components/home/hero";
import Bio from "../components/home/bio";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {

    alert ("you click the button");
    
    // make API call

    router.push("/film");
    // navigate to the books page
  }


  return (
    <div>  ///className="bg-gradient-to-r from-emerald-800 via-lime-700 to-teal-500"
      <Hero name = "Mary Judith Crucero"/>

      <Bio/>

      <button className="bg-blue-500 text-white px-2 py-1 rounded"
      onClick={handleClick}>
        click me!!
      </button>


      <div>
        <Link href="/films">
          Go to film page
        </Link>
      </div>


    </div>   
  )
}