import React, { useState,useEffect } from 'react'
import axios from 'axios';
const Demo = () => {
    let [a, setA] = useState("password");
    let [show, setShow] = useState("show ");

    let task = () => {
        if (show == "show") {
            setA("text");
            setShow("Hide")
        }
        else {
            setA("password")
            setShow("show")
        }
    }

    let [user, setUser] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(responce=>{
            setUser(responce.data)
        })
    },[])

    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        Password <input type={a} /> <button onClick={task} >{show}</button>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <table className="table table-hover table-info">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                           {
                            user.map((value,index)=>{
                                return(
                                    <tbody>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.address.city}</td>
                                        <td>{value.company.name}</td>
                                    </tr>
                                </tbody>
                                )
                            })
                           }
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Demo