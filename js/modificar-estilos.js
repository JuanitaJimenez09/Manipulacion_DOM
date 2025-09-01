//manipulacion de estilos de un elemento unico 

const caja1=document.getElementById("estilo-unico");
caja1.style.backgroundColor="#dca7e9ff";
caja1.style.color="#222122";
caja1.style.textAlign="center";

//cambiar estilos a elemtentos multiples teniendo en cuenta el contenedor padre 
const cajaEstilos=document.querySelectorAll("#estilos .caja");

cajaEstilos.forEach((cajaEstilos, index) => {
cajaEstilos.style.border="2px solid blue";

}

);

//manipulacion de clase
 caja1.classList.add("active");


