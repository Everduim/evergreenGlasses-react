import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "../pages/ProductFullInfo.scss"

const productFullInfo = () => {
    const {id} =useParams()
    const [product, setProducts]= useState([])

    useEffect(()=> {
        const getInfoById= async ()=> {
        const res = await axios.get(`http://localhost:3000/products/${id}`)
             setProducts(res.data)
            console.log(res.data)
        }
         getInfoById()
    },[])
  return (
    <>

     <div className='.product-fullinfo-container '>
        {product ? (
            <div className='product-fullinfo-box ' >
                <h2 className='name-product'>{product.product}</h2>
                <img
              className="product-img-info"
              src={product.image}
              alt={product.product}
            />
            <span className='price'>{product.price}</span>
                <p className="detail-info">{product.info}</p>
            </div>

        ): null}
    </div> 
    </>
  )
}

export default productFullInfo