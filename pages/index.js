import Link from "next/link";
import { router, useRouter } from "next/router";

import Bio from "../components/home/bio";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";
import Hero from "@/components/home/hero";
import Topics from "@/components/home/topics";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {

    alert ("you click the button");
    
    // make API call

    router.push("/film");
    // navigate to the books page
  }

  return(
    <div className="w-full">
      <Header name="Home" />

      <Hero />

        <Footer title="Films" href="/films"/>
  
      

      <Bio/>

      <Content>
        <div className="w-full flex flex-col">

          <Topics />

        <div>
          <button className="bg-blue-500 text-white px-2 py-1 rounded mt-5"
          onClick={handleClick}>
          click me!!
          </button>
        </div>
          
        </div>
        
      </Content>

      


    </div>



  )
}