window.onload = gestionarEventos;

function gestionarEventos(){
    //ejercicio 1
    const imagen = document.getElementById("image");
    const botonMenu = document.getElementsByClassName("navbutton");
    imagen.onclick = () => {console.log("Se ha clicado la imagen")}
    
    for(let boton of botonMenu){
        boton.onclick = () => {alert(`Redirigiendo a ${boton.textContent}`)}
    }

    //ejercicio 2
    const username = document.getElementById("user");

    username.onfocus = () => {
        username.value = "";
    };

    username.onblur = () => {
        if (username.value === "") {
            username.value = "tu@email";
        }
    };

    // ejercicio3
   let selector = document.getElementById("color"); 

selector.onchange = function(event) { 

    const selectedColor = event.target.options[selector.selectedIndex].text; 

    // equivalente: const selectedColor = event.target.selectedOptions[0].text; 

    // o let valor = selector.options[selector.selectedIndex].text;	 

    const inputUser = document.getElementById("user"); 

    inputUser.value = selectedColor; 
    //no acabado
    



};

