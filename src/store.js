import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    events: [
          {
            name: "Test",
            start: '2021-04-29 09:00',
            end: '2021-04-29 13:00',
            color: "blue",
            category: 'HellFest',
            // action: ()=> this.events.push({
            //   name: this.name,
            //   start: this.start,
            //   end: this.end,
            //   color: this.color,
            //   category: 'Mon Programme',
            // })
          },
           {
            name: "Test2",
            start: '2021-04-29 12:00',
            end: '2021-04-29 14:00',
            color: "blue",
            category: 'HellFest',
          }
        ],
        categories: ['Mon Programme', 'HellFest'],
    }

const mutations = {
    updateProgram (state, payload) {
        state.events = payload
    }}

    
    

// const getters = {
//     myProgram: state => state.myProgram
// }

export default new Vuex.Store({
  state,
  mutations
//   getters
})