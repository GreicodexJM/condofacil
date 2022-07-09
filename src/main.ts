import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Router from './router'
import 'normalize.css' // Style reset for all browsers
import './styles/global.less' // global style
import './styles/theme.less' // vant theme style modification

import './permisson' // permission
import 'default-passive-events' // use passive
// eslint-disable-next-line import/no-absolute-path
import 'https://at.alicdn.com/t/font_3307242_pc2kc54o5oc.js'
import directives from './directives' // global directive
// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX_bZiUJJNsBS2IKDGsnUBTCWcAqgzpj0",
  authDomain: "condofacil-901a5.firebaseapp.com",
  projectId: "condofacil-901a5",
  storageBucket: "condofacil-901a5.appspot.com",
  messagingSenderId: "819102901769",
  appId: "1:819102901769:web:3bf8a99376cd82158bfad8",
  measurementId: "G-XY3VBW7YDV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.productionTip = false
// Register global directive
for (const i in directives) {
  app.directive(i, directives[i])
}

app.use(Router).use(pinia).mount('#app')
