// THIS IS HOW WE CHANGE CSS VARIABLES USING JAVASCRIPT

const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
    // As we are changing just the value there will be no suffix like px vh etc so we do this, we have data attributes in html.
    const suffix = this.dataset.sizing || ''; // OR nothing as hex code have nothing because else we will get undefined 
    // Here documentElement gives us the root element and we make change in the CSS root
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));