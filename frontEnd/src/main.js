import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入Pinia
import { createPinia } from 'pinia'
// 引入PrimeVue
import PrimeVue from 'primevue/config';
// 引入PrimeVue Lara主题
import Lara from '@primevue/themes/lara';

// 引入PrimeVue常用组件
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';

// 引入axios设置初始化
import axios from "axios";

axios.defaults.baseURL = "/api";

// 初始化app对象
const app = createApp(App);

// 注册PrimeVueUI库
app.use(PrimeVue,
  {
    theme: {
      preset: Lara,
      options: {
        darkModeSelector: 'light',
      }
    },
    ripple: true
  }
);
app.use(ToastService);

// 注册Pinia和路由
app.use(createPinia());
app.use(router);


// 注册组件
app.component('InputText', InputText);
app.component('Button', Button);

app.mount('#app');
