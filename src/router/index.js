import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Recommend from '../views/Recommend'
import Rank from '../views/Rank'
import Search from '../views/Search'
import moreMusic from '../views/moreMusic'
import ListDetail from '../components/ListDetail'



const routes=[
    {name:'recommend',path:'/',component:Recommend},
    {name:'rank',path:'/rank',component:Rank},
    {name:'search',path:'/search',component:Search},
    {name:'moreMusic',path:'/moreMusic',component:moreMusic},
    {name:'ListDetail',path:'/ListDetail/:id',component:ListDetail}
]

const router=new VueRouter({
    mode:'history',
    base:__dirname,
    routes
})

export default router