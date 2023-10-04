import { useEffect, useState } from "react"
import './Products.css'
import { ProductItem } from "@/components";



const Products = () => {
    const [apiData, setApiData] = useState([]);

    // async function fetchData() {
    //     return fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(data => setApiData(data))
    // }
    async function fetchData() {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        setApiData(data)
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
        apiData?.map((item, index) => (
            <ProductItem imageType={index % 2 === 0 ? "square" : "rounded"} item={item} key={item.id} />
        ))
    )
}

export default Products