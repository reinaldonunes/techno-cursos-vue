import Vue from "vue";
import Router from 'vue-router';
import HomePage from './views/HomePage.vue';
import CoursesList from './views/CoursesList.vue';
import ContactUs from './views/ContactUs.vue';
import SuccessPage from './views/SuccessPage.vue';
import CourseView from './views/CourseView.vue';



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: HomePage,
      redirect: '/'
    },

    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/cursos',
      name: 'courses',
      component: CoursesList
    },
    {
      path: "/cursos/:curso",
      name: "course",
      component: CourseView,
      props: true
    },
    {
      path: '/contato',
      name: 'contact',
      component: ContactUs
    },
    {
      path: '/sucesso',
      name: 'success',
      component: SuccessPage
    }
  ]
})