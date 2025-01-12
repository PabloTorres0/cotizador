'use client'
import React from 'react'

const HimalayanSalt = () => {
    const [activeWall, setActiveWall]= React.useState([false, false, false, false])
    const [medidas, setMedidas] = React.useState(null);
    let handleHimalayan= {p0:0,p1:0,p2:0,p3:0,}
    const[activeLines, setActiveLines] = React.useState([true, true, true, true])
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        const getSize = async () => {
          const dataStorage = JSON.parse(sessionStorage.getItem("data"));
          setData(dataStorage)
          setMedidas([dataStorage.size.largo,dataStorage.size.ancho,dataStorage.size.largo,dataStorage.size.ancho,dataStorage.size.alto])
        }
        getSize();
      },[])
    
    
    const active = (item) => {
        let activeHandle = [...activeWall];
        activeHandle[item]= !activeHandle[item];
        setActiveWall(activeHandle);
    }

    const checkBoxFunction = (index) => {
      let activeLinesFlag=activeLines
      activeLinesFlag[index]= !activeLines[index]
      setActiveLines([...activeLinesFlag])
      handleHimalayan[`p${index}`]=!activeLinesFlag[index]?100:0
      setData({...data,paredHimalaya:handleHimalayan})
    }
    const inputFunction = (e,index) => {
      handleHimalayan[`p${index}`]=e.target.value
      setData({...data,paredHimalaya:handleHimalayan})
    }
    const submit = () => {
      event.preventDefault()
      sessionStorage.setItem("data",JSON.stringify(data))
      const url =  `/sauna/size/himalayanSalt/parameters`
      window.location.href=url;
    }

  return (
    <div className='column'>
        <h1>SELECCIONA LAS PAREDES CON SAL DEL HIMALAYA</h1>

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
        <form onSubmit={submit}>
          <div className='p-container'>
          {activeWall.map((item,index)=>(item?<div key={index} className='input-container'>
              <strong>P {index} {"=>"} </strong>
              {activeLines[index]?<><input 
              className='salt-input' 
              type='number' min='1' max='7'
              required
              onChange={(e)=>{inputFunction(e,index)}}
              ></input> <strong>LINEAS </strong></>:null}
              <input type="checkbox"
              onChange={()=>{checkBoxFunction(index)}}
              ></input><strong>PARED COMPLETA </strong> 
          </div>:null))}
          </div>
          <button type='submit'>Siguiente</button>
        </form>


    </div>
  )
} 

export default HimalayanSalt