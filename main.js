document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('.profile-name');
    const user = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const following = document.querySelector('#following');
    const followers = document.querySelector('#followers');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/wildw0')  
            .then(function(answer) {
                return answer.json();
            })
            .then(function(json) {
                name.innerHTML = json.name;
                user.innerHTML = json.login;
                avatar.src = json.avatar_url;
                repos.innerHTML = json.public_repos;
                following.innerHTML = json.following;
                followers.innerHTML = json.followers;
                link.href = json.html_url;
            })
    })
