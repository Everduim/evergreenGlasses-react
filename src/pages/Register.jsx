import { useForm } from 'react-hook-form'
import { API } from '../service/Api';
import { useNavigate } from 'react-router-dom';
import "../pages/Register.scss"

const Register = () => {
  const {register,handleSubmit} = useForm();
  const navigate = useNavigate();
  const onSubmit = (formData) =>{
    //console.log(formData);
     API.post("users",formData).then ((res)=>{
      console.log(res)
    })
    navigate("/login")
    
  }

  return (
      <div className='container'>
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
  <fieldset className='fieldset'>
    {/* <legend>Personal Information</legend> */}

    <div>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" {...register("name", { required: true })} />
    </div>

    <div>
      <label htmlFor="lastName">Last name</label>
      <input type="text" id="lastName" {...register("lastName", { required: true })} />
    </div>

    <div>
      <label htmlFor="address">Address</label>
      <input type="text" id="address" {...register("address")} />
    </div>

    <div>
      <label htmlFor="phone">Phone number</label>
      <input type="tel" id="phone" {...register("phone")} />
    </div>
  

  
    {/* <legend>Login Information</legend> */}

    <div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...register("email", { required: true })} />
    </div>

    <div>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" {...register("password", { required: true })} />
    </div>
    </fieldset>
  

  <button type="submit">Register</button>
</form>
</div>




  )
}

export default Register





