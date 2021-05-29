const searchName = JSON.parse(localStorage.getItem("username"));
let repoCardsContainer = document.querySelector('.secondary-col');
let repoCard = document.createElement("div");
repoCard.className = "github-repo-card";

const findUser = async (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const { login, name, bio, avatar_url, followers, public_repos } = data;
            const userBio = document.querySelector('.github-user-about').innerHTML = bio;
            const userLogin = document.querySelector('.github-name').textContent = login;
            const usercName = document.querySelector('.github-username').textContent = name;
            const userRepoCount = document.querySelector('.github-repo-no').textContent = public_repos;
        }
        )
        // .then(localStorage.clear())
        .catch(error => alert(error))
}

const findUserRepos = async (userName) => {
    fetch(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 20; i++) {
                console.log(data[i]);
                repoCard.innerHTML = `<div class="github-repo-content">
                <h4 class="github-repo-name">
                  <a href="${data[i].html_url}" class="github-repo-name-link"
                    >${data[i].name}</a
                  >
                </h4>
                <div class="github-repo-stats">
                  <div class="github-repo-stat-box">
                    <span class="fas fa-circle"></span>&nbsp;HTML
                  </div>
                  <div class="github-repo-stat-box">
                    <span class="far fa-star"></span>&nbsp;${data[i].stargazers_count}
                  </div>
                  <div class="github-repo-stat-box">
                    <span class="github-repo-last-updated"
                      >Updated 12 days ago</span
                    >
                  </div>
                </div>
              </div>
              <button class="github-repo-star">
                <span class="fas fa-star"></span> Star
              </button>`;
                repoCardsContainer.appendChild(repoCard.cloneNode(true));
            }
        })
        .catch(error => console.error(error))
}

findUser(searchName);
findUserRepos(searchName);
