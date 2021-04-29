<template>

  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Aujourd'hui
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-sheet>
      <!-- <v-sheet height="600"> -->
      <v-sheet >
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          type="category"
          category-show-all
          :categories="this.$store.state.categories"
          :events="this.$store.state.events"
          :event-color="getEventColor"
          @click:event="dateClick"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>

import store from '../store'

          // @change="fetchEvents"

  export default {
    data: () => ({
      focus: '',
    }),
    
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
      
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      dateClick (item) {

        for (let i = 0; i < store.state.events.length; i++) {
          // Si l'évènement sélectionné est déja enregistré dans mon programme
          if (store.state.events[i].name == item.event.name && store.state.events[i].category.includes("Mon Programme")) {
            // Si l'évènement est selectionné depuis mon programme, je le retire
            if(item.event.category.includes("Mon Programme")){
              store.state.events.splice(i,1);
            }
            return;
          }   
        };

        store.state.events.push({
            name: item.event.name ,
            start: item.event.start,
            end: item.event.end,
            color: item.event.color,
            category: 'Mon Programme'
        });
      }
      
      // fetchEvents ({ start, end }) {
      //   const events = []

      //   const min = new Date(`${start.date}T00:00:00`)
      //   const max = new Date(`${end.date}T23:59:59`)
      //   const days = (max.getTime() - min.getTime()) / 86400000
      //   const eventCount = this.rnd(days, days + 20)

      //   for (let i = 0; i < eventCount; i++) {
      //     const allDay = this.rnd(0, 3) === 0
      //     const firstTimestamp = this.rnd(min.getTime(), max.getTime())
      //     const first = new Date(firstTimestamp - (firstTimestamp % 900000))
      //     const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
      //     const second = new Date(first.getTime() + secondTimestamp)

      //     events.push({
      //       name: this.names[this.rnd(0, this.names.length - 1)],
      //       start: first,
      //       end: second,
      //       color: this.colors[this.rnd(0, this.colors.length - 1)],
      //       timed: !allDay,
      //       category: this.categories[this.rnd(0, this.categories.length - 1)],
      //     })
      //   }

      //   this.events = events
      // },
      // rnd (a, b) {
      //   return Math.floor((b - a + 1) * Math.random()) + a
      // },
    },
  }
</script>