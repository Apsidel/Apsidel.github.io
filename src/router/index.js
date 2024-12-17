import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import IllustrationsView from '@/views/IllustrationsView.vue';
import ContactView from '@/views/ContactView.vue';
import DesignView from '@/views/DesignView.vue';
import PhotographyView from '@/views/PhotographyView.vue';
import GalleryItemView from '@/views/GalleryItemView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/illustrations',
      children: [
        {
          path: '',
          component: IllustrationsView,
          props: true
        },
        {
          path: 'view/:id',
          name: 'gallery_item',
          component: GalleryItemView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/design',
      name: 'design',
      component: DesignView
    },
    {
      path: '/photography',
      children: [
        {
          path: '',
          component: PhotographyView,
          props: true
        },
        {
          path: 'view/:id',
          name: 'photo_item',
          component: GalleryItemView,
          props: true
        }
      ]
    },
  ]
})

export default router
