import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [techList, setTechList] = useState([]);
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get('./fakeproducts.json')
            setTechList(res.data);
        }
    })
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className="text-center text-4xl font-fira font-bold mb-5 mt-10 font-rubik">Showcasing Our Product</h1>
            <p className="text-center w-3/5 mx-auto mb-10 lg:mb-20">
                Join our community and stay connected for exclusive offers, new arrivals, and more.
                Wear your story with Snowbell.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    techList.map(tech => <ProductCard key={tech.id} tech={tech}/>)
                }
            </div>
        </div>
    );
};

export default Home;