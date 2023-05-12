import  { useContext } from 'react'
import { JwtContext } from '../contex/jwtContext'
import { useForm } from 'react-hook-form'
import { API } from '../service/Api';
import { useNavigate } from 'react-router-dom';
import "../pages/Login.scss"

const Login = () => {

  const {setJwt} = useContext(JwtContext)
  const {register,handleSubmit} = useForm();
  const navigate= useNavigate();
  const onSubmit = (formData) =>{
  //console.log(formData);
API.post("/login",formData).then((res)=>{
  console.log(res)
   localStorage.setItem("token", res.data.accessToken)
   localStorage.setItem("user", res.data.user.name)

  setJwt(localStorage.getItem("token"));
  navigate('/products');

})
  
}

  return (
    <div className='login-boxx'>
    <form class="login-form" onSubmit={handleSubmit(onSubmit)}>
      <label className='label' htmlFor="email">Email</label>
      <input className='input' type="email" id="email" {...register("email",{required: true})} />

      <label className='label' htmlFor="password">Password</label>
      <input className='input' type="password" id="password" {...register("password",{required: true})} />

      <button className='button' type='submit'>Logearse</button>

    </form>
    </div>

    
  )
}

export default Login