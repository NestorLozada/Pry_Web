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
        path : '/task/:id',
        alias: '/tasks/:id',
        name: 'task-detail',
        component: () => import('@/components/TaskDetail.vue'),

    },
];
const router = createRouter({
        history: createWebHistory(),
        routes,
});

export default router; 
