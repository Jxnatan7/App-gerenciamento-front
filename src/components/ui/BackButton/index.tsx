import "./style.css"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

export const BackButton = ({ url }) => {

    return (
        <div className="back-container">
            <Link to={url}>
                <button className="btn-back">
                    <FaHome fontSize={25} color="#000"/>
                </button>
            </Link>
        </div>
    )
}