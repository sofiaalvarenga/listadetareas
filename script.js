//DECLARACION DE VARIABLES
let entradaBtn = document.getElementById("entrada");
let input = document.getElementById("input"); //Obtiene las tareas tipeadas (campo de entrada)
let ul = document.getElementById("lista");
//Obtiene una lista de los "li"s y permitira eliminarlos mediante RemoveChild
let item = document.getElementsByTagName("li"); //Recopila los elementos bajo el tag "li"

//RETORNA el valor tipeado (tareas) y la lista de elementos li. 
function inputLength(){
	return input.value.length;
} 
function listLength(){
	return item.length;
}

//FUNCION PARA CREAR LA LISTA DE TAREAS
function crearLista() {
    let li = document.createElement("li");//crea el elemento "li"
	li.appendChild(document.createTextNode(input.value)); //Convierte las tareas tipeadas en elementos li
	ul.appendChild(li); //Agrega a los "li" a la "ul"
	input.value = ""; //Restablece la entrada (input)


    //FUNCION PARA ELIMINACION DE TAREAS MEDIANTE UN CLICK.
	li.onclick = removerTarea;
    function removerTarea(e){
        e.target.parentElement.removeChild(e.target); 
     //remueve los elementos li seleccionados (e.target) mediante el click, osea las tareas.
    }
}

//INGRESO DE VALORES (TAREAS) MEDIANTE CLICK Y TECLA ENTER.
function agregarTareasClick(){
	if (inputLength() > 0) { 
		crearLista();
	} // Ingresa las tareas tipeadas y addEventLIstenerClick le dará entrada.
}

function agregarTareasEnter(event) {
	if (inputLength() > 0 && event.which ===13) { 
		crearLista();
	} //Ingresa las tareas tipeadas + teclaEnter (13) y addEventListenerKeypress dará entrada.
}

//Se llaman a las funciones para el campo de entrada, por medio del click y la tecla enter.
entradaBtn.addEventListener("click", agregarTareasClick);
input.addEventListener("keypress", agregarTareasEnter);

