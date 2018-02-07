import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Recommend from '../views/Recommend'
import Rank from '../views/Rank'
import Search from '../views/Search'
import moreMusic from '../views/moreMusic'
import ListDetail from '../components/ListDetail'
import RecommendSong from '../components/RecommendSong'
import SongMusic from '../components/songMusic'

const routes=[
    {name:'recommend',path:'/',component:Recommend},
    {name:'rank',path:'/rank',component:Rank},
    {name:'search',path:'/search',component:Search},
    {name:'moreMusic',path:'/moreMusic',component:moreMusic},
    {name:'ListDetail',path:'/ListDetail/:id',component:ListDetail},
    {name:'RecommendSong',path:'/RecommendSong/:title',component:RecommendSong},
    {name:'songMusic',path:'/songMusic/:song',component:SongMusic}
]

const router=new VueRouter({
    // mode:'history',//配置成手机端的话则需要改为hash或者不写默认为hash
    base:__dirname,
    routes
})

export default router