import { StyleTag } from "../Tags"
import "./style.css"

export const Header = ({title, color}) => {
    return (
        <div className="header-container">
            <StyleTag item={`${title}`} color={`${color}`}/>
        </div>
    )
}