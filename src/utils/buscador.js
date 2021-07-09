localStorage.setItem("seguro", "no");

document.addEventListener("buttonIndex").onclick = function() {

    let texto = document.addEventListener("inputIndex").value;
    localStorage.setItem("puente", texto);
    console.log(texto);
    localStorage.setItem("seguro", "si");
    document.addEventListener("inputIndex").value = "";

}
const s = localStorage.getItem("seguro");

if (s == "si") {

    let casa = localStorage.getItem("puente");
    console.log(casa);
    document.getElementById('print-resultado').innerText = localStorage.getItem("puente");
}