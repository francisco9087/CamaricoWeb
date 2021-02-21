import React from 'react'
import Descripcion from './Descripcion'
import SubtituloH2 from './SubtituloH2'
import Slide from 'react-reveal/Slide';






const estiloImg3 = {
  height:"420px",
  border: "8px white solid",

}

const ImgServicios = (props) => {
 
  return (
   
  <div className={props.estImgServicios}  >
      <Slide bottom>
        <img className="img img-fluid card" src={props.srcImgServicios} style={estiloImg3}/> 
        </Slide>
        <SubtituloH2 subtituloH2={props.subImgServ} estiloSubtitulo="h4 text-center mt-4" />
        <Descripcion descripcion={props.descImgServ}/> 
     
    
    </div>
  
  
  )
}

export default ImgServicios
