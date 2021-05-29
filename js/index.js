const form = document.querySelector('.home-form');
const searchBox = document.querySelector('#home-search').value;
const searchValue = searchBox.split(' ').join('');

const handleSubmit = (e) => {
    e.preventDefault();
    const searchBox = document.querySelector('#home-search').value;

    if (!searchBox) {
        return alert('Please enter a valid name!');
    }
    const searchValue = searchBox.split(' ').join('');
    localStorage.setItem("username", JSON.stringify(searchValue));
    window.location.href = '../profile.html';
    searchBox = document.querySelector('#home-search').value = '';
}

form.addEventListener('submit', handleSubmit)
