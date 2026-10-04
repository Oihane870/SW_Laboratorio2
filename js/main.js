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
    const selector = document.getElementById("combobox");

    const nuevo = document.createElement("option")
    nuevo.className = "_self";
    nuevo.value = "pizzaMala";
    nuevo.textContent = "Pineapple Pizza";
    selector.appendChild(nuevo);


    selector.addEventListener("change", function(event) {
        const recetaEscogida = selector.options[selector.selectedIndex].text; 

    // equivalente: const selectedColor = event.target.selectedOptions[0].text; 

    // o let valor = selector.options[selector.selectedIndex].text;	 

     console.log(`Receta escogida: ${recetaEscogida}`);
    
   

    if(selector.value == "pizzaMala"){
        alert(" “Pizza con piña… Non sei il benvenuto in italia");
    }
   }); 

   //ejercicio 4
   const login = document.querySelector('input[value="Login"]')
   const formulario = login.form;

   formulario.onsubmit = (event) =>{
    event.preventDefault();
    
    alert("boton pulsado");
    let usuario = document.getElementById("user").value;
    let contra = document.getElementById("pass").value;

    const esCorrecto = usuario.includes("@ehu.eus") && contra.length >= 4;
    if (esCorrecto) {
    alert(`Bienvenido ${usuario}`); // o console.log
  } else {
    alert("Error de login: el usuario debe incluir @ehu.eus y la contraseña debe tener al menos 4 caracteres.");
  }
   }
}
