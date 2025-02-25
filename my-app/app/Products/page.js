"use client"
import { useContext, useEffect, useState } from "react";
import { loaderContext } from "../Context";
import Loader from "../components/Loader";
export default  function Page(){
      const {loading,setloading}=useContext(loaderContext)
      const [products,setproducts]=useState([])
      useEffect(() => {
        async function fetchdata() {
            setloading(true);
            try {
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json(); 
                setproducts(data.products || []); 
            } catch (error) {
                console.log(error);
                setproducts([]); 
            } finally {
                setloading(false);
            }
        }
        fetchdata();
    }, []);
    
      return(
        <div>
            {loading ?(
                <Loader/>
            ):(
                <div>
                    <h1>Products </h1>
                    <ul>
                        {products.map((item)=>(
                            <li key={item.id}>
                                <strong>{item.title}</strong> -{item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            )
            }
        </div>
      )
       
      
      
}