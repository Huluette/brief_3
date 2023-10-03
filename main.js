// Utilisation de la méthode fecth //

let url = "https://reqres.in/api/users?per_page=12";
let root = document.getElementById('root')
let rootJSON;

fetch(url)

    .then(response => response.json())

    .then(data => {

        root = url() {`
        <div id="card">
            <img src="${root.avatar}" alt="image de l'api">
            <p>${root.first_name}</p>
            <p>${root.last_name}</p>
        </div>
        `
        }
    })

    .catch(function(error) {
        console.error('Erreur de chargement de URL:', error);
    })
