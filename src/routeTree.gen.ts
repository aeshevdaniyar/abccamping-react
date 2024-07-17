/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutAdminIndexImport } from './routes/_layout/admin/index'
import { Route as LayoutAdminIdImport } from './routes/_layout/admin/$id'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAdminIndexRoute = LayoutAdminIndexImport.update({
  path: '/admin/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAdminIdRoute = LayoutAdminIdImport.update({
  path: '/admin/$id',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/admin/$id': {
      id: '/_layout/admin/$id'
      path: '/admin/$id'
      fullPath: '/admin/$id'
      preLoaderRoute: typeof LayoutAdminIdImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/admin/': {
      id: '/_layout/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof LayoutAdminIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  LayoutRoute: LayoutRoute.addChildren({
    LayoutIndexRoute,
    LayoutAdminIdRoute,
    LayoutAdminIndexRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/",
        "/_layout/admin/$id",
        "/_layout/admin/"
      ]
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/admin/$id": {
      "filePath": "_layout/admin/$id.tsx",
      "parent": "/_layout"
    },
    "/_layout/admin/": {
      "filePath": "_layout/admin/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
