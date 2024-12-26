import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import DesignView from '@/views/DesignView.vue';
import PhotographyView from '@/views/PhotographyView.vue';
import GalleryItemView from '@/views/GalleryItemView.vue';
import PhotoItemView from '@/views/PhotoItemView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/designs',
      children: [
        {
          path: '',
          component: DesignView,
        },
        {
          path: 'view/:id',
          name: 'design_item',
          component: GalleryItemView,
          props: true
        }
      ]
    },
    {
      path: '/photography',
      children: [
        {
          path: '',
          component: PhotographyView,
        },
        {
          path: 'view/:id',
          name: 'photo_item',
          component: PhotoItemView,
          props: true
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
