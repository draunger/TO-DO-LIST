let button = document.getElementById("button");
let input1 = document.getElementById("input1");
  function show(){
    if(input1.value==="")
    {
    input1.value="task not entered";
    setTimeout(()=>input1.value="",500);
    }
  else 
  {
    var newh = document.createElement("span");
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
    checkbox.addEventListener('change',()=>{
    //  item.setAttribute('id','del');
     items.removeChild(item);

    })
    // console.log(checkbox);
  }
}


