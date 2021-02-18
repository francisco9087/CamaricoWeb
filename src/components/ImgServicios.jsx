import React from 'react'
import Descripcion from './Descripcion'
import SubtituloH2 from './SubtituloH2'

const estiloImg3 = {
  height:"420px",
  border: "8px white solid",

}

const ImgServicios = (props) => {
  return (
    <div className={props.estImgServicios}>
      <img className="img img-fluid" src={props.srcImgServicios} style={estiloImg3}/> 
      <SubtituloH2 subtituloH2={props.subImgServ}/>
      <Descripcion descripcion={props.descImgServ}/>     
    </div>
  )
}

export default ImgServicios
