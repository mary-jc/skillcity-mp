export default function Hero( {name} ) {
    return(
        <div className="w-full py-20 bg-teal-900 text-white text-center text-2xl">
        {name}
         <img src="/public/me.png"/>
        </div>

    )
}