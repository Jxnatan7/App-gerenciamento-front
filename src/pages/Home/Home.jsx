import './Home.css'

import axios from 'axios'

import { Card } from '../../components/Cards'
import { Anotation } from '../../components/Cards/Annotations'
import { CardContent } from '../../components/Cards/CardContent'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'

function Home() {

  const url = "http://localhost:3333"

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
        await axios.get(`${url}/userAnotations`)
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
    <div className="container">
      <div className="card">
        <Header title="Organização" color="#50FA7B"/>
        <Card title="Compras" component={[
          <CardContent title="Compras de comida"/>
        ]}/>
        <Card title="Anotações" component={
          data.map(item => {
            return <Anotation key={item.anotation_id} description={item.anotation_desc}/>
          })
        }/>
        <Footer />
      </div>
    </div>
  )
}

export default Home
