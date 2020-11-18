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
        path: "/businessGroup/sellOrder",
        name: '销售单',
        component: lazy(() => import("../pages/sellOrder"))
    },
    {
        path: "/businessGroup/sellOrder/detail",
        name: '销售单详情',
        component: lazy(() => import("../pages/sellOrder/detail"))
    }
]

export default router