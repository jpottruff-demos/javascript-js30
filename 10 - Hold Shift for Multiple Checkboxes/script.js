const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(cb => {
            if (cb === this || cb === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                cb.checked = true;
            }
        });
    }

    lastChecked = this;
}



checkboxes.forEach(cb => cb.addEventListener('click', handleCheck))