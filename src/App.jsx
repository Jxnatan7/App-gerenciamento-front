import './App.css'

import axios from 'axios'

import { Card } from './components/Cards'
import { Annotation } from './components/Cards/Annotations'
import { CardContent } from './components/Cards/CardContent'
import { Header } from './components/Header'

function App() {

  return (
    <div className="container">
      <div className="card">
        <Header title="Organização" color="#50FA7B"/>
        <Card title="Compras" component={[
          <CardContent title="Compras de comida"/>
        ]}/>
        <Card title="Compras" component={[
          <Annotation description={"teste"}/>,
        ]}/>
      </div>
    </div>
  )
}

export default App
