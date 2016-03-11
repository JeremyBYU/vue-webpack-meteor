import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
let router = new VueRouter();

/* eslint-disable no-new */

let dummyContainer = Vue.extend({});
router.map({
    '/': {
        component: App
    }
});

router.start(dummyContainer,'#app')

