import { createRouter, createWebHistory } from 'vue-router';
import UserDetail from './../views/UserDetail.vue'; 

const routes = [
  // Otras rutas de tu aplicación...
  {
    path: '/users/:id',
    name: 'UserDetail',
    component: UserDetail,
    props: true // Permite pasar props mediante la ruta
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;