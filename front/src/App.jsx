import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Componentes/Footer/Footer'
import Header from './Componentes/Header/Header'
import Seccion from './Componentes/Seccion/Seccion'
import Canchas from './Componentes/Canchas/Canchas'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Formulario from './Componentes/Formulario/Formulario'
import Tarjetaquincho from './Componentes/Tarjeta/Tarjeta'
import Eventos from './Componentes/Eventos/Eventos'

function App() {

  return (
    <Router>
      <div className='contenedor-total'>
        <Header />
        
        <Routes basename="/entrega-final">
        <Route path="/" element={<Seccion />} />
          <Route path="/seccion" element={<Seccion />} />
           <Route path="/reservas" element={<div><Canchas /><Formulario /></div>} />
          <Route path="/eventos" element={ <div> <Tarjetaquincho /><Eventos /></div>} />
          
         

        </Routes>
        
        <Footer />


      </div>
    </Router>
  )
}

export default App
