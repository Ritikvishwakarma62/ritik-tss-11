import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    let navigate = useNavigate()
    let [profile , setProfile] = useState({})

    useEffect(()=>{
        if(! localStorage.getItem("access-token"))
        {
            navigate("/login")
        }
    },[])


    useEffect(()=>{
        axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
            headers : {Authorization : "Bearer " + localStorage.getItem("access-token")}
        }).then(res=>{
            setProfile(res.data)
        })
    },[])

  return (
    <div className="container my-2">
        <div className="row">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                        <h4 className='text-center'>User Profile</h4>
                    <div className="card">
                        <div className='row'>
                            <div className="col-md-3">
                                <img src={profile.avatar} alt="" style={{height : "180px"}} />
                            </div>
                            <div className="col-md-9">
                                <table className="table table-info table-hover">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>{profile.name}</td>
                                        </tr>
                                    
                                        <tr>
                                            <td>Email</td>
                                            <td>{profile.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Role</td>
                                            <td>{profile.role}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile