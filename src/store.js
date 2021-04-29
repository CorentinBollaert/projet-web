import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    events: [
          {
            name: "Deftones",
            start: '2021-04-30 02:00',
            end: '2021-04-30 08:00',
            color: "blue",
            category: 'HellFest',
          },
          {
            name: "Death DTA",
            start: '2021-04-30 18:00',
            end: '2021-04-30 20:00',
            color: "blue",
            category: 'HellFest',
          },
          {
            name: "Cadaver",
            start: '2021-04-30 08:00',
            end: '2021-04-30 14:00',
            color: "blue",
            category: 'HellFest',
          },
          {
            name: "Obituary",
            start: '2021-04-30 11:00',
            end: '2021-04-30 16:00',
            color: "blue",
            category: 'HellFest',
          },
           {
            name: "Frank Carter & The Rattlesnakes",
            start: '2021-04-30 05:00',
            end: '2021-04-30 11:00',
            color: "red",
            category: 'HellFest',
          },
          {
            name: "Dog Eat Dog",
            start: '2021-04-30 15:00',
            end: '2021-04-30 20:00',
            color: "red",
            category: 'HellFest',
          },
          {
            name: "Witchcraft",
            start: '2021-04-30 16:00',
            end: '2021-04-30 17:00',
            color: "red",
            category: 'HellFest',
          },
          {
            name: "Suicidal Tendencies",
            start: '2021-04-30 21:00',
            end: '2021-04-30 24:00',
            color: "red",
            category: 'HellFest',
          }
        ],
        categories: ['Mon Programme', 'HellFest' ],
    }

const mutations = {
    updateProgram (payload) {
        state.events = payload
    },
    importProgram(name, events){
        events.map(e => {
            state.events.push({
                name: e.name ,
                start: e.start,
                end: e.end,
                color: e.color,
                category: name
            });
        })
    }}

    
    

// const getters = {
//     myProgram: state => state.myProgram
// }

export default new Vuex.Store({
  state,
  mutations
//   getters
})