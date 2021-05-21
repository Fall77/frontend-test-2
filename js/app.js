const open = document.getElementById("open");
const close = document.getElementById("close")
const modal = document.getElementById("modal-container")

open.addEventListener('click', () => {
    modal.classList.add('show')
    modal.style.visibility = 'visible'
})

close.addEventListener('click', () => {
    modal.classList.remove('show')
    modal.style.visibility = 'hidden'
})