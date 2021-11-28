import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as normalize from "normalize.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAtX6bY0S91Kd-NIMWIoSjTdU1-TbQMnjs",
  authDomain: "jelly-studio.firebaseapp.com",
  projectId: "jelly-studio",
  storageBucket: "jelly-studio.appspot.com",
  messagingSenderId: "1022018592980",
  appId: "1:1022018592980:web:7574c2b133758f4ebb1b41",
  measurementId: "G-HN77W5CJV3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let vueapp = createApp(App);
vueapp.use(router);
vueapp.use(normalize);
vueapp.mount("#app");
