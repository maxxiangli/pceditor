import {Login} from '../pages/login/login';
import {Publish} from '../pages/publish/publish';
import {Draft} from '../pages/draft/draft';
import {Edit} from '../pages/edit/edit';

const config = [
  {
    path: '/',
    // component: BlankLayout, // 空白页布局
    childRoutes: [
      // 子菜单路由
      {
        path: '/login', // 路由路径
        name: '登录页', // 菜单名称 (不设置,则不展示在菜单栏中）
        icon: 'setting', // 菜单图标
        component: {Login},
      },
      {
        path: '/',
        // exact: true,
        // component: BasicLayout, // 基本布局
        childRoutes: [
          {
            path: '/publish',
            name: '已发表',
            icon: 'unordered-list',
            // permission: 'live_perm',
            component: {Publish},
          },
          {
            path: '/draft', // 路由路径
            name: '草稿箱', // 菜单名称 (不设置,则不展示在菜单栏中）
            icon: 'setting', // 菜单图标
            component: {Draft},
          },
          {
            path: '/edit',
            name: '编辑发表',
            icon: 'edit',
            // permission: 'live_perm',
            component: {Edit},
          },
          { path: '/', exact: true, redirect: '/login' },
          { path: '*', exact: true, redirect: '/exception/404' },
        ],
      },
    ],
  },
];

export default config;
