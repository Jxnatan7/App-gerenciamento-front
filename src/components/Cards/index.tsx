import { CardContent } from "./CardContent"
import "./style.css"

export const Card = ({title, component}) => {
    return (
        <div className="card-container">
            <p>{title}</p>
            <div className="card-body">
                {component}
            </div>
        </div>
    )
}