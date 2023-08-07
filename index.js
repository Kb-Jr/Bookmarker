const modal = document.getElementById('modal-container');
const showModal = document.getElementById('add-bookmark');
const closeModal = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('modal-form');
const websitenameEl = document.getElementById('website-name');
const websiteurlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');
const modalContainer = document.getElementById('modal-container');

let bookmarks = [];

function show(){
    modal.classList.add('show-modal');
    websitenameEl.focus();

}


showModal.addEventListener('click', show);
closeModal.addEventListener('click', ()=> {modal.classList.remove('show-modal')});
window.addEventListener('click', (e)=> e.target === modal ? modal.classList.remove('show-modal') : false);


function validate(nameValue, urlValue){
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

    const regex = new RegExp(expression);
    if(!nameValue || !urlValue){
        alert('please fill both fields');
    }
   
    if(!urlValue.match(regex)){
        alert('url address invalid!')
        return false;
    }

    return true;

}

function buildBookmarks(){

    bookmarksContainer.textContent = '';
    bookmarks.forEach((bookmark) =>{
        const {name , url} = bookmark;

        const item = document.createElement('div');
        item.classList.add('item');

        const closeIcon = document.createElement('i');
        closeIcon.classList.add('fa-solid', 'fa-xmark');
        closeIcon.setAttribute('title', 'Close Bookmark');
        closeIcon.setAttribute('onclick', `deleteBookmark('${url}')`)

        const info = document.createElement('div');

        const link = document.createElement('a');
        link.setAttribute('href',`${url}`);
        link.setAttribute('target', '_blank');
        link.textContent = name;

        info.append(link);
        item.append(info, closeIcon);
        bookmarksContainer.appendChild(item);
    });
}

function fetchBookmarks(){
    // get the data from local storage and parse it to an array of objects
    if(localStorage.getItem('Bookmarks')){
        bookmarks = JSON.parse(localStorage.getItem('Bookmarks'));
    }

    else {
        bookmarks = [ {
            name:'Google',
            url: 'https://www.google.com'
        
        }];
        localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));
    };

    buildBookmarks();
}

function deleteBookmark(url){
    bookmarks.forEach((bookmark) => {
        if (bookmark.url === url) {
            bookmarks.splice(bookmarks.indexOf(bookmark), 1 );
        }
    });

    localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
}

function storeBookmark(e){
    e.preventDefault();
    const nameValue=websitenameEl.value;
    let urlValue=websiteurlEl.value;
    if (!urlValue.includes('http://', 'https://')){
        urlValue=`https://${urlValue}`;
    }
    
    if (!validate(nameValue, urlValue)){
        return false;
    }

    const bookmark = {
        name:nameValue,
        url:urlValue,
    };

    bookmarks.push(bookmark);
    localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
    bookmarkForm.reset();
    websitenameEl.focus();
}

bookmarkForm.addEventListener('submit', storeBookmark);

fetchBookmarks();