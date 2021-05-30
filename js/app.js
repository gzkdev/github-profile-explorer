const searchName = JSON.parse(localStorage.getItem("username"));
const userBio = document.querySelector('.github-user-about');
const userLogin = document.querySelector('.github-name');
const usercName = document.querySelector('.github-username');
const userRepoCount = document.querySelector('.github-repo-number.desktop');
const userRepoCountMobile = document.querySelector('.github-repo-number.mobile');
const repoCardsContainer = document.querySelector('.secondary-col');
const repoCard = document.querySelector(".github-repo-card");
const navBars = document.querySelectorAll('.sticky-nav-bar');
const userImg = document.querySelectorAll('.user-img');
const githubLink = document.querySelector('.github-repo-name-link');
const githubForkCount = document.querySelector('.github-repo-forks');
const githubRepoDescription = document.querySelector('.github-repo-description');

console.log(searchName);

const baseUrl = "https://api.github.com/graphql";
const token = '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';
const openSource = {
  githubConvertedToken: "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",
  githubUserName: searchName,
};
const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};


const body = {
  "query": `
  {
    user(login: "${searchName}") {
      avatarUrl
      followers {
        totalCount
      }
      bio
      name
      login
      repositories(last: 20, ownerAffiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]) {
        totalCount
        nodes {
          description
          forkCount
          isFork
          name
          url
        }
        edges {
          cursor
        }
      }
    }
  }

  `
}


fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(body)
})
  .then(response => (response.json()))
  .then(data => {
    const { data: { user: { login, name, bio, followers: { totalCount: followerCount }, avatarUrl, repositories: { totalCount, nodes } } } } = data;
    userBio.innerHTML = bio;
    userLogin.textContent = login;
    usercName.textContent = name;
    userRepoCount.textContent = totalCount;
    userRepoCountMobile.textContent = totalCount;
    userImg.forEach(img => img.setAttribute("src", avatarUrl));

    for (let i = 0; i < nodes.length; i++) {
      // console.log(nodes[i])
      githubLink.innerHTML = nodes[i].name;
      githubLink.setAttribute('href', nodes[i].url);
      githubForkCount.innerHTML = nodes[i].forkCount;
      githubRepoDescription.innerHTML = nodes[i].description;
      repoCardsContainer.appendChild(repoCard.cloneNode(true));
    }
  })
  .catch(error => console.log(JSON.stringify(error)))


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

window.addEventListener('scroll', stickyToggle)



