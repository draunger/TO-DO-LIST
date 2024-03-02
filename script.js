let button = document.getElementById("button");
let input1 = document.getElementById("input1");
  function show(){
    var newh = document.createElement("h3");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    newh.innerHTML = input1.value;

    newh.className = "statment";
   
    document.getElementById("statments").appendChild(newh);
    input1.value="";
}

