import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../components/LoginPage';
import ModifyPassword from '../components/ModifyPassword';
import ModifyInformation from '../components/ModifyInformation';
import StudentGrade from '../components/StudentGrade';


Vue.use(VueRouter);


export default new VueRouter({
    routes:[
        {
            name:'LoginPage',
            path:'/',
            component: LoginPage
        },
        {
            path:'/ModifyPassword',
            component: ModifyPassword
        },
        {
            path: '/ModifyInformation',
            component: ModifyInformation
        },
        {
            path: 'StudentGrade',
            component: StudentGrade
        }

    ]
})
