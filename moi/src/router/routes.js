const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/square',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/square.vue') }
    ]
  },
  {
    path: '/theatre',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/theatre.vue') }
    ]
  },
  {
    path: '/museum',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/museum.vue') }
    ]
  },
  {
    path: '/volodya',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/volodya.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
]

export default routes
