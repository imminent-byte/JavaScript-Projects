const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    // This will prevent the page from reloading after submition
    e.preventDefault();
    const text = (this.querySelector('[name=item').value);
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset(); // Form element has a reset method
}


function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        // linking input and label using id and for attributes
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ""}>
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList); 
}

addItems.addEventListener('submit', addItem);
// we check for the event on the parent of list item, ie on the unordered list tag, this is event delegation
itemsList.addEventListener('click', toggleDone);
// calling on page load
populateList(items, itemsList);

const slctBtn = document.querySelector('#slct-all');
const remvBtn = document.querySelector('#remv-all');

function selectAll() {
    items.map(item => {
        item.done = true;
    })
    
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList)
}

function removeAll() {
    items.map(item => {
        item.done = false;
    })

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}


slctBtn.addEventListener("click", selectAll);
remvBtn.addEventListener("click", removeAll);
