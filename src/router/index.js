import { createRouter, createWebHistory } from "vue-router";
import Contact from "../views/Home.vue";
import ContactInside from "../views/contact-inside.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import ToLogin from "../views/ToLogin.vue";
import homepage from "../views/homepage.vue";
import event from "../views/Event.vue";
import AnnoucePage from "../views/Annouce-Post.vue";
import NewsPage from "../views/News-Post.vue";
import ActPost from "../views/Activities-Post.vue";
import Act from "../components/Activity.vue";
import news from "../components/News.vue";
import Profile_test from "../views/profile.vue";
import NewsForm from "../views/NewsForm-dbTest.vue";

import 'bootstrap/dist/css/bootstrap.css';

const routes = [
  {
    path: "/Create_News",
    name: "NewsForm",
    component: NewsForm
  },
  {
    path: "/user/:s_id",
    name: "profile",
    component: Profile_test
  },
  {
    path: "/News",
    name: "news",
    component: news
  },
  {
    path: "/Activity",
    name: "Act",
    component: Act
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/ContactInside",
    name: "ContactInside",
    component: ContactInside
  },
  {
    path: "/Event",
    name: "event",
    component: event
  },
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register
  },
  {
  path: "/successful",
  name: "Tologin",
  component: ToLogin
},
{
  path: "/Homepage",
  name: "homepage",
  component: homepage
},
{
  path: "/homepage/annoucement/:id",
  name: "AnnouceDetailPage",
  component: AnnoucePage
},
{
  path: "/event/news/:id",
  name: "NewsDetailPage",
  component: NewsPage
},{
  path: "/event/activities/:id",
  name: "ActDetailPage",
  component: ActPost
},




];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
