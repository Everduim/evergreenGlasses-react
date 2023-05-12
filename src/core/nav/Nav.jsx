import "./Nav.scss"
import { useContext } from 'react'
import {Link} from "react-router-dom"
import { JwtContext } from "../../contex/jwtContext"
import { ButtonLogout } from "../../components/ButtonLogout"

const Nav = () => {
    const { jwt} = useContext(JwtContext)
    const email =localStorage.getItem('user')
  return (
    <div>
      <nav className="nav">
        <h2 className="logo"><img src="../imagenes/icons8-visible-64.png" alt="" /> EVERGREEN <img src="../imagenes/icons8-visible-64.png" alt="" /></h2>
        <ul className="nav-ul">
          <li className="nav-li">
            <Link className="nav-li" to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link className="nav-li" to="/about">About</Link>
            </li>
            <li className="nav-li">
            <Link className="nav-li" to="/contact">Contact</Link>
            </li>
          {jwt &&(
            <>
          <li className="nav-li">
            <Link className="nav-li" to="/products">Products</Link>
            </li>

            <li className="nav-li1">
               <ButtonLogout className="nav-li"></ButtonLogout>  
            </li>
            </>
            )}
            

           
            {jwt === null &&(
              <>
            <li>
            <Link className="nav-li" to="/register">Register</Link>
            </li>
            <li>
            <Link className="nav-li1" to="/login">Login</Link>
            </li>
            </>

)}
            

        
            {/* {gender != undefined && (<li>Wellcome{gender}</li>)}  */}


        </ul>
      </nav>
    </div>
  )
}

export default Nav