document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('.profile-name');
    const user = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const following = document.querySelector('#following');
    const followers = document.querySelector('#followers');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/wildw0')  
            .then(function(awnser) {
                return awnser.json();
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
    

    // GET: utilizado para solicitar um dado do servidor;
    // • POST: quando desejamos enviar dados para o servidor;
    // • PUT: utilizado para alterar todos os dados de uma informação;
    // • PATCH: utilizado para alterar parcialmente os dados de uma informação;
    // • DELETE: utilizado para deletar um recurso.