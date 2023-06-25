
    let container = document.getElementById("container-ingredient");
    let divCount = 0;

    function createInputDiv() {
    let inputDiv = document.createElement("div");
    inputDiv.className = "input-div";

    let labelDiv = document.createElement("div");
    labelDiv.className = "label-div";

    let label = document.createElement("label");
    label.textContent = "Ingrediente " + (divCount + 1);
    labelDiv.appendChild(label);

    let input = document.createElement("input");
    input.className = "input-field";
    input.type = "text";
    input.placeholder = "Ingrese ingrediente";

    let buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div";

    let addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.innerText = "+";
    addButton.addEventListener("click", createInputDiv);

    let removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.innerText = "-";
    removeButton.addEventListener("click", function() {
    if (divCount > 1) {
    container.removeChild(inputDiv);
    divCount--;
    updateLabels();
    updateButtons();
}
});

    inputDiv.appendChild(labelDiv);
    inputDiv.appendChild(input);
    inputDiv.appendChild(buttonDiv);
    container.appendChild(inputDiv);

    buttonDiv.appendChild(addButton);
    buttonDiv.appendChild(removeButton);
    divCount++;

    updateButtons();
}

    createInputDiv();

    function updateLabels() {
    let labels = document.querySelectorAll(".input-div label");
    labels.forEach(function(label, index) {
    label.textContent = "Ingredient " + (index + 1);
});
}

    function updateButtons() {
    let addButtons = document.querySelectorAll(".add-button");
    addButtons.forEach(function(addButton, index) {
    if (index === divCount - 1) {
    addButton.style.visibility = "visible";
} else {
    addButton.style.visibility = "hidden";
}
});
}
