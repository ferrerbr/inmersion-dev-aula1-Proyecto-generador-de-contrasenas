const d =document;
const $cantidad = d.getElementById("cantidad");
const $generar = d.getElementById("generar");
const $contrasenia = d.getElementById("contrasena");
const $limpiar = d.getElementById("limpiar");
const $minusculas = d.getElementById("minusculas");
const $mayusculas = d.getElementById("mayusculas");
const $numeros = d.getElementById("numeros");
const $caracteres = d.getElementById("caracteres");
const $nivel =d.getElementById("nivel");
const $fortaleza =d.getElementById("textoFortaleza");
const $debil = d.getElementById("debil");
const $medioDebil = d.getElementById("medioDebil");
const $medio = d.getElementById("medio");
const $medioFuerte = d.getElementById("medioFuerte");
const $fuerte = d.getElementById("fuerte")


const cadenaMinusculas = "abcdefghijklmnopqrstuvwxyz";
const cadenaMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const cadenaNumeros = "123456789";
const cadenaCaracteres = "#$%&_()^*";
let arrayCadenas = [];


/**Función que determina si el checkbox de las minusculas esta activo */
$minusculas.addEventListener('change', function() {
    if (this.checked) {
        arrayCadenas.push(cadenaMinusculas)
        
    } else {
        let indice = arrayCadenas.indexOf(cadenaMinusculas);
        arrayCadenas.splice(indice,1)
    }
});

/**Funcion que determina si el checkbox de las mayusculas esta activo */
$mayusculas.addEventListener('change', function() {
    if (this.checked) {
        arrayCadenas.push(cadenaMayusculas)
    } else {
        let indice = arrayCadenas.indexOf(cadenaMayusculas);
        arrayCadenas.splice(indice,1)
    }
});

/**Funcion que determina si el checkbox de los numero esta activo */
$numeros.addEventListener('change', function() {
    if (this.checked) {
        arrayCadenas.push(cadenaNumeros)
    } else {
        let indice = arrayCadenas.indexOf(cadenaNumeros);
        arrayCadenas.splice(indice,1)
    }
});

/**Funcion qeu determina si el checkbox de  los caracteres esta activo */
$caracteres.addEventListener('change', function() {
    if (this.checked) {
        arrayCadenas.push(cadenaCaracteres)
    } else {
        let indice = arrayCadenas.indexOf(cadenaCaracteres);
        arrayCadenas.splice(indice,1)
    }
});






/**  funcion para generar contraseña  */

$generar.addEventListener("click",()=>{
    let numeroR = parseInt($cantidad.value);
    if (numeroR < 8 || $cantidad.value === ""){
        alert("el numero de caracteres debe ser mayor que 8 ")
    

    }else{
        if($minusculas.checked || $mayusculas.checked || $numeros.checked || $caracteres.checked){


            let contrasenia = "";

            arrayCadenas.forEach(element => {
                
                let caracter=element[Math.floor(Math.random()*element.length)];
                contrasenia += caracter

                
            });


            for (i = 0 ; i < (numeroR-arrayCadenas.length) ; i++){
                let cadenaA = arrayCadenas[Math.floor(Math.random()*arrayCadenas.length)];
                let caracter = cadenaA[Math.floor(Math.random()*cadenaA.length)]
                contrasenia += caracter
            }
            $contrasenia.value = contrasenia

            if ((arrayCadenas.length === 1 && numeroR < 11)){
                $fortaleza.textContent = "contraseña debil"
                console.log("debil");
                $debil.style.backgroundColor="red";
                $medioDebil.style.backgroundColor="gray";
                $medio.style.backgroundColor="gray";
                $medioFuerte.style.backgroundColor="gray";
                $fuerte.style.backgroundColor="gray";

                
            }else if ( arrayCadenas.length === 2 && numeroR < 11 ||(arrayCadenas.length === 1 && numeroR > 10)){
                $fortaleza.textContent = "Contraseña media debil"
                $debil.style.backgroundColor="orange";
                $medioDebil.style.backgroundColor="orange";
                $medio.style.backgroundColor="gray";
                $medioFuerte.style.backgroundColor="gray";
                $fuerte.style.backgroundColor="gray";

                console.log("medio debil");

            }else if ( arrayCadenas.length === 3 && numeroR < 11 ||(arrayCadenas.length === 2 && numeroR > 10)){
                $fortaleza.textContent = "Contraseña media "
                console.log("medio ");
                $debil.style.backgroundColor="yellow";
                $medioDebil.style.backgroundColor="yellow";
                $medio.style.backgroundColor="yellow";
                $medioFuerte.style.backgroundColor="gray";
                $fuerte.style.backgroundColor="gray";
               
                
            }else if(arrayCadenas.length === 4 && numeroR < 11 ||(arrayCadenas.length === 3 && numeroR > 10) ){
                $fortaleza.textContent = "Contraseña media fuerte"
                console.log("medio Fuerte");
                $debil.style.backgroundColor="lightgreen";
                $medioDebil.style.backgroundColor="lightgreen";
                $medio.style.backgroundColor="lightgreen";
                $medioFuerte.style.backgroundColor="lightgreen";
                $fuerte.style.backgroundColor="gray";
                
            } else if (arrayCadenas.length === 4 && numeroR > 10 ){
                $fortaleza.textContent = "Contraseña fuerte"
                console.log("Fuerte");
                $debil.style.backgroundColor="green";
                $medioDebil.style.backgroundColor="green";
                $medio.style.backgroundColor="green";
                $medioFuerte.style.backgroundColor="green";
                $fuerte.style.backgroundColor="green";
            } else{
                console.log("No esta entrando en ningun caso ");
                
            }


            

    
        }else{
           alert("Debes seleccionar almenos un elemento de los requerimientos");
           
            
        }
    }
})

/** Funcion para limpiar todos los campos */
$limpiar.addEventListener("click",()=>{
    location.reload()
    
    
})


  
 








