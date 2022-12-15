/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserFormComponent,
  UserTableComponent,
  SubmitButtonComponent,
} from "../components";

const usuario1 = [
  {
    id: 1,
    nombre: "Joseph",
    apellido: "Joestar",
    correo: "jo.jo@gmail.com",
  },
  {
    id: 2,
    nombre: "Josuke",
    apellido: "Higashikata",
    correo: "jojo@gmail.com",
  },
  {
    id: 3,
    nombre: "Jotaro",
    apellido: "Joestar",
    correo: "jo.j.o@gmail.com",
  },
];
/* const usuario2={
  id:2,
  nombre:'Josuke',
  apellido:'Higashikata',
  correo:'jojo@gmail.com'
}
 */
const UserPage = () => {
  const navigate = useNavigate();
  const handleOnClickCar = useCallback(() => navigate("/Auto", {}, [navigate]));
  const handleOnClickHome = useCallback(() => navigate("/", {}, [navigate]));
  //en este momento state vale lo mismo que usuario 1
  //genera una funcion seteadora que permite cambiar los datos de usuario1 sin afectarlo directamente (setState)
  const [state, setState] = useState(usuario1); //seteamos state como usuario1 (base)

  const [usuarioEditado, setUsuarioEditado] = useState(null);

  //esta funcion muestra como quedará la base despues de eliminar
  const userDelete = (idUsuario) => {
    //change user filtra usuarios,y mustra los que quedan despues de eliminar
    const changeUser = state.filter((usuario) => usuario.id !== idUsuario);
    //al momento de ocupar la funcion setState, le voy a cambiar el valor TEMPORAL a mis usuarios
    setState(changeUser); //setState = valor temporal
  };

  //esta funcion agrega un nuevo usuario, mantien lo que ya hay y agrega uno nuevo
  //solo funcion con los states
  const userAdd = (usuario) => {
    const addUser = [
      //mantenme los datos que tengo en user(nuestro state) y agregame lo que yo te entrego aqui (usuario)
      ...state,
      usuario,
    ];
    //luego actualizamos (o seteamos) el state (con setState)
    setState(addUser);
  };

  const userEdit = (usuarioEditado) => {
    const editUser = state.map((usuario) =>
      usuario.id === usuarioEditado.id ? usuarioEditado : usuario
    );
    setState(editUser);
  };

  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <UserTableComponent
            usuarios={state}
            deleteUser={userDelete}
            setUsuarioEditado={setUsuarioEditado}
          />
        </div>
      </div>
      <SubmitButtonComponent
        infoBoton={"Ir a Home"}
        handleOnClick={handleOnClickHome}
      />
      <br />
      <SubmitButtonComponent
        infoBoton={"Ir a Auto"}
        handleOnClick={handleOnClickCar}
      />
      <br />
      <div class="row">
        <div class="col">
          <UserFormComponent
            userAdd={userAdd}
            usuarioEditado={usuarioEditado}
            setUsuarioEditado={setUsuarioEditado}
            userEdit={userEdit}
          />
        </div>
      </div>
    </div>
  );
};
/* npx create-react-app nombre */
export default UserPage;
