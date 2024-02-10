import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(ToastService)

app.mount('#app')
