import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主信息显示板',
      component: () => import("@/views/HomeView.vue"),
      meta: {
        describe: "展示面板常规信息",
        keepAlive: true
      },
    }, {
      path: '/about',
      name: '关于',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        describe: "了解一下这个项目",
      }
    }, {
      path: "/serverConf",
      name: "服务器控制面",
      component: () => import("@/views/ServerConf.vue"),
      meta: {
        describe: "登记、删除、修改服务器信息"
      }
    },{
      path:"/accountConf",
      name:"账户控制面",
      component:() => import("@/views/AccountConf.vue"),
      meta:{
        describe:"增添、修改、删除面板的账户相关信息"
      }
    }
  ]
})

router.afterEach((to, from) => {
  document.title = `${to.name} - Hysteria2ConfWeb`;
})

export default router
