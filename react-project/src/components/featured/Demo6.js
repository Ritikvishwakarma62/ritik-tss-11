import React, { useState } from 'react'
import axios from 'axios';
const Demo6 = () => {

    let [pro, setPro] = useState([]);
    let [spinner, setSpinner] = useState(false)

    let product = () => {
        setSpinner(true)
        axios.get("https://dummyjson.com/products").then(response => {
            setPro(response.data.products);
            setSpinner(false)
        })
    }

    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <div className="col-md-12">
                        <button className='btn btn-success' onClick={product} >GetProduct {spinner == true ? <span className='spinner-border spinner-border-sm'></span> : ""} </button>
                        <div className="row">

                            {
                                pro.map((value, index) => {
                                    return (
                                        <div className="col-md-4">
                                            <div className="card m-2">
                                                <div className="card-header">
                                                    <h6  >{value.title}</h6>
                                                </div>
                                                <div className="card-body">
                                                    <img src={value.thumbnail} className='img-fluid' style={{height : "200px"}}  />
                                                    <p className='m-0 p-0'><b>$</b> {value.price}</p>
                                                    <p>{value.category}</p>
                                                </div>
                                                <div className="card-footer">
                                                    <button className='btn btn-info'>Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo6