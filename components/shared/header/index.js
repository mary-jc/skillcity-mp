export default function Header({name}) {
    return(
        <div className="bg-gradient-to-r from-emerald-800 via-lime-700 to-teal-500 w-full max-w-6xl mx-auto py-4 px-4">
                <h1 className="font-bold text-white text-4xl">{name} Page</h1> 
            </div>
    );
}