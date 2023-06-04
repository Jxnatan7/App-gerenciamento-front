import { Header } from "../../components/Header"
import "./Create.css"

const Create = () => {
    return (
        <div className="container">
            <div className="card">
                <Header title="Organize o que quiser" color="#50FA7B"/>
                <div className="form-container">
                <p>Cadastrar nova compra</p>
                    <form className="form-body" action="">
                        <div className="inputs">
                           <input type="text" placeholder="ex.: Batata"/>
                           <input type="number" placeholder="ex.: R$7,35"/>
                        </div>
                    </form>
                    <button className="btn-submit" type="submit">Cadastrar</button>
                </div>
            </div>
        </div>
    )
}

export default Create