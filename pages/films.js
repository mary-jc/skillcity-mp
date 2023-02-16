import FilmGrid from "@/components/film/films-grid";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Link from "next/link";

export default function FilmPage() {
    return(
        <div className="w-full">
            <Header name="Films"/>

            <Footer title="Home " href="/" />

            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <FilmGrid/>
                </div>
            </Content>

            
            
        </div>
        
    );
}