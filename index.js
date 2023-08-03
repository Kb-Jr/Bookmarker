const modal = document.getElementById('modal-container');
const showModal = document.getElementById('add-bookmark');
const closeModal = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('modal-form');
const websitenameEl = document.getElementById('website-name');
const websiteurlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');
const modalContainer = document.getElementById('modal-container');

function show(){
    modal.classList.add('show-modal');
    // websitenameEl.focus();

}



showModal.addEventListener('click', show);
closeModal.addEventListener('click', ()=> {modal.classList.remove('show-modal')});
window.addEventListener('click', (e)=> e.target === modal ? modal.classList.remove('show-modal') : false);

