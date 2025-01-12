"use client"
import React from 'react'

const FinalData = () => {
    const [data, setData] = React.useState(null)
    const modelsTable= {
        m1:{unidad:"Grande",kw:"5", cable:"8 AWG", fases:[1,2]}
    }

    React.useEffect(() => {
        const getData = async () => {
          const dataStorage = JSON.parse(sessionStorage.getItem("data"));
          setData({...dataStorage})
        }
        getData();
      },[])

      const himalayaCot = () => {

      }
      
      const cuartoCot = () => {

      }

      const paqueteCot = () => {

      }

      const accesoriosCot = () => {

      }

  return (
    <div>
        <h1>
            Datos Capturados 
        </h1>
        <p><strong>CLIENTE:</strong>{data?.projectData.cliente}</p>
            <p><strong>PROYECTO:</strong>{data?.projectData.nombreProyecto}</p>
            <p><strong>UBICACION:</strong>{data?.projectData.ubiProyecto}</p> 
            
            <p><strong>MEDIDAS</strong></p>
            <p><strong>LARGO:</strong>{data?.size.largo}METROS</p>
            <p><strong>ANCHO:</strong>{data?.size.ancho}METROS</p>
            <p><strong>ALTO:</strong>{data?.size.alto}METROS</p>
            
            <p><strong>MADERA:</strong>{data?.tipoMadera}</p>
            <p><strong>PISO:</strong>{data?.piso}</p>
            <p><strong>ILUMINACIÓN:</strong>{data?.iluminacion}</p>
            <p><strong>PAQUETE:</strong>{data?.paquete}</p>

    </div>
  )
}

export default FinalData