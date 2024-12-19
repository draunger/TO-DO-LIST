let button = document.getElementById("button1");
let input1 = document.getElementById("input1");

// Function to add a task
function show() {
    if (input1.value === "") {
        input1.value = "task not entered";
        setTimeout(() => input1.value = "", 500);
    } else {
        var newh = document.createElement("span");
        var checkbox = document.createElement("input");
        var crossButton = document.createElement("button");
        
        checkbox.type = "checkbox";
        crossButton.innerHTML = "✖";
        newh.innerHTML = input1.value;

        const items = document.querySelector('.item_list');
        const item = document.createElement('div');

        item.setAttribute('class', 'item');
        item.appendChild(checkbox);
        item.appendChild(newh);
        item.appendChild(crossButton);
        items.appendChild(item);
        input1.value = "";

        checkbox.addEventListener('change', () => {
            items.removeChild(item);
        });

        crossButton.addEventListener('click', () => {
            newh.style.textDecoration = "line-through";
        });
    }
}

// Add event listener to the button
button.addEventListener('click', show);

// Add event listener to the input field for the Enter key
input1.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        show();
    }
});
