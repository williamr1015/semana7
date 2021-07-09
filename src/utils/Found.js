//let s= localStorage.getItem("seguro");
const Found = () => {

    if(localStorage.getItem("seguro") === "si"){
        let casa = localStorage.getItem("puente");
        console.log(casa);
        document.getElementById('print-resultado').innerText = localStorage.getItem("puente");
    };
  };
  
  export default Found;