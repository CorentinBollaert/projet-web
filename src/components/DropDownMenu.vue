<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
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
      items: [{
        title: 'Ajouter un élément',
        action: () => {console.log("BTN1") , document.getElementById("app").requestFullscreen();}
        },
        { title: 'Partager mon programme',
        action: ()=> {console.log("BTN2")}
        },
        { title: 'Importer un planning (NFC)',
        action: ()=> {console.log("BTN3")}
        },
      ],
    }),
  }
</script>
