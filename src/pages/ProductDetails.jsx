import { useParams } from 'react-router-dom';
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IoMdStar } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
    const [techList, setTechList] = useState([]);
    const { data: techs = [], isLoading, refetch } = useQuery({
        queryKey: ['techs'],
        queryFn: async () => {
            const res = await axios.get('../fakeproducts.json')
            setTechList(res.data);
        }
    })
    const { id } = useParams();
    const idInt = parseInt(id);
    const newTech = techList.find(tech => tech.id === idInt);

    if (isLoading || !techList || !newTech) {
        return <LoadingSpinner />
    }
    return (
        <div className="hero mx-auto my-10 lg:my-16">
            <Helmet>
                <title>TechGallery | Tech Details</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 w-5/6 mx-auto">
                <div className="lg:w-1/2 mx-auto flex flex-col justify-center rounded-3xl">
                    <img src={newTech.image} className="rounded-lg shadow-2xl w-full" />
                </div>
                <div className="lg:w-3/5">
                    <h1 className="text-4xl font-bold font-play">{newTech.name}</h1>
                    <p className="flex flex-row gap-1 font-bold mb-5 mt-3">Rating:
                        <span className="font-semibold">{newTech.ratings}</span>
                        <IoMdStar className="text-yellow-400 text-lg justify-center items-center" /></p>
                    <p className="py-3 px-2 font-bold w-full bg-black text-white rounded-xl">Description</p>
                    <p className="py-3 px-3"><span className="font-bold"></span> {newTech.description}...</p>

                    <p className="py-3 px-2 font-bold w-full bg-black text-white rounded-xl mt-8">Available Colors:</p>
                    <div className="py-6">
                        {
                            newTech.availableColors.map(color => <div key={color}
                                className="flex flex-row gap-2 items-center mr-2 font-bold px-3">
                                <VscDebugBreakpointLogUnverified className="text-deep-purple" />{color}</div>)
                        }
                    </div>

                    <p className="py-3 px-2 font-bold w-full bg-black text-white rounded-xl mt-8">Details</p>

                    <hr />
                    <div className="details lg:w-3/5 my-6 flex lg:justify-between">
                        <div className="pages space-y-2 text-deep-purple font-semibold px-3">
                            <p>Price:</p>
                            <p>Category:</p>
                            <p>Company:</p>

                        </div>
                        <div className="pages font-bold space-y-2 text-right">
                            <p>{newTech.price}</p>
                            <p>{newTech.category}</p>
                            <p>{newTech.company}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;