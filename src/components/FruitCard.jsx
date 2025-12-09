function FruitCard({ cat, title, img, description, price, oldPrice, onOrder }) {

    return (
        <div className="md:w-[250px] bg-white/50 shadow-md hover:shadow-lg transition hover:scale-105 rounded-2xl p-4 flex flex-col relative">

            <span className="top-6 left-6 text-white/70 px-3 py-1 text-xs bg-softBlue shadow font-body rounded-full absolute">{cat}</span>

            <img className="rounded-lg w-full h-40 object-cover" src={img} alt={title} />

            <h3 className="text-center text-lg font-heading mt-3">{title}</h3>

            <p className="text-primaryBlue text-center text-sm font-body">{description}</p>

            <h4 className="text-center text-black font-heading my-2">
                ${price} 
                <del className="text-sm opacity-50 font-thin text-black/25 ml-1">
                    {oldPrice}
                </del>
            </h4>

            <button
                className="bg-black hover:shadow-lg text-white px-4 py-2 rounded-xl"
                onClick={onOrder}
            >
                Order Now
            </button>

        </div>
    );
}

export default FruitCard;
