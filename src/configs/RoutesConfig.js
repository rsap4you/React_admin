import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    },
   
    
]

export const protectedRoutes = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    },

    // {
    //     key: 'dashboard.userlisting',
    //     path: `${APP_PREFIX_PATH}/dashboards/userlisting`,
    //     component: React.lazy(() => import('../views/app-views/dashboards/default/CustomerListing')),
    // },
    
    // {
    //     key: 'dashboard.serviceproviderlisting',
    //     path: `${APP_PREFIX_PATH}/dashboards/serviceproviderlisting`,
    //     component: React.lazy(() => import('../views/app-views/dashboards/default/ServiceProviderListing')),
    // },


    {
        key: 'userlist',
        path: `${AUTH_PREFIX_PATH}/userlist`,
        component: React.lazy(() => import('views/app-views/dashboards/default/CustomerListing')),
    },

    // e-commerce 

    {
        key: 'apps.ecommerce',
        path: `${APP_PREFIX_PATH}/apps/ecommerce`,
        component: React.lazy(() => import('views/app-views/e-commerce')),
    },
    {
        key: 'apps.ecommerce.add-product',
        path: `${APP_PREFIX_PATH}/apps/ecommerce/add-product`,
        component: React.lazy(() => import('views/app-views/e-commerce/add-product')),
    },
    {
        key: 'apps.ecommerce.edit-product',
        path: `${APP_PREFIX_PATH}/apps/ecommerce/edit-product/:id`,
        component: React.lazy(() => import('views/app-views/e-commerce/edit-product')),
    },
    {
        key: 'apps.ecommerce.product-list',
        path: `${APP_PREFIX_PATH}/apps/ecommerce/product-list`,
        component: React.lazy(() => import('views/app-views/e-commerce/product-list')),
    },
    {
        key: 'apps.ecommerce.orders',
        path: `${APP_PREFIX_PATH}/apps/ecommerce/orders`,
        component: React.lazy(() => import('views/app-views/e-commerce/orders')),
    },


    // chat 

    {
        key: 'chat',
        path: `${APP_PREFIX_PATH}/chat/*`,
        component: React.lazy(() => import('views/app-views/chat')),
    },
    // pages

    {
        key: 'pages',
        path: `${APP_PREFIX_PATH}/pages`,
        component: React.lazy(() => import('views/app-views/pages')),
    },
    {
        key: 'pages.profile',
        path: `${APP_PREFIX_PATH}/pages/profile`,
        component: React.lazy(() => import('views/app-views/pages/profile')),
    },
    {
        key: 'pages.invoice',
        path: `${APP_PREFIX_PATH}/pages/invoice`,
        component: React.lazy(() => import('views/app-views/pages/invoice')),
    },
    {
        key: 'pages.pricing',
        path: `${APP_PREFIX_PATH}/pages/pricing`,
        component: React.lazy(() => import('views/app-views/pages/pricing')),
    },
    {
        key: 'pages.faq',
        path: `${APP_PREFIX_PATH}/pages/faq`,
        component: React.lazy(() => import('views/app-views/pages/faq')),
    },
    {
        key: 'pages.setting',
        path: `${APP_PREFIX_PATH}/pages/setting/*`,
        component: React.lazy(() => import('views/app-views/pages/setting')),
    },
    
  
]