/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
require("./fontawesome");

window.Vue = require("vue").default;

import VueIziToast from "vue-izitoast";
import "izitoast/dist/css/iziToast.min.css";
import Authorization from "./authorization/authorize";
import router from "./router";
import Spinner from "./components/Spinner.vue";

Vue.use(VueIziToast);
Vue.use(Authorization);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component("spinner", Spinner);

const app = new Vue({
    el: "#app",

    data: {
        loading: false,
        interceptor: null,
    },

    created() {
        this.enableInterceptor();
    },

    methods: {
        enableInterceptor() {
            // Add a request interceptor
            this.interceptor = axios.interceptors.request.use(
                (config) => {
                    this.loading = true;
                    return config;
                },
                (error) => {
                    this.loading = false;
                    return Promise.reject(error);
                }
            );

            // Add a response interceptor
            axios.interceptors.response.use(
                (response) => {
                    this.loading = false;
                    return response;
                },
                (error) => {
                    this.loading = false;
                    return Promise.reject(error);
                }
            );
        },

        disableInterceptor() {
            axios.interceptors.request.eject(this.interceptor);
        },
    },

    router,
});
