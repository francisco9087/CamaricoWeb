import React from 'react'
import ImgServicios from '../components/ImgServicios'
import SubtituloH2 from '../components/SubtituloH2'

const NuestroServicio = () => {
  return (
   
    <div className="container mt-5">
    
      <div className="row">
      <SubtituloH2 estiloSubtitulo="h1 text-center" subtituloH2="Nuestros Servicios" />  
      
          <ImgServicios
            estImgServicios="col-lg-4 mt-5" 
            srcImgServicios="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" 
            subImgServ="Sanitisacion Hogar"
            descImgServ="
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus consectetur, id ab non eius quasi exercitationem maxime,
              laudantium optio tempore est"
          />
          <ImgServicios 
            estImgServicios="col-lg-4 mt-5" 
            srcImgServicios="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" 
            subImgServ="Sanitisacion Comercial"
            descImgServ="
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus consectetur, id ab non eius quasi exercitationem maxime,
              laudantium optio tempore est"  
          />
          <ImgServicios 
            estImgServicios="col-lg-4 mt-5" 
            srcImgServicios="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" 
            subImgServ="Sanitisacion Empresas"
            descImgServ="
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Natus consectetur, id ab non eius quasi exercitationem maxime,
              laudantium optio tempore est"
          />
      </div>
    </div>
   
  )
}

export default NuestroServicio
