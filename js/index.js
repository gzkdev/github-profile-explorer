const form = document.querySelector('.home-form');
const searchBox = document.querySelector('#home-search').value;
const searchValue = searchBox.split(' ').join('');

const handleSubmit = (e) => {
    e.preventDefault();
    const searchBox = document.querySelector('#home-search').value;
    const searchValue = searchBox.split(' ').join('');
    localStorage.setItem("username", JSON.stringify(searchValue));
    window.location.href = '../profile.html';
    searchBox = document.querySelector('#home-search').value = '';
}

form.addEventListener('submit', handleSubmit)
// form.addEventListener('submit', handleSubmit)

// function handleSubmit(e) {
//     e.preventDefault();
//     const searchBox = document.querySelector('#home-search').value;
//     const searchValue = searchBox.split(' ').join('');

//     localStorage.setItem("username", JSON.stringify(searchValue));
//     const searchName = JSON.parse(localStorage.getItem("username"));

//     findUser(searchName);
//     findUserRepos(searchName);

//     const changePage = async () => window.location.href = '../profile.html';
//     changePage();

// }

// const findUser = async (userName) => {
//     fetch(`https://api.github.com/users/${userName}`)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         // .then(localStorage.clear())
//         .catch(error => alert(error))
// }

// const findUserRepos = async (userName) => {
//     fetch(`https://api.github.com/users/${userName}/repos`)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
// }

// const findUser = async (e) => {
//     const response = await fetch(`https://api.github.com/users/${searchValue}`);
//     const responseJson = await response.json();
//     console.log(responseJson);
// }