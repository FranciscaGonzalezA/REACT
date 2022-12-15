import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, CarPage, UserPage } from "./pages";
//import yay from "./img/yay.png"

const App = () => {
	return (
		<BrowserRouter>
			{/* Vamos a tener distintas rutas */}
			<Routes>
				{/* Especificamos cada ruta */}
				<Route path="/" element={<HomePage />} />
				<Route path="/Auto" element={<CarPage />} />
				<Route path="/Usuario" element={<UserPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

/* <div class="container" align="center">
			<div>
				<h1>Página de prueba</h1>
				<img src={yay} alt="yay" />
			</div>
		</div> */