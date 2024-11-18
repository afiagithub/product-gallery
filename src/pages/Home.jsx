import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Helmet } from "react-helmet-async";

const Home = () => {
    const [allTechs, setAllTechs] = useState([])
    const [techList, setTechList] = useState([]);
    // Get all product data
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get('./fakeproducts.json')
            setAllTechs(res.data)
            setTechList(res.data);
        },
        refetchOnWindowFocus: false,
    })

    // Search by name
    const handleSearch = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const newTech = allTechs.filter(tech => tech.name === name);
        setTechList(newTech);
    }

    // Filter by category
    const handleCat = async (e) => {
        e.preventDefault();
        const category = e.target.value;
        const newTech = allTechs.filter(tech => tech.category === category);
        setTechList(newTech);
    }

    // Filter by price range
    const handlePrice = (e) => {
        e.preventDefault();
        const min_price = e.target.min_price.value;
        const max_price = e.target.max_price.value;
        const newTech = allTechs.filter(tech => tech.price >= min_price && tech.price <= max_price);
        setTechList(newTech);
    }

    // Sort by price or rating
    const handleSort = async (e) => {
        e.preventDefault();
        const sortVal = e.target.value;
        // price(lowest to higest)
        if (sortVal == 1) {
            const sortedTechList = [...allTechs].sort((a, b) => a.price - b.price);
            setTechList(sortedTechList)

        }
        // Price (highest to lowest)
        else if (sortVal == 2) {
            const sortedTechList = [...allTechs].sort((a, b) => b.price - a.price);
            setTechList(sortedTechList)
        }
        // Rating (high to low)
        else if (sortVal == 3) {
            const sortedTechList = [...allTechs].sort((a, b) => b.ratings - a.ratings);
            setTechList(sortedTechList)
        }
    }
    // Show Spinner for asyncrounous loading
    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>TechGallery</title>
            </Helmet>
            <h1 className="text-center text-4xl font-fira font-bold mb-5 mt-10 font-rubik">Showcasing Our Product</h1>
            <p className="text-center w-3/5 mx-auto mb-10 lg:mb-20">
                Join our community and stay connected for exclusive offers, new arrivals, and more.
                Shop with us for your tech trove.</p>
            <div className="mb-8 text-sm px-10 lg:px-0 flex flex-col lg:flex-row items-center justify-center gap-5">
                <select onChange={handleCat} className="p-3 text-[#921A40] font-semibold border-2 border-[#921A40] 
                hover:text-[#921A40] hover:bg-transparent hover:border-[#921A40] rounded-lg" name="category">
                    <option selected disabled>Category</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Television">Television</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Camera">Camera</option>
                    <option value="Wearable">Wearable</option>
                </select>
                <form onSubmit={handlePrice} className="flex flex-col lg:flex-row gap-4 items-center justify-end">
                    <div className="flex flex-row gap-5">
                        <input type="text" name="min_price" placeholder="Min. Price"
                            className="input input-bordered w-48 md:w-auto" />
                        <input type="text" name="max_price" placeholder="Max Price"
                            className="input input-bordered w-48 md:w-auto" />
                    </div>
                    <button className="btn bg-[#921A40] text-white border-2 border-[#921A40] 
                hover:border-[#921A40] hover:bg-transparent hover:text-[#921A40]">Filter</button>
                </form>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5 mb-10 px-10 lg:px-4">
                <select onChange={handleSort} className="p-3 text-[#921A40] font-semibold border-2 border-[#921A40] 
                hover:text-[#921A40] hover:bg-transparent hover:border-[#921A40] rounded-lg">
                    <option selected disabled>Sort By</option>
                    <option value="1">Lowest Price to Highest</option>
                    <option value="2">Highest Price to Lowest</option>
                    <option value="3">High Rating</option>
                </select>
                <form onSubmit={handleSearch} className="flex flex-row gap-4 items-center justify-end">
                    <input type="text" name="name" placeholder="Search" className="input input-bordered w-48 md:w-auto" />
                    <button className="btn bg-[#921A40] text-white border-2 border-[#921A40] 
                hover:border-[#921A40] hover:bg-transparent hover:text-[#921A40]">Search</button>
                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                {
                    techList.map((tech) => <ProductCard key={tech.id} tech={tech} />)
                }
            </div>
        </div>
    );
};

export default Home;