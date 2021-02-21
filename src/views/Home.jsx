import React from 'react'
import Carrusel from '../components/Carrusel'
import FormularioContacto from '../components/FormularioContacto'
import PiePagina from '../components/PiePagina'
import ComercialResidencial from '../Section_home/ComercialResidencial'
import ComoTrabajamos from '../Section_home/ComoTrabajamos'
import Galeria from '../Section_home/Galeria'
import NuestroServicio from '../Section_home/NuestroServicio'
import Section1 from '../Section_home/Section1'


const Home = () => {
  return (
    <div>
      <Carrusel />
      <Section1/>
      <NuestroServicio/>
      <ComoTrabajamos/>
      <Galeria/>
      <ComercialResidencial/>
      <FormularioContacto/>
      <PiePagina/>
    </div>
  )
}

export default Home
