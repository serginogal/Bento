const searchForm = document.querySelector('.searchBlock');
const searchInput = document.querySelector('#searchQueryInput');
const searchBtn = document.querySelector('#searchQuerySubmit');

const googleSearch = (query) => {
    window.open('http://www.google.com/search?q=' + query || '', '_self')
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    googleSearch(searchInput.value)
})