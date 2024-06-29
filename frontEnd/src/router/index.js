import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/HomeView.vue"),
      meta: {
        describe: "主信息显示板",
        keepAlive: true
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        describe: "了解一下这个项目",
        keepAlive: false
      }
    }
  ]
})

router.afterEach((to, from) => {
  document.title = `${to.name} - Hysteria2ConfWeb`;
})

export default router
