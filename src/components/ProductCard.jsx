
const ProductCard = ({ tech }) => {
    const { name, image, description, price, category, company, availableColors } = tech;
    return (
        <div className="card bg-base-100 w-[375px] shadow-xl">
            <figure className="">
                <img className="h-80 w-full object-cover"
                    src={image}
                    alt="image" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-center gap-5 mb-3 h-16">
                    <h2 className="card-title font-fira">
                        {name}
                    </h2>
                    <p className="text-right">
                        <span className="badge bg-[#921A40] text-white font-semibold text-lg">${price}</span>
                    </p>
                </div>
                <p className="font-bold">Category: <span className="badge text-[#921A40] bg-[#e6c0cc] 
                font-semibold">{category}</span></p>
                <button className="mt-5 btn bg-[#921A40] text-white text-lg border-2 border-[#921A40] 
                hover:border-[#921A40] hover:bg-transparent hover:text-[#921A40]">View Details</button>
            </div>
        </div>
    );
};

export default ProductCard;