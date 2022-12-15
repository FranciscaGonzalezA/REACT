import React from "react";
//import { DropDownButtonComponent } from "./Button";

const UserTableComponent = ({ usuarios, deleteUser, setUsuarioEditado }) => {
  return (
    <div class="container">
      <h3>Dato Usuarios</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Iteramos usuarios con .map, a cada elemento de usuarios
             lo llamaremos usuario y realizaremos lo siguiente => */}
          {usuarios.map((usuario) => (
            <tr>
              <th scope="row">{usuario.id}</th>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.correo}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {deleteUser(usuario.id)}}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario)
                  }}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CarTableComponent = ({autos, deleteCar}) => {
  return (
    <div class="container">
      <h3>Dato Autos</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Color</th>
            <th scope="col">Año</th>
            <th scope="col">Valor</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto)=>(
            <tr>
              <th scope="row">{auto.id}</th>
              <td>{auto.marca}</td>
              <td>{auto.modelo}</td>
              <td>{auto.color}</td>
              <td>{auto.año}</td>
              <td>{auto.valor}</td>
              <td>
                <button type="button" class="btn btn-danger" onClick={()=>deleteCar(auto.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { UserTableComponent, CarTableComponent };
