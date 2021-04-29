<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Gérer mon planning
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.action"
        >
          <v-list-item-action>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-menu>

     <!-- Snackbar
    <v-snackbar
      v-model="snackbar.status"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar.status = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> -->

  </div>
</template>
<script>
import store from "../store";
import { FilterMyEvents } from "../Util";

export default {
    components: {
    },
  data: () => ({
    // snackbar : {
    //   status : false,
    //   text: `Hello, I'm a snackbar`,
    // },
    items: [
      {
        title: "Fullscreen",
        action: () => {
            // document.getElementById("app").requestFullscreen();
            document
              .getElementsByClassName("row fill-height")[0]
              .requestFullscreen();
        },
      },
      {
        title: "Copier le programme sur presse-papier",
        action: () => {
          copyclipboard(JSON.stringify(FilterMyEvents(store.state.events)));
        },
      },
      {
        title: "Partager mon programme",
        action: () => {
          share();
        },
      },
      {
        title: "Importer un planning",
        action: () => {
          importPlanning();
        },
      },
      {
        title: "Supprimer une categorie",
        action: () => {
          console.log("BTN3"), deleteProg();
        },
      },
      {
        title: "Enregistrer localement",
        action: () => {
          window.localStorage.setItem("localStorageEvents", JSON.stringify(store.state.events));
          window.localStorage.setItem("localStorageEventsCategory", JSON.stringify(store.state.categories));
        },
      },
      {
        title: "Charger localement",
        action: () => {
          store.state.events = JSON.parse(window.localStorage.getItem("localStorageEvents"));
          store.state.categories = JSON.parse(window.localStorage.getItem("localStorageEventsCategory"));
        },
      },
      {
        title: "Aide",
        action: () => {
          console.log();
        },
      },
    ],
  }),
};

// function supprimerCategory() {
//   var categoryName = prompt("Entrez les données à importer", "Collez ici au format JSON");

//   if (categoryName == null || categoryName == "") {
//     return;
//   }

//   store.state.events.forEach(e => {
//     if (e.category.tolower()) {
      
//     }
//   });

function importPlanning() {

  var CategoryName = prompt("Entrez le nom de la nouvelle catégorie à importer", "Nom de la catégorie");

  if (CategoryName == null || planning == "") {
      return;
  }

  var planning = prompt("Entrez les données à importer", "Collez ici au format JSON");

  if (planning == null || planning == "") {
    return;
  }
  var parsedPlanning = JSON.parse(planning)
  store.state.categories.push(CategoryName)

  parsedPlanning.forEach(e => {
      store.state.events.push({
          name: e.name ,
          start: e.start,
          end: e.end,
          color: e.color,
          category: CategoryName
      });
  });

}

//Fonction pour copié dans le presse papier
function copyclipboard(programmecopie) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.textContent = programmecopie;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

// Fonction de partage du programme
function share() {
  if (!("share" in navigator)) {
    alert(
      "Web Share API non supporté sur votre navigateur, veuillez essayer avec un autre."
    );
    return;
  }

  navigator
    .share({
      title: "Partagez votre programme",
      text: "Voici mon programme pour le festival, joins toi à moi !",
      url: "https://zeldu.com/",
    })
    .then(() => console.log("Programme partagé"))
    .catch((error) =>
      console.log("Erreur lors du partage du programme :", error)
    );
}
</script>
