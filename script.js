let button = document.getElementById("button");
let input1 = document.getElementById("input1");
  function show(){
    var newh = document.createElement("h3");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    newh.innerHTML = input1.value;

    // newh.className = "statment";

    // document.getElementById("statments").appendChild(newh);
    const items=document.querySelector('.item_list')
    const item=document.createElement('div')
    
    item.setAttribute('class','item')
    item.appendChild(checkbox)
    item.appendChild(newh)
    items.appendChild(item)

    input1.value="";
}

