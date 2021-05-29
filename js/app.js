const searchName = JSON.parse(localStorage.getItem("username"));

const findUser = async (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => console.log(data))
        // .then(localStorage.clear())
        .catch(error => alert(error))
}

const findUserRepos = async (userName) => {
    fetch(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

findUser(searchName);
findUserRepos(searchName);