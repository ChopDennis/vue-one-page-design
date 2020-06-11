import Vue from 'vue'
import VueRouter from 'vue-router'
import Device from '../components/Device.vue'
import Config from '../components/Config.vue'
import Value from '../components/Value.vue'
import Wifi from '../components/Wifi.vue'
import Driver from '../components/Driver.vue'
import ImamLog from "../components/ImamLog";

Vue.use(VueRouter)

const routes = [
    {
        path: '/device',
        name: 'Device',
        component: Device
    }, {
        path: '/config',
        name: 'Config',
        component: Config
    }, {
        path: '/wifi-config',
        name: 'Wifi',
        component: Wifi
    }, {
        path: '/driver-config',
        name: 'Driver',
        component: Driver
    }, {
        path: '/value',
        name: 'Value',
        component: Value
    }, {
        path: '/imam-log',
        name: 'ImamLog',
        component: ImamLog
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
