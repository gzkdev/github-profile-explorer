const searchName = JSON.parse(localStorage.getItem("username"));
const userBio = document.querySelector('.github-user-about');
const userLogin = document.querySelector('.github-name');
const usercName = document.querySelector('.github-username');
const userRepoCount = document.querySelector('.github-repo-number.desktop');
const userRepoCountMobile = document.querySelector('.github-repo-number.mobile');
let repoCardsContainer = document.querySelector('.secondary-col');
let repoCard = document.createElement("div");
repoCard.className = "github-repo-card";
const navBars = document.querySelectorAll('.sticky-nav-bar');

const userImg = document.querySelectorAll('.user-img');



const findUser = async (userName) => {
  fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      const { login, name, bio, public_repos, avatar_url } = data;
      userBio.innerHTML = bio;
      userLogin.textContent = login;
      usercName.textContent = name;
      userRepoCount.textContent = public_repos;
      userRepoCountMobile.textContent = public_repos;
      userImg.forEach(img => img.setAttribute("src", avatar_url))
    })
    // .then(localStorage.clear())
    .catch(error => console.log(error))
}

const findUserRepos = async (userName) => {
  fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < 20; i++) {
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
    .catch(error => console.log(error))
}

const stickyToggle = async () => {
  navBars.forEach(navBar => {
    const navPosition = navBar.offsetTop;
    if (window.pageYOffset >= navPosition) {
      navBar.classList.add('sticky')
    }
    if (window.pageYOffset <= navPosition) {
      navBar.classList.remove('sticky');
    }

  })
}

findUser(searchName);
findUserRepos(searchName);
window.addEventListener('scroll', stickyToggle)

