import React, { lazy } from 'react'

const router = [
    {
        path: "/",
        name: '首页',
        component: lazy(() => import("../pages/index"))
    },
    {
        path: "/businessGroup",
        name: '业务分组',
        component: lazy(() => import("../pages/businessGroup"))
    },
    {
        path: "/businessGroup/device",
        name: '业务分组',
        component: lazy(() => import("../pages/device"))
    }
]

export default router