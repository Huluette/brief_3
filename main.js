// Utilisation de la méthode fecth //

// Test utilisation url api

// Création de la fonction qui permet de récupérer les éléments de l'api

function fetchApi() {
    fetch("https://reqres.in/api/users?per_page=12")
        .then(response => response.json())
        .then(data => displayUsers(data.data))
        .catch(console.error)
}

// Appelation de la fonction

fetchApi();

// Création de la fonction qui permet d'afficher les éléments de l'api

function displayUsers(users) {
    const usersContainer = document.getElementById("root");

    // Boucle pour créer une card et afficher les données de l'url

    users.forEach(user => {

        //Appelation de la div id root

        const userCard = document.createElement("div");
        userCard.className = "card";

        // Appelation de l'image pour afficher l'avatar

        const avatar = document.createElement("img");
        avatar.src = user.avatar;
        avatar.className = "card-img-top";
        avatar.alt = `Avatar of ${user.first_name} ${user.last_name}`;

        // Création de la div et de son contenu

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const userName = document.createElement("h2");
        userName.className = "card-title";
        userName.textContent = `${user.first_name} ${user.last_name}`;

        const userEmail = document.createElement("h4");
        userEmail.className = "card-text";
        userEmail.textContent = `${user.email}`;

        const description = document.createElement("p");
        description.className = "write";
        description.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore expedita quaerat.`;

        // Permet de renvoyer et d'afficher les cards

        cardBody.appendChild(userName);
        cardBody.appendChild(userEmail);

        userCard.appendChild(avatar);
        userCard.appendChild(cardBody);

        usersContainer.appendChild(userCard);

        cardBody.appendChild(description);
    });

    usersContainer.addEventListener("click", function (event) {
        const target = event.target;

        if (target.classList.contains("card")) {
            const modalContent = document.querySelector(".card");
            modalContent.className = "modal";

            target.innerHTML = usersContainer.innerHTML;
        }

        modalContent.style.display = "block";

        const closeBtn = document.createElement("span");
    })
}


