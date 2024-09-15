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
      },
      children: [{
        path: "registerServer",
        name: "已认证服务器",
        component: () => import("@/components/serverConf/registerServerPage.vue"),
        meta: { describe: "编辑、修改、删除、查看已认证服务器的信息" }
      }, {
        path: "unRegisterServer",
        name: "未认证服务器",
        component: () => import("@/components/serverConf/unRegisterServerPage.vue"),
        meta: { describe: "删除、查看未认证服务器的信息" }
      }]
    }, {
      path: "/accountConf",
      name: "账户控制面",
      component: () => import("@/views/AccountConf.vue"),
      meta: {
        describe: "增添、修改、删除面板的账户相关信息"
      }
    }, {
      path: "/panelConf",
      name: "面板控制面",
      component: () => import("@/views/PanelConf.vue"),
      meta: {
        describe: "面板配置相关信息"
      }
    }
  ]
})

router.afterEach((to, from) => {
  document.title = `${to.name} - Hysteria2ConfWeb`;
})

export default router
