'use client';

import React from 'react'

const Sauna = () => {

  const [x,setX] = React.useState(0);
  const [y,setY] = React.useState(0);
  const [z,setZ] = React.useState(0);
  const dataHandle = [["AGENTE DE VENTAS",'agenteVentas'],["NOMBRE DEL CLIENTE",'cliente'], ["NOMBRE DEL PROYECTO",'nombreProyecto'], ["UBICACIÓN DEL PROYECTO",'ubiProyecto']]
  const [projectData, setProjectData] = React.useState({agenteVentas:'',cliente:'',nombreProyecto:'',ubiProyecto:''})
  
  const siguiente = () => {
    event.preventDefault(); 
    const data={projectData,size:{largo:x,ancho:y,alto:z}}
    sessionStorage.setItem("data",JSON.stringify(data))
    const url =  `/sauna/size`
    window.location.href=url;
  }

 const saveInput = (item, value) => {
    let inputData =  projectData;
    inputData[item]=value
    setProjectData({...inputData})  
 }


  return (
    
    <form onSubmit={siguiente}>
      <div className='column'>
        <h1>Sun Sauna</h1>
        
       { dataHandle.map((item,index)=>(<div key={index} className='input-container'>
          <strong>{item[0]} </strong>
          <input required type='text'
            onChange={(e)=>{saveInput(item[1], e.target.value)}}
          ></input>
          </div>))}

        <h1>
          INGRESA LAS MEDIDAS DEL SAUNA (METROS)
        </h1>
        <div className='input-container'>
          <strong>LARGO</strong>
          <input required type='number' step="any"
            onChange={(e)=>{setX(e.target.value)}}
          ></input>
        </div>
        <div className='input-container'>
          <strong>ANCHO</strong>
          <input required type='number' step="any"
            onChange={(e)=>{setY(e.target.value)}}
          ></input>
        </div>
        <div className='input-container'>
          <strong>ALTO</strong>
          <input required type='number' step="any"
            onChange={(e)=>{setZ(e.target.value)}}
          ></input>
        </div>
        <button type='submit'>
          siguiente
        </button>
      </div>
    </form>

  )
}

export default Sauna