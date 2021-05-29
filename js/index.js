const form = document.querySelector('.home-form');

const handleSubmit = (e) => {
    e.preventDefault();
    const searchBox = document.querySelector('#home-search').value;
    const searchValue = searchBox.split(' ').join('');
    localStorage.setItem("username", JSON.stringify(searchValue));
    window.location.href = '../profile.html';
}

form.addEventListener('submit', handleSubmit)
