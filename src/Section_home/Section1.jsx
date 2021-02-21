import React from 'react'
import Descripcion from '../components/Descripcion'
import SubtituloH2 from '../components/SubtituloH2'
import  imagen1 from '../Img/imagen1.png'
const estiloImg1 = {
  width: "50%",
  height:"420px",
  position:"absolute",
  zIndex:"1",
  border: "8px white solid",

}

const estiloImg2 = {
  width: "50%",
  height:"420px",
  marginTop: "100px",
  marginLeft: "250px",
  position:"absolute",
  marginRight: "10px",
  border: "8px white solid",
  
}

const estiloImg2Media = {
  width: "40%",
  height:"420px",
  marginTop: "10%",
  marginRight: "",
  position:"absolute",
  marginRight: "10px",
  border: "8px white solid",
  
}


const borde = {
  height: "420px",
  width: "350px",
  border: "8px blue solid",
  position:"",
  marginLeft: "100px",
  marginTop: "45px",
  marginBottom: "50px"
}

const media = () => {
  if (window.innerWidth < 800) {
    return estiloImg2Media
  } else {
    return  estiloImg2
  }
}

const Section1 = () => {
  return (
    <div className="container mt-5" >
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12  mr-5 " >
            <img className="img img-fluid" src={imagen1}  />        
       
            
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
      
    
  )
}

export default Section1
