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