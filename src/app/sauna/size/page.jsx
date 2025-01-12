'use client';

import React, { useState, useEffect } from 'react';

const Size = () => {
  const [medidas, setMedidas] = useState(null);
  const [activeWall, setActiveWall]= useState([false, false, false, false])
  const [data, SetData] = useState(null)
  const options= ["Pared De Cristal","Enduelado Por Dentro","Enduelado Por Ambos lados"];
  let handleDataP= {p0:"",p1:"",p2:"",p3:"",}
  useEffect(() => {
    const getSizen = async () => {
      const dataStorage = JSON.parse(sessionStorage.getItem("data"));
      setMedidas([dataStorage.size.largo,dataStorage.size.ancho,dataStorage.size.largo,dataStorage.size.ancho,dataStorage.size.alto])
      SetData({...dataStorage, size:dataStorage.size,paredes:handleDataP})
    }
    getSizen();
  },[])

  const active = (item) => {
    let activeHandle = [...activeWall];
    activeHandle[item]= !activeHandle[item];
    setActiveWall(activeHandle);
   if (activeHandle[item]===false){
    handleDataP[`p${item}`]="";
    SetData({...data,paredes:handleDataP})
   }
  }

  const kindOfWall = (index,value) =>{
    console.log(value)
    handleDataP[`p${index}`]  = value
    SetData({...data,paredes:handleDataP})
  }

  const siguiente = () => {
    sessionStorage.setItem("data",JSON.stringify(data))
    const url =  `/sauna/size/himalayanSalt`
    window.location.href=url;
  }

  return (
    <div className='column'>

     <h1>SELECCIONA LOS FRENTES LIBRES</h1>

     <div className='room-container'>
        {activeWall.map((item,index)=>(
          <div key={index} className={`center p${index} ${activeWall[index]?'p-active':''}`}
            onClick={()=>active(index)}
          >P{index}</div>))}
          {
            medidas?medidas.map((item, index)=>(
              <div key={index} className={`p${index}-size center`}>{item} M {index==4?'de Altura':null}</div>
            )):null
          }
      </div>

      <div>
        <p>BASE: {medidas?`${(medidas[0]*medidas[1]).toFixed(3)} M2`:null}</p>
        <p>VOLUMEN: {medidas?`${(medidas[0]*medidas[1]*medidas[4]).toFixed(3)} M3`:null}</p>
      </div>
      
      <div className='p-container'>
        {activeWall.map((item,index)=>(item?<div key={index} className='input-container'>
            <strong>PARED {index} </strong>
            <select defaultValue={0} onChange={(e) => { kindOfWall(index,e.target.value) }}>
              <option value={0} disabled>Selecciona una opción</option>
              <option value={options[0]}>{options[0]}</option>
              <option value={options[1]}>{options[1]}</option>
              <option value={options[2]}>{options[2]}</option>
            </select>
        </div>:null))}
      </div>
          <button
            onClick={siguiente}
          >SIGUIENTE</button>
    </div>
  );
};

export default Size;