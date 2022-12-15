/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CarFormComponent,
  CarTableComponent,
  SubmitButtonComponent,
} from "../components";

const autos = [
  {
    id: 1,
    marca: "bmw",
    modelo: "m8i",
    color: "azul",
    año: "2020",
    valor: 120000000,
  },
  {
    id: 2,
    marca: "volkswagen",
    modelo: "gol gti",
    color: "plateado",
    año: "2010",
    valor: 6000000,
  },
  {
    id: 3,
    marca: "subaru",
    modelo: "wrx",
    color: "rojo metálico",
    año: "2017",
    valor: 11000000,
  },
];

const CarPage = () => {
  const navigate = useNavigate();
  const handleOnClickUser = useCallback(() =>
    navigate("/Usuario", {}, [navigate])
  );
  const handleOnClickHome = useCallback(() => navigate("/", {}, [navigate])); //aqui creamos la funcion
  const [state, setState] = useState(autos);

  const carDelete = (idAuto) => {
    const changeCar = state.filter((auto) => auto.id!==idAuto);
    setState(changeCar);
  }

  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <CarTableComponent autos={state} deleteCar={carDelete} />
        </div>
      </div>
      <SubmitButtonComponent
        infoBoton={"Ir a Home"}
        handleOnClick={handleOnClickHome}
      />
      <br />
      <SubmitButtonComponent
        infoBoton={"Ir a Usuario"}
        handleOnClick={handleOnClickUser} //aqui usamos la funcion
      />
      <br/>
      <div class="row">
        <div class="col">
          <CarFormComponent />
        </div>
      </div>
    </div>
  );
};
/* npx create-react-app nombre */
export default CarPage;
