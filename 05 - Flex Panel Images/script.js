const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
    // One event will be triggered for each attribute being transitions(eg. `font-size` AND `flex-grow`)
    // if (e.propertyName === 'flex-grow')

    // Normally we could do above but Safari sends it in as `flex`...
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('active');
    }
}

/** NOTE: not toggleOpen() because that would run it on page load
 * This basically says - when someone clicks, go find that function and do it
 */
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));