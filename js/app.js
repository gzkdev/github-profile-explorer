// Global variables
const searchName = JSON.parse(localStorage.getItem("username"));
const userName = document.querySelector('.user-name');
const userLogin = document.querySelector('.user-login');
const userFollowers = document.querySelector('.followers');
const userRepositories = document.querySelector('.repositories');
const userFollowing = document.querySelector('.following');
const userProfileImage = document.querySelector('.header-image');
const repoCardsContainer = document.querySelector('.cards-ctn');
const repoCard = document.createElement('div');


const CreateRepoCards = (data) => {
  for (let i = 0; i < data.length; i++) {
    repoCard.className = 'card';
    repoCard.innerHTML = `
      <header class="card-header">
        <div class="card-repo-name">
          <a href="${data[i].html_url}" class="card-repo-link">${data[i].name}</a>
        </div>
        <div class="card-repo-text-ctn">
          <span class="card-repo-details">
          ${data[i].description}
          </span>
        </div>
      </header>
      <footer class="card-footer">
        <div class="card-repo-stats">
          <div class="card-repo-stats-box">
            <span class="far fa-star"></span>&nbsp;<span
              class="card-repo-star-count"
              >${data[i].forks_count}</span
            >
          </div>
          <div class="card-repo-stats-box">
            <span class="fas fa-code-branch"></span>&nbsp;<span
              class="card-repo-star-count"
              >${data[i].stargazers_count}</span
            >
          </div>
          <div class="card-repo-stats-box">
            <span class="fas fa-circle"></span>&nbsp;<span
              class="card-repo-star-count"
              >${data[i].language}</span
            >
          </div>
        </div>
      </footer>`;
    repoCardsContainer.appendChild(repoCard.cloneNode(true));
  }
}

const findUser = async (userId) => {
  fetch(`https://api.github.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
      console.table(data);
      const { login, name, followers, following, public_repos, avatar_url } = data;

      userName.textContent = `@${login}`;
      userLogin.textContent = name;
      userFollowers.textContent = followers;
      userFollowing.textContent = following;
      userRepositories.textContent = public_repos;
      userProfileImage.src = avatar_url;
    })
    // .then(localStorage.clear())
    .catch(error => console.log(error))
}

const findUserRepos = async (userName) => {
  fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      CreateRepoCards(data)
    })
    .catch(error => console.log(error))
}

findUser(searchName);
findUserRepos(searchName);