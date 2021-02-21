import React from 'react'
import ImgGaleria from '../components/ImgGaleria'
import ImgServicios from '../components/ImgServicios'
import SubtituloH2 from '../components/SubtituloH2'


const Galeria = () => {
  return (
    <div className="container mt-3">
        <div className="row">
          <SubtituloH2 subtituloH2="Galeria" estiloSubtitulo="text-center h1 mt-5"/>
 
          <ImgGaleria 
            estImgServicios="col-lg-4 mt-5" 
            srcImgServicios="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" 
          />
       
          <ImgGaleria 
            estImgServicios="col-lg-4 mt-5" 
            srcImgServicios="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" 
          />
          
          <ImgGaleria 
            estImgServicios="col-lg-4 mt-5" 
            srcImgServicios="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" 
          />

         
          <ImgGaleria 
            estImgServicios="col-lg-4 mt-5" 
            srcImgServicios="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" 
          />
          <ImgGaleria 
            estImgServicios="col-lg-4 mt-5" 
            srcImgServicios="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" 
          />
          <ImgGaleria 
            estImgServicios="col-lg-4 mt-5" 
            srcImgServicios="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" 
          />
        </div>
      </div>
  )
}

export default Galeria
