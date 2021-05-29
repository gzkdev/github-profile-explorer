const form = document.querySelector('.home-form');

form.addEventListener('submit', handleSubmit())

function handleSubmit(e) {
    e.preventDefault();
    const searchBox = document.querySelector('#home-search').value;
    const searchValue = searchBox.split(' ').join('');

    localStorage.setItem("username", searchValue);
    const searchName = localStorage.getItem("username");

    findUser(searchName);
    findUserRepos(searchName);

    // const changePage = async () => window.location.href = '../profile.html';
    // changePage();

}

const findUser = async (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => console.log(data))
        // .then(localStorage.clear())
        .catch(error => console.error(error))
}

const findUserRepos = async (userName) => {
    fetch(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

// const findUser = async (e) => {
//     const response = await fetch(`https://api.github.com/users/${searchValue}`);
//     const responseJson = await response.json();
//     console.log(responseJson);
// }