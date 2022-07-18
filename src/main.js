import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import Comments from './components/Comments.vue'
import Gallery from './components/Gallery.vue'
import Home from './components/Home.vue'
import './assets/main.css'

const routes = [
    {path: '/', name:'Home', component: Home},
    {path: '/comments', name:'comments', component: Comments},
    {path: '/gallery', name:'gallery', component: Gallery}
]

const router = createRouter({  history: createWebHashHistory(), routes,})

createApp(App).use(router).mount('#app')

