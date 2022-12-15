import React, { useState, useEffect } from "react";
import { SubmitButtonComponent } from "./Button";

const initialUser = {
  nombre: "",
  apellido: "",
  correo: "",
  id: "",
};

const UserFormComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
  //userAdd es un prop
  const [user, setUser] = useState(initialUser); //user, setUser == state, setState
  const { nombre, apellido, correo, id } = user;

  //el hook useEffect siempre esta pendiente de si la variable que tiene dentro de
  //sus corchetes cambia el deberá hacer todo lo que tiene su funcion dentro
  //CONSIDERACIÓN es que useEffect corre al menos una vez cuando la pagina carga por primera vez
  useEffect(() => {
    if (usuarioEditado !== null) {
      setUser(usuarioEditado);
    } else {
      setUser({
        nombre: "",
        apellido: "",
        correo: "",
        id: "",
      });
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    // e de event (hecho así por documentación)
    //llamamos a esta funcion cada vez que nosotros escribimos algo
    //en el input de nuestra página
    const changedFormValue = {
      //va a tenere los datos que tiene usuario de los input que no he tocado
      //pero va a actualizar el atributo que cambié por su nuevo valor
      ...user,
      [e.target.name]: e.target.value,
    };
    console.log(e);
    setUser(changedFormValue);
  };

  return (
    <div class="card container mb-2">
      {/* Hacemos que el formulario sea dinámico según queramos editar o ingresar */}
      {/* <h3>Formulario Usuario</h3> */}
      {usuarioEditado !== null ? (
        <h3>Editar Usuario</h3>
      ) : (
        <h3>Ingresar Usuario</h3>
      )}
      {/* {pregunta ? true : false} */}
      <form>
        <div class="mb-3">
          <label for="inputName" class="form-label">
            Id
          </label>
          <input
            type="inputId"
            class="form-control"
            id="inputId"
            placeholder="0"
            name="id"
            //para que mi formulario sea capaz de crear un usuario debemos agregarle los input
            //lo siguiente
            value={id}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="inputName" class="form-label">
            Nombre
          </label>
          <input
            type="inputName"
            class="form-control"
            id="inputName"
            placeholder="Juan"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="inputLastName" class="form-label">
            Apellido
          </label>
          <input
            type="inputLastName"
            class="form-control"
            id="inputLastName"
            placeholder="Perez"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="InputEmail1" class="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            class="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
            placeholder="ejemplo@ej.com"
            name="correo"
            value={correo}
            onChange={handleInputChange}
          />
          <div id="emailHelp" class="form-text">
            Nunca compartiremos tu correo.
          </div>
        </div>
        {/* <div class="mb-3">
          <label for="InputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="InputPassword1"
            placeholder="********"
          />
        </div> */}
        {/* <SubmitButtonComponent infoBoton={"Agregar Usuario"} /> */}
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-warning"
            onClick={() => userEdit(user)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(user)}
          >
            Ingresar usuario
          </button>
        )}
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}
      </form>
      <br />
    </div>
  );
};

const CarFormComponent = () => {
  return (
    <div class="card container mb-2">
      <h3>Formulario Auto</h3>
      <form>
        <div class="mb-3">
          <label for="inputBrand" class="form-label">
            Marca
          </label>
          <input
            type="inputBrand"
            class="form-control"
            id="inputBrand"
            placeholder="Nissan"
          />
        </div>
        <div class="mb-3">
          <label for="inputModel" class="form-label">
            Modelo
          </label>
          <input
            type="inputModel"
            class="form-control"
            id="inputModel"
            placeholder="Kicks"
          />
        </div>
        <div class="mb-3">
          <label for="inputColor" class="form-label">
            Color
          </label>
          <input
            type="inputColor"
            class="form-control"
            id="inputColor"
            placeholder="Azul"
          />
        </div>
        <div class="mb-3">
          <label for="inputYear" class="form-label">
            Año
          </label>
          <input
            type="inputYear"
            class="form-control"
            id="inputYear"
            placeholder="2020"
          />
        </div>
        <div class="mb-3">
          <label for="inputValue" class="form-label">
            Valor
          </label>
          <input
            type="inputValue"
            class="form-control"
            id="inputValue"
            placeholder="12000000"
          />
        </div>
        <SubmitButtonComponent infoBoton={"Agregar Auto"} />
        <br />
      </form>
    </div>
  );
};

export { UserFormComponent, CarFormComponent };
