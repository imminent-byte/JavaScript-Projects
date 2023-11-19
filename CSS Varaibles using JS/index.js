// THIS IS HOW WE CHANGE CSS VARIABLES USING JAVASCRIPT

const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
    const suffix = this.dataset.sizing || ''; // OR nothing because else we will get undefined 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));