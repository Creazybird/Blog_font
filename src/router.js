import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Note from './views/note.vue'
import Source from './views/source.vue'
import noteDetail from '../src/views/note/noteDetail'
import write from '../src/views/write.vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[{
        path:'/homePage',
        name:'homePage',
        component:Home
    },{
        path:'/note',
        name:'Note',
        component:Note
    },{
        path:'/source',
        name:'Source',
        component:Source
    },{
        path:'/noteDetail/:id',
        name:'noteDetail',
        component:noteDetail
    },{
        path:'/write',
        name:'write',
        component:write
    }]
})