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
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Ajouter un élément",
        action: () => {
          console.log("BTN1"),
            document.getElementById("app").requestFullscreen();
        },
      },
      {
        title: "Partager mon programme",
        action: () => {
          console.log("BTN2"), share();
        },
      },
      {
        title: "Importer un planning (NFC)",
        action: () => {
          console.log("BTN3");
        },
      },
      {
        title: "Copier le programme",
        action: () => {
          console.log("BTN4"), copyclipboard("salut c'est zeldu");
        },
      },
    ],
  }),
};

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
