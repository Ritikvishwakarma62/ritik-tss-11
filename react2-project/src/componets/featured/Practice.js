import React ,{useState} from 'react'

const Practice = () => {
    let [like , setLike] = useState("fa fa-heart-o");
    let [like1 , setLike1] = useState("fa fa-heart-o");
    let [like2 , setLike2] = useState("fa fa-heart-o");
    let [like3 , setLike3] = useState("fa fa-heart-o");
    let[count , setCount] = useState(1)
    let[count1 , setCount1] = useState(1)
    let[count2 , setCount2] = useState(1)
    let add = ()=>{
        if(like == "fa fa-heart-o"){
            setLike("fa fa-heart")
            setCount(count +1)
        }
        else{
            setLike("fa fa-heart-o")
            setCount(count -1)
        }
    }
    let add1 = ()=>{
        if(like1 == "fa fa-heart-o"){
            setLike1("fa fa-heart");
            setCount1(count1 +1);
        }
        else{
            setLike1("fa fa-heart-o");
            setCount1(count1 -1);
        }
    }
    let add2 = ()=>{
        if(like2 == "fa fa-heart-o"){
            setLike2("fa fa-heart");
            setCount2(count2 +1);
        }
        else{
            setLike2("fa fa-heart-o");
            setCount2(count2 -1);
        }
    }
    let move = ()=>{
        if(like3 == "fa fa-heart-o"){
            setLike3("fa fa-heart");
        
        }
        else{
            setLike3("fa fa-heart-o");
            
        }
    }

    return (
        <div className='container my-2'>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <img src="assets/imges/4.jpeg" style={{height : "50px",width:'50px', borderRadius : "40px"}} alt="" />
                            <b className='m-2'>ritik_vishwakarma_45</b>
                        </div>
                        <div className="card-body">
                          <img  src="/assets/imges/6.jpeg" style={{ height: "320px", width: "320px" }} alt=""/> 
                        </div>
                        <div className="card-footer">
                            {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
                            <h2 style={{color : "red" }}>
                            <i class={like} onClick={add} aria-hidden="true"> </i> {count}  <i class="fa fa-comment-o fa-1x p-2" aria-hidden="true"></i> 
                            </h2>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-header">
                            <img src="assets/imges/4.jpeg" style={{height : "50px",width:'50px', borderRadius : "40px"}} alt="" />
                            <b className='m-2'>ritik_vishwakarma_45</b>
                        </div>
                        <div className="card-body">
                            <img src="/assets/imges/5.jpeg" style={{ height: "320px", width: "330px" }} alt="" />
                        </div>
                        <div className="card-footer">
                            {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
                            <h2 style={{color : "red" }}>
                            <i class={like1} onClick={add1} aria-hidden="true"></i> {count1}  <i class="fa fa-comment-o fa-1x p-2" aria-hidden="true"></i>
                            </h2>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-header">
                            <img src="assets/imges/4.jpeg" style={{height : "50px",width:'50px', borderRadius : "40px"}} alt="" />
                            <b className='m-2'>ritik_vishwakarma_45</b>
                        </div>
                        <div className="card-body">
                            <img src="/assets/imges/4.jpeg" style={{ height: "320px", width: "320px" }} alt="" />
                        </div>
                        <div className="card-footer">
                            {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
                            <h2 style={{color : "red" }}>
                            <i class={like2} onClick={add2} aria-hidden="true"></i> {count2}  <i class="fa fa-comment-o fa-1x p-2" aria-hidden="true"></i>
                            </h2>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Practice