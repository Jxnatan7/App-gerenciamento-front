import "./Create.css"

import { Header } from "../../components/Header"
import axios from "axios"
import { useState } from "react"
import { BackButton } from "../../components/ui/BackButton"
import { Link } from "react-router-dom"

const Create = () => {

    const [formValues, setFormValues] = useState({
        shopping_desc: "",
        shopping_value: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const url = "http://localhost:3333"

        axios.post(`${url}/createShopping/1`, JSON.stringify(formValues), { headers: { "Content-Type": "application/json"} })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleChange = (e) => {

        const { name, value } = e.target

        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value
        }))
    }

    return (
        <div className="container">
            <div className="card">
                <Header title="Organize o que quiser" color="#50FA7B"/>
                <BackButton url="/home"/>
                <div className="form-container">
                <p>Cadastrar nova compra</p>
                    <form className="form-body" onSubmit={handleSubmit}>
                        <div className="inputs">
                            <div>
                                <p>Descrição</p>
                                <input 
                                    name="shopping_desc" 
                                    type="text" 
                                    placeholder="ex.: Batata" 
                                    value={formValues.shopping_desc}
                                    onChange={handleChange}
                                    />
                            </div>
                            <div>
                                <p>Preço</p>
                                <input
                                    name="shopping_value" 
                                    type="number" 
                                    placeholder="ex.: R$7,35" 
                                    value={formValues.shopping_value}
                                    onChange={handleChange}
                                    />
                            </div>
                        </div>
                        {/* <Link to="/home"> */}
                            <button className="btn-submit" type="submit">Cadastrar</button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create