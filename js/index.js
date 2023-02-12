document.addEventListener('DOMContentLoaded', () =>{

    
    const gitHubForm = document.getElementById('github-form')
    gitHubForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userName = document.getElementById('search').value
    
            console.log(userName)
    //console.log('hello world')
    fetch(`https://api.github.com/search/users?q=${userName}`)
    .then(function (response){
        return response.json()
    })
    .then(json => renderUsers(json.items))
    
    })
    
    
    function renderUsers(array) {
        array.forEach((eachUser) => {
            //Display User Name
         const userList = document.getElementById('user-list')
         const userLi = document.createElement('li')
         userLi.innerText = eachUser.login
         userList.appendChild(userLi)
            //Display User URL
         const urlLi = document.createElement('li')
         urlLi.innerText = eachUser.url
         userList.appendChild(urlLi)
         //Display User Repo Url
     const repoLi = document.createElement('li')
     repoLi.innerText = eachUser.repos_url
     userList.appendChild(repoLi)
            //Display User Avatar
        const avatarImg = document.createElement('img')
        avatarImg.src = eachUser.avatar_url
        userList.appendChild(avatarImg)
            //Viewing User Repos
        repoLi.addEventListener('click', () => {
            window.open(eachUser.repos_url)
        })
            //Viewing User Profile
        userLi.addEventListener('click', () => {
            window.open(eachUser.html_url)
        })

        })
        
    }

    
})