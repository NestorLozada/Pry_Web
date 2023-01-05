import { RouteRecordRaw, createRouter,  createWebHistory } from "vue-router"
const routes: RouteRecordRaw []= [
    {
        path : '/',
        alias: '/task',
        name: 'task',
        component: () => import('@/components/TaskList.vue'),

    },
    {
        path : '/task/new',
        name: 'task-new',
        component: () => import('@/components/TaskForm.vue'),

    },
    {
        path : '/task/:id'  ,
        name: 'task-detail',
        component: () => import('@/components/TaskDetail.vue'),

    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/components/Reegister.vue'),
    },
    {
        path: '/data',
        name:'data-detail',
        component: () => import ('@/components/Data.vue'),
    }
];
const router = createRouter({
        history: createWebHistory(),
        routes,
});

export default router; 
