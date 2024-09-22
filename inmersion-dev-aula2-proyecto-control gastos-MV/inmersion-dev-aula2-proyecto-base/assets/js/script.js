let listasNombresGastos = [];
let listasValoresGastos = [];
let listasDescripcion = [];
let listasGastoActual = -1;


//Esta funcion se invoca al momento de que eol usuario hace click en el
//boton
function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcion = document.getElementById('descripcionGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    if(Number(valorGasto)>150){
		alert('El gasto ingresado es mayor a $150');

    }

    if (listasGastoActual == -1){

    listasNombresGastos.push(nombreGasto);
    listasValoresGastos.push(valorGasto);
    listasDescripcion.push(descripcion);

    }
    
    else{
        listasNombresGastos[gastoActual] = nombreGasto;
        listasValoresGastos[gastoActual] = valorGasto;
        listasDescripcion[gastoActual] = descripcion;
        gastoActual = -1; 
        document.getElementById('botonActualizar').style.display = 'none';
        document.getElementById('botonFormulario').style.display = 'block';
    }

      //alert('Click de Usuario');
    actualizarListaGastos();
}

function actualizarListaGastos () {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    const descripcionElementos=document.getElementById('descripcionGasto');

    let htmLista = '';
    let totalGastos = 0;

    listasNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number (listasValoresGastos[posicion]);
        const descripcionElementos = (listasDescripcion[posicion]);
        htmLista+= `<li>${elemento} - Descripcion ${descripcionElementos} - USD ${valorGasto.toFixed(2)}
                    <div>
                        <button onclick="editarGasto (${posicion});">Editar</button>
                        <button onclick="eliminarGasto (${posicion});">Eliminar</button>

                    </div>
        </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
    })
    
    listaElementos.innerHTML= htmLista;
    totalElementos.innerHTML= totalGastos.toFixed(2);
    
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion){

    listasNombresGastos.splice(posicion, 1);
    listasValoresGastos.splice(posicion, 1);
    listasDescripcion.splice(posicion, 1);

    actualizarListaGastos();

}

function editarGasto(posicion){
	document.getElementById('nombreGasto').value=listaNombreGastos[posicion];
	document.getElementById('descripcionGasto').value=listasDescripcion[posicion];
	document.getElementById('valorGasto').value=listaValorGastos[posicion];
	gastoActual=posicion;
	document.getElementById('botonActualizar').style.display = 'block';
    document.getElementById('botonFormulario').style.display = 'none';
	
}