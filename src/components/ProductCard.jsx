import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";

const ProductCard = ({ tech }) => {
    const { name, image, price, category, ratings } = tech;
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
                <div className="flex justify-between text-sm">
                    <p className="flex flex-row gap-1 font-bold">Rating:
                        <span className="font-semibold">{ratings}</span>
                        <IoMdStar className="text-yellow-400 text-lg justify-center items-center" /></p>
                    <p className="font-bold">Category: <span className="badge text-[#921A40] bg-[#e6c0cc] 
                font-semibold">{category}</span></p>
                </div>
                <Link to={`/tech-details/${tech.id}`} className="mt-5 btn bg-[#921A40] text-white text-lg border-2 border-[#921A40] 
                hover:border-[#921A40] hover:bg-transparent hover:text-[#921A40]">View Details</Link>
            </div>
        </div>
    );
};

export default ProductCard;