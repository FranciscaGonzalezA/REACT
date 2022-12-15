/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButtonComponent } from "../components";

const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]))
  const handleOnClick2 = useCallback(() => navigate("/Usuario", {}, [navigate]))
  return (
    <div class="container">
      <h1>Hola mundo</h1>
      <SubmitButtonComponent infoBoton={"Ir a Auto"} handleOnClick={handleOnClick} />
      <br/>
      <SubmitButtonComponent infoBoton={"Ir a Usuario"} handleOnClick={handleOnClick2} />
    </div>
  )
}
/* npx create-react-app nombre */
export default HomePage;