import React from "react";

//componente dinámico (infoBoton), para hacer click (handle)
const SubmitButtonComponent = ({infoBoton, handleOnClick}) => {
  return (
    <div class="botones">
      <div class="botonGuardar">
        <button 
        class="btn btn-success" 
        type="submit" 
        onClick={()=>{
          handleOnClick();   //aqui se le va a mandar una funcion
        }}>
          {infoBoton}
        </button>
      </div>
    </div>
  )
}

const DropDownButtonComponent = () => {
  return (
    <div class="dropdown" >
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Que Hago
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="/">Editar</a></li>
        <li><a class="dropdown-item" href="/">Eliminar</a></li>
        <li><a class="dropdown-item" href="/">Something else here</a></li>
      </ul>
    </div >
  )
}

export { SubmitButtonComponent, DropDownButtonComponent };