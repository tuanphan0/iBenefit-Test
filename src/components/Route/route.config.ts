import LoadableComponent from '../Loadable';

export const appRouters: any = [
    {
        path: '/',
        exact: true,
        name: 'home',
        title: 'Home',
        icon: 'home',
        component: LoadableComponent(() => import('../../components/Layout/index')),
        isLayout: true,
        showInMenu: false,
    },
    {
        path: '/login',
        exact: true,
        name: 'home',
        title: 'Home',
        icon: 'home',
        component: LoadableComponent(() => import('../../components/Login/index')),
        isLayout: true,
        showInMenu: false,
    },
     {
        path: '/logout',
        exact: true,
        name: 'home',
        title: 'Home',
        icon: 'home',
        // component: LoadableComponent(() => import('../../components/Layout/AppLayout')),
        isLayout: true,
        showInMenu: false,
    },
];
export const routers = [...appRouters];