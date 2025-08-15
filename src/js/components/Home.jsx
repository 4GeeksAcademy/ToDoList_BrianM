import React from "react";
import ToDoList from "./ToDoList"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="display-2 text-danger">Lista de Tareas</h1>
			<ToDoList/>
		</div>
	);
};	


export default Home;