export default function Hero() {
    return(
        <div className="w-full max-w-6xl mx-auto">
             <div className="w-full flex flex-row space-x-2 py-4">
            <div className="w-3-12">
                <img src="/assets/profile.png" className="rounded-full w-40" />
            </div>
            <div className="w-9/12">
                <h1 className="text-4xl font-bold">
                    Mary Judith Crucero
                </h1>
                <p className="text-xl text-gray-700">
                    bio
                </p>
            </div>
            </div>
        </div>
       
    );

}