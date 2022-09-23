function clicar() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;
    var num3 = document.querySelector(".num3").value;
    var num4 = document.querySelector(".num4").value;
    
    var resultado = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4)) /4;
    document.querySelector(".resultado").innerHTML = resultado;
  }
  