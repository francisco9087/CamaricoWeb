import React from 'react'
import Carrusel from '../components/Carrusel'
import Descripcion from '../components/Descripcion'
import IconoHome from '../components/IconoHome'
import ImgServicios from '../components/ImgServicios'
import PiePagina from '../components/PiePagina'
import SubtituloH2 from '../components/SubtituloH2'

const estiloImg1 = {
  width: "330px",
  height:"420px",
  position:"absolute",
  zIndex:"1000",
  border: "8px white solid",

}

const estiloImg2 = {
  width: "350px",
  height:"420px",
  marginTop: "100px",
  marginLeft: "250px",
  position:"absolute",
  marginRight: "10px",
  border: "8px white solid",
  
}

const img1 = {
  backgroundImage : `url("https://mdbootstrap.com/img/Photos/Slides/img%20(10).jpg")`,
  backgroundPosition:"center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "600px"
}


const borde = {
  height: "420px",
  width: "380px",
  border: "8px blue solid",
  position:"",
  marginLeft: "100px",
  marginTop: "45px",
  marginBottom: "50px"
}

const Home = () => {
  return (
    <div>
      <Carrusel />
      <div className="container mt-5" >
        <div className="row justify-content-center">
          <div className="col-lg-6  mr-5 " >
            <img className="float-left" src="https://mdbootstrap.com/img/Photos/Slides/img%20(14).jpg"  style={estiloImg1}/>
            <div >
            <img className="" src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"  style={estiloImg2}/>
            </div>
            
            <div style={ borde}>

            </div>
          </div>

          <div className="col-lg-4 ml-5" >
              <span>Acerca de</span>
              <SubtituloH2 className="mt-5" subtituloH2="La mejor desinfecion" /> 
              <Descripcion 
                descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, deserunt incidunt accusantium assumenda, asperiores recusandae maxime " 
              />
            
            
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
        <SubtituloH2 className="mt-5" subtituloH2="Nuestros Servicios" /> 
        
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

      <div className=" " style={img1}>
        
        <div className="container">
       
          <div className="row">
            <div className="col-lg-3">
              <p>asdasdasdasd</p>
            </div>
            <div className="col-lg-3">

            </div>
            <div className="col-lg-3">

            </div>
            <div className="col-lg-3">

            </div>
          </div>
        </div>
      </div>
      <PiePagina/>
    </div>
  )
}

export default Home
