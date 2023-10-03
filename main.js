// Utilisation de la méthode fecth //

// Test utilisation url api

let url = "https://reqres.in/api/users?per_page=12";

// Création de la fonction qui permet de récupérer les éléments de l'api

function fetchApi() {
    fetch(url)
        .then(response => response.json())
        .then(data => displayUsers(data.data))
        .catch(console.error)
}

// Création de la fonction qui permet d'afficher les éléments de l'api

function displayUsers(users) {
    
    // Variable de la div id root dans le html
    const app = document.getElementById("root");
    
    users.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h2>${user.first_name} ${user.last_name}</h2>
        <p>Email : ${user.email}</p>
        <img src="${user.avatar}" alt="${user.first_name}${user.last_name}" width="100">`;        
        app.appendChild(userDiv);
    });

}



