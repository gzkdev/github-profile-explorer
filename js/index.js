const form = document.querySelector('.home-form');

form.addEventListener('submit', (e) => {
    // e.preventDefault();
    window.location.href = '../profile.html';
    const searchBox = document.querySelector('#home-search').value;
    const searchValue = searchBox.split(' ').join('');
    // alert(searchValue);
    fetch(`https://api.github.com/users/${searchValue}`)
        .then(response => response.json)
        .then(data => console.log(data))
        .catch(error => console.error(error))

})