// antes de las variablesd cambiar los elemntos unicos 
const cajaUnica=document.getElementById("caja-unica");
const titulo=document.querySelector("#titulo2");


cajaUnica.innerText="Cambio en el texto numero #1 con inner.Text";
cajaUnica.innerHTML="Cambio en el texto #2 con innerHtml";
cajaUnica.textContent="Cambio en el texto #2 con textContent";
titulo.innerText="Manipulación de estilos css y clases";

//cambiar contenidos a elemntos multiples 
const cajas=document.querySelectorAll(".caja-contenidos");

cajas.forEach((caja, index) => {
    caja.textContent="Caja multiple numero" + index;
    caja.style.color="red";
    caja.style.fontSize="20px";
    caja.style.textAlign="right";
}

);