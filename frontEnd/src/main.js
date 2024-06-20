import { createApp } from 'vue'
// 引入Pinia
import { createPinia } from 'pinia'
// 引入PrimeVue
import PrimeVue from 'primevue/config';
// 引入PrimeVue Lara主题
import Lara from '@primevue/themes/lara';

// 引入PrimeVue常用组件
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


import App from './App.vue'
import router from './router'

const app = createApp(App);

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
app.use(createPinia())
app.use(router)

app.component('InputText', InputText);
app.component('Button', Button);

app.mount('#app')
