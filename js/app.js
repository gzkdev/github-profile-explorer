const searchName = JSON.parse(localStorage.getItem("username"));

const userName = document.querySelector('.user-name');
const userLogin = document.querySelector('.user-login');
const userFollowers = document.querySelector('.followers');
const userRepositories = document.querySelector('.repositories');
const userFollowing = document.querySelector('.following');
const userProfileImage = document.querySelector('.header-image');



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
      // for (let i = 0; i < 20; i++) {
      //   repoCard.innerHTML = `<div class="github-repo-content">
      //           <h4 class="github-repo-name">
      //             <a href="${data[i].html_url}" class="github-repo-name-link"
      //               >${data[i].name}</a
      //             >
      //           </h4>
      //           <div class="github-repo-stats">
      //             <div class="github-repo-stat-box">
      //               <span class="fas fa-circle"></span>&nbsp;HTML
      //             </div>
      //             <div class="github-repo-stat-box">
      //               <span class="far fa-star"></span>&nbsp;${data[i].stargazers_count}
      //             </div>&nbsp;
      //             <div class="github-repo-stat-box">
      //               <span class="fas fa-code-branch"></span>&nbsp;${data[i].forks_count}
      //             </div>
      //             <div class="github-repo-stat-box">
      //             <span class="github-repo-last-updated"
      //             > <span>Updated<span/> 12 days ago</span
      //             >
      //             </div>
      //           </div>
      //         </div>
      //         <button class="github-repo-star">
      //           <span class="fas fa-star"></span> Star
      //         </button>`;
      //   repoCardsContainer.appendChild(repoCard.cloneNode(true));
      // }
    })
    .catch(error => console.log(error))
}

findUser(searchName);
findUserRepos(searchName);

// const searchName = JSON.parse(localStorage.getItem("username"));
// const userBio = document.querySelector('.github-user-about');
// const userLogin = document.querySelector('.github-name');
// const usercName = document.querySelector('.github-username');
// const userRepoCount = document.querySelector('.github-repo-number.desktop');
// const userRepoCountMobile = document.querySelector('.github-repo-number.mobile');
// const repoCardsContainer = document.querySelector('.secondary-col');
// const repoCard = document.querySelector(".github-repo-card");
// const navBars = document.querySelectorAll('.sticky-nav-bar');
// const userImg = document.querySelectorAll('.user-img');
// const githubLink = document.querySelector('.github-repo-name-link');
// const githubForkCount = document.querySelector('.github-repo-forks');
// const githubRepoDescription = document.querySelector('.github-repo-description');


// const baseUrl = "https://api.github.com/graphql";
// const openSource = {
//   githubConvertedToken: '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',
//   githubUserName: searchName,
// };
// const headers = {
//   "Content-Type": "application/json",
//   Authorization: "bearer " + openSource.githubConvertedToken
// };


// const body = {
//   "query": `
//   {
//     user(login: "${searchName}") {
//       avatarUrl
//       followers {
//         totalCount
//       }
//       bio
//       name
//       login
//       repositories(last: 20, ownerAffiliations: [OWNER]) {
//         totalCount
//         nodes {
//           description
//           forkCount
//           isFork
//           name
//           url
//           stargazers {
//             totalCount
//           }
//         }
//         edges {
//           cursor
//         }
//       }
//     }
//   } `
// };


// fetch(baseUrl, {
//   method: "POST",
//   headers: headers,
//   body: JSON.stringify(body)
// })
//   .then(response => (response.json()))
//   .then(data => {
//     const { data: { user: { login, name, bio, followers: { totalCount: followerCount }, avatarUrl, repositories: { totalCount, nodes } } } } = data;
//     userBio.innerHTML = bio;
//     userLogin.textContent = login;
//     usercName.textContent = name;
//     userRepoCount.textContent = totalCount;
//     userRepoCountMobile.textContent = totalCount;
//     userImg.forEach(img => img.setAttribute("src", avatarUrl));

//     for (let i = 0; i < nodes.length; i++) {
//       // console.log(nodes[i])
//       githubLink.innerHTML = nodes[i].name;
//       githubLink.setAttribute('href', nodes[i].url);
//       githubForkCount.innerHTML = nodes[i].forkCount;
//       githubRepoDescription.innerHTML = nodes[i].description;
//       repoCardsContainer.appendChild(repoCard.cloneNode(true));
//     }
//   })
//   .catch(error => console.log(JSON.stringify(error)))


// const stickyToggle = async () => {
//   navBars.forEach(navBar => {
//     const navPosition = navBar.offsetTop;
//     if (window.pageYOffset >= navPosition) {
//       navBar.classList.add('sticky')
//     }
//     if (window.pageYOffset <= navPosition) {
//       navBar.classList.remove('sticky');
//     }

//   })
// }

// window.addEventListener('scroll', stickyToggle)
