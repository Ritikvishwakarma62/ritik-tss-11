import React, { useState } from 'react'

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

    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        Password <input type={a} /> <button onClick={task} >{show}</button>
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo