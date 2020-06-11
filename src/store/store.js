import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        url: '',
        device: {
            port: "",
            address: ""
        }
    },
    mutations: {
        getDevice(state, {port, address}) {
            state.device.port = port
            state.device.address = address
        }
    }
})