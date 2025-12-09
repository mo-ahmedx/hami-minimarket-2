import Chicken from '../assets/friedChicken.jpg';
function About() {
    return(
        <>
        
        <h1 className="text-center font-heading mt-6">About Us</h1>
        <div className="flex flex-col md:flex-row justify-between gap-10 items-center mt-4 mb-4">
            <div className="rounded-full  shadow-md">
                <img src= "https://images.unsplash.com/photo-1534723452862-4c874018d66d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='h-[300px] w-[400px] mt-6  rounded-xl md:rounded-lg md:ml-2 object-cover shadow-xl' />
            </div>
            <div>
                <h1 className='font-heading text-lg ml-2'>About Hami MiniMarket</h1>
                <p className="text-lg font-body mb-3 ml-2 ">
            Hami MiniMarket is a community-focused grocery shop created by HamiSkills to bring fresh,<br/>high-quality fruits 
            and vegetables closer to your home.
        </p>

        <p className="text-lg font-body mb-3 ml-2">
            We believe healthy living starts with clean, natural produce and our mission is to make it accessible,<br/>
            affordable, and trustworthy for everyone in the neighborhood.
        </p>

        <p className="text-lg font-body mb-3 ml-2">
            Every item is carefully selected from local suppliers who share our commitment to freshness and quality.<br />
            From crisp vegetables to sweet seasonal fruits, we aim to provide ingredients that support both 
            everyday meals and healthier lifestyles.
        </p>

        <p className="text-lg font-body ml-2">
            Whether you want to browse in person or order online, Hami MiniMarket is here to serve you with 
            convenience and care.
        </p>
            </div>
        </div>
        
        </>
    )
}

export default About