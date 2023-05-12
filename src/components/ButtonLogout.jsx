import { useContext } from "react"
import { JwtContext } from "../contex/jwtContext"
import { useNavigate } from "react-router-dom"
import "../components/ButtonLogout.scss"


export const ButtonLogout = () => {
    const {setJwt} =useContext(JwtContext)
    const navigate = useNavigate ();
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setJwt(null)
        navigate("/");
    }
  return (
    <button className="logout" onClick={logout}><img className="logout-button" src="../imagenes/icons8-salida-de-emergencia-50 (2).png" alt="" /></button>
  )
}
