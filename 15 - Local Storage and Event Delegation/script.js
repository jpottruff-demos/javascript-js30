const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e) {
    // avoid refresh on submit
    e.preventDefault();

    // `this` is the form in this case
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    setLocalStorageItems();
    this.reset();
}

/** Set a default empty array to avoid errors with mapping */
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) {
        return;
    }

    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    setLocalStorageItems();
}

function setLocalStorageItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);