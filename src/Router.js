import { createRouter, createWebHistory } from "vue-router";
import Home from './components/HomeComponent.vue'
import Create from './components/CreateComponent.vue'
import Update from './components/UpdateComponent.vue'
import Serie from './components/SerieComponent.vue'
import Personajes from './components/PersonajesComponent.vue'

const rutas =
[
    {
        path:"/",
        component: Home
    },
    {
        path:"/create",
        component: Create
    },
    {
        path:"/update",
        component: Update
    },
    {
        path:"/serie/:idserie",
        component: Serie
    },
    {
        path:"/personajes/:idserie",
        component: Personajes
    }
]

const router = createRouter(
    {
        history:createWebHistory(),
        routes:rutas
    }
)

export default router;