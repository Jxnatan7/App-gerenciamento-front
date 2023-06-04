import "./style.css"
import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="footer-container">
            <Link to="/create">
                <button className="btn"> <FaPlus color="#FFF" fontSize={20}/> </button>
            </Link>
        </div>
    )
}