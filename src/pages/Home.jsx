import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const Home = () => {
    const [foodList, setFoodList] = useState([]);
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get('./fakeproducts.json')
            setFoodList(res.data);
        }
    })
    return (
        <div>
            <h1 className="text-center text-4xl font-fira font-bold mb-5 mt-10 font-rubik">Showcasing Our Product</h1>
            <p className="text-center w-3/5 mx-auto mb-10 lg:mb-20">
                Join our community and stay connected for exclusive offers, new arrivals, and more.
                Wear your story with Snowbell.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    foodList.map(food => <div className="card bg-base-100 w-96 shadow-xl" key={food.id} food={food}>
                        <figure>
                            <img
                                src={food.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;