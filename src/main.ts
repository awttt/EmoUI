import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import xixi from './components/xixi.vue'
import xixi2 from './components/xixi2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:xixi},
        {path:'/x',component:xixi2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
