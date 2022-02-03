const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

console.log(checkboxes);

function handleCheck(e) {
    console.log(e);
}



checkboxes.forEach(cb => cb.addEventListener('click', handleCheck))