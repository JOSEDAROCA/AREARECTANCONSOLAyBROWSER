import "./styles.css";

let btnEnviar = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");

btnEnviar.addEventListener("click", () => {
  let base: number = Number(dato.value);
  let altura: number = Number(dato2.value);

  let resultado: any = (base * altura);

  console.log(resultado)

  document.getElementById("resultado").innerHTML = `<p> El Area es <p/>${resultado}`;

  console.log("El area del rectangulo es: ", resultado);
});
