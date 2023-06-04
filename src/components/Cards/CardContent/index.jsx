import axios from "axios"
import { CardItem } from "../CardItems"
import "./style.css"
import { useState, useEffect } from "react"

export const CardContent = ({title}) => {

    const url = "http://localhost:3333"

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            await axios.get(`${url}/userShoppings/1`)
                .then(response => {
                    setData(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData()
    }, [])

    return (
        <div className="content-container"> 
            <div className="content-header">
                {`<`} <div>{title}</div> 
            </div>
            {data.map(item => {
                return (
                    <CardItem key={item.shopping_id} title="item" value={item.shopping_desc} price={item.shopping_value}/>
                )
            }
            )}
            <div className="content-footer">
                {`/>`} 
            </div>
        </div>
    )
}