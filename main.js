// Utilisation de la méthode fecth //

// Test utilisation url api

let url = "https://reqres.in/api/users?per_page=12";

// Variable de la div id root dans le html

const root = document.getElementById("root");

// Création de la nouvelle fonction qui permet d'afficher les éléments de l'api

function fecthApi() {

    fetch(url)

        .then(response => response.json)

        .then(data => displayUsersApi(tabApi.data))

        .catch(console.error="Vous n'avez pas pu récupérer les données")

}
