"use client"

import React from 'react'

const Parameters = () => {
  const parameter =[["tipoMadera","Tipo de madera",["Poplar", "Cumaru", "Cedro", "Caoba", "Tornillo"]],
                    ["piso","Piso",["Entarimado", "Enduelado"]],
                    ["paquete","Paquete",["Basico", "Especial"]],
                    ["iluminacion","Iluminación",["Calida","Fria"]]]
  const accesorios = [["cubetaDucha","Cubeta ducha"],
                      ["cubetaCucharon","Cubeta-cucharon"],
                      ["cabecera","Cabecera"], 
                      ["escencia","Escencia"]]
  const [ data, setData ] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      const dataStorage = JSON.parse(sessionStorage.getItem("data"));
      setData({...dataStorage, tipoMadera:"",paquete:"",iluminacion:"",
        accesorios:{
          cubetaDucha:false,
          cubetaCucharon:false,
          cabecera:false,
          escencia:false
        }})
      console.log(dataStorage)
    }
    getData();
  },[])

  const select = (item,value) => {
    let handleData = data
    handleData[item]=value
    setData(handleData)
  }  
  const siguiente = () => {
    sessionStorage.setItem("data",JSON.stringify(data))
    const url =  `/sauna/size/himalayanSalt/parameters/finalData`
    window.location.href=url;
  }

  const checkBoxFunction = (item) => {
    let handleData = data
    handleData.accesorios[item]=!handleData.accesorios[item]
    setData(handleData)
  }



  return (
    <div>
      <form>
        <div className='column'>
            {parameter.map((item, index)=>(
            <div key={item[1]}>
              <strong>{item[1]}</strong>
              <select defaultValue={0} key={item[1]} onChange={(e)=>select(item[0],e.target.value)}>
                <option value={0} disabled>Selecciona una opción</option>
                {item[2].map((item)=><option key={item} 
                      value={item} 
                      >{item}</option>)}
              </select>
            </div>
              ))}
              <h2>Accesorios</h2>
              {
                accesorios.map((item,index)=> (
                  <div key={item[1]}>
                    <strong>{item[1]}</strong><input key={index} type="checkbox"
                    onChange={()=>checkBoxFunction(item[0])}
                    ></input>
                  </div>
                ))
              }
        </div>
        
      </form>
      <button onClick={siguiente}>Siguiente </button>
    </div>
  )
}

export default Parameters