import React from 'react'
import Descripcion from '../components/Descripcion'
import SubtituloH2 from '../components/SubtituloH2'

const img1 = {
  backgroundImage : `url("https://mdbootstrap.com/img/Photos/Slides/img%20(10).jpg")`,
  backgroundPosition:"center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "400px"
}

const ComercialResidencial = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 z-depth-5 " style={img1}>
          <SubtituloH2 subtituloH2="Galeria" estiloSubtitulo="text-center h1 font-weight-bold text-white mt-5"/> 
          <Descripcion
            estiloDescripcion="text-center text-white  font-italic h5 mb-5"
            descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Inventore, deserunt incidunt accusantium assumenda, asperiores recusandae maxime 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Inventore, deserunt incidunt accusantium assumenda, asperiores recusandae maxime" 
          /> 
        </div>
        <div className="col-lg-6 z-depth-5 " style={img1}>
          <SubtituloH2 subtituloH2="Galeria" estiloSubtitulo="text-center h1 font-weight-bold text-white mt-5"/> 
          <Descripcion
            estiloDescripcion="text-center text-white font-italic h5 mb-5 "
            descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Inventore, deserunt incidunt accusantium assumenda, asperiores recusandae maxime
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Inventore, deserunt incidunt accusantium assumenda, asperiores recusandae maxime " 
          />      
        </div>
      </div>
    </div>
  )
}

export default ComercialResidencial
