import React from 'react'
import Descripcion from '../components/Descripcion'
import IconoCirculo from '../components/IconoCirculo'
import SubtituloH2 from '../components/SubtituloH2'
import Fade from 'react-reveal/Fade';

const img1 = {
  backgroundImage : `url("https://mdbootstrap.com/img/Photos/Slides/img%20(10).jpg")`,
  backgroundPosition:"center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "auto"
}

const ComoTrabajamos = () => {
  return (

    <div className="z-depth-5 mt-5 " style={img1}>
        
    <div className="container  ">
   
      <div className="row ">
        <Fade bottom>
      <SubtituloH2 subtituloH2="Como Trabajamos" estiloSubtitulo="text-center h1 text-white mt-5"/>
        <div className="col-lg-3 col-md-6 mt-5 mb-5  " > 
          <IconoCirculo awesomeIconoCirculo="far fa-calendar-alt fa-5x text-white   " />
          <SubtituloH2 subtituloH2="subtitulo" estiloSubtitulo="text-center h2 text-white mt-3"/>
          <Descripcion 
            estiloDescripcion="text-center text-white"
            descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Inventore, deserunt incidunt accusantium assumenda, asperiores recusandae maxime " 
          />
        </div>
        
        <div className="col-lg-3 col-md-6 mt-5 mb-5 ">
          <IconoCirculo awesomeIconoCirculo="far fa-calendar-alt fa-5x text-white  " />
          <SubtituloH2 subtituloH2="subtitulo" estiloSubtitulo="text-center h2 text-white mt-3"/>
          <Descripcion 
            estiloDescripcion="text-center text-white"
            descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Inventore, deserunt incidunt accusantium assumenda, asperiores recusandae maxime " 
          />
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mb-5  ">
          <IconoCirculo awesomeIconoCirculo="far fa-calendar-alt fa-5x  text-white " />
          <SubtituloH2 subtituloH2="subtitulo" estiloSubtitulo="text-center h2 text-white mt-3"/>
          <Descripcion 
            estiloDescripcion="text-center text-white"
            descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Inventore, deserunt incidunt accusantium assumenda, asperiores recusandae maxime " 
          />
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mb-5  ">
          <IconoCirculo awesomeIconoCirculo="far fa-calendar-alt fa-5x  text-white " />
          <SubtituloH2 subtituloH2="subtitulo" estiloSubtitulo="text-center h2 text-white mt-3"/>
          <Descripcion
            estiloDescripcion="text-center text-white"
            descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Inventore, deserunt incidunt accusantium assumenda, asperiores recusandae maxime " 
          />
        </div>
        </Fade>
      </div>
    </div>
    
  </div>
  )
}

export default ComoTrabajamos
