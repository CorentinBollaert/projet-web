<template>

  <div class="text-center">
    <!-- écran large -->
    <div id="dropdown-wide">
      <v-btn v-for="(item, index) in items"
          :key="index"
          @click="item.action"
        >{{ item.title }}
      </v-btn>
    </div>
    <div id="dropdown-small">
      <v-menu offset-y >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Gérer mon planning
          </v-btn>
        </template>

        <!-- écran étroit -->

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
    </div>
  </div>
</template>
<script>
import store from "../store";
import { FilterMyEvents } from "../Util";

export default {
  components: {},
  data: () => ({
    items: [
      // {
      //   title: "Fullscreen",
      //   action: () => {
      //       document.getElementById("app").requestFullscreen();
      //       // document
      //       //   .getElementsByClassName("row fill-height")[0]
      //       //   .requestFullscreen();
      //   },
      // },
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
          deleteCategory();
        },
      },
      {
        title: "Enregistrer localement",
        action: () => {
          window.localStorage.setItem(
            "localStorageEvents",
            JSON.stringify(store.state.events)
          );
          window.localStorage.setItem(
            "localStorageEventsCategory",
            JSON.stringify(store.state.categories)
          );
        },
      },
      {
        title: "Charger localement",
        action: () => {
          store.state.events = JSON.parse(
            window.localStorage.getItem("localStorageEvents")
          );
          store.state.categories = JSON.parse(
            window.localStorage.getItem("localStorageEventsCategory")
          );
        },
      },
      // {
      //   title: "Aide",
      //   action: () => {
      //     console.log();
      //   },
      // },
    ],
  }),
};

function deleteCategory() {
  var CategoryName= prompt(
    "Quelle catégorie souhaitez vous supprimez ?",
  );

  if (CategoryName == null || CategoryName == "") {
    return;
  }

  var eventCopy = []
  var categoryCopy = []

  for (let i = 0; i < store.state.events.length; i++) {
    if (store.state.events[i].category?.toLowerCase() != CategoryName.toLowerCase()) {
      eventCopy.push(store.state.events[i])
    } 
  }

  for (let i = 0; i < store.state.categories.length; i++) {
    if (store.state.categories[i]?.toLowerCase() != CategoryName.toLowerCase()) {
      categoryCopy.push(store.state.categories[i])
    } 
  }
  store.state.events = eventCopy;
  store.state.categories = categoryCopy;
}

function importPlanning() {
  var CategoryName = prompt(
    "Entrez le nom de la nouvelle catégorie à importer",
    "Nom de la catégorie"
  );

  if (CategoryName == null || planning == "") {
    return;
  }

  var planning = prompt(
    "Entrez les données à importer",
    "Collez ici au format JSON"
  );

  if (planning == null || planning == "") {
    return;
  }
  var parsedPlanning = JSON.parse(planning);
  store.state.categories.push(CategoryName);

  parsedPlanning.forEach((e) => {
    store.state.events.push({
      name: e.name,
      start: e.start,
      end: e.end,
      color: e.color,
      category: CategoryName,
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
      text:
        "Voici mon programme pour le festival, joins toi à moi \n \n \n Copiez le texte suivant et insérez le dans l'application : \n \n" +
        JSON.stringify(FilterMyEvents(store.state.events)),
      //url: JSON.stringify(FilterMyEvents(store.state.events)),
    })
    .then(() => console.log("Programme partagé"))
    .catch((error) =>
      console.log("Erreur lors du partage du programme :", error)
    );
}
</script>
