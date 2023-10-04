import { useEffect, useState } from "react"
import './Products.css'
import { Loading, ProductItem } from "@/components";
import { useMedia } from 'react-use';


const Products = () => {
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const isSmallScreen = useMedia('(max-width: 500px)')



    // async function fetchData() {
    //     return fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(data => setApiData(data))
    // }
    async function fetchData() {
        setIsLoading(true);
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        setApiData(data)
        setIsLoading(false);
    }

    useEffect(() => {
        //1st way
        // fetch('https://fakestoreapi.com/products')
        //         .then(res => res.json())
        //         .then(data => setApiData(data))

        //2nd way
        fetchData();
    }, []);

    return (
        <>
            <div>
                {isSmallScreen ? (
                    <h3>Your screen is small</h3>
                ) : (
                    <h1>Your screen is big</h1>
                )}
            </div>
            <div>
                {isLoading ? (
                    <Loading />
                ) : (

                    apiData?.map((item, index) => (
                        <ProductItem imageType={index % 2 === 0 ? "square" : "rounded"} item={item} key={item.id} />
                    ))
                )}
            </div>
        </>



    )
}

export default Products