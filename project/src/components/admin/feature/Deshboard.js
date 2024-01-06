import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Deshboard = () => {

  let navigate = useNavigate()
  useEffect(()=>{
    if(! localStorage.getItem("admin-token"))
    {
      navigate("/")
    }
  },[])
  return (
    <div>Deshbord</div>
  )
}

export default Deshboard