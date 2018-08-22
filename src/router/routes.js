
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'projects', component: () => import('pages/Projects.vue') },
      { path: '/projects/ready-golf', component: () => import('pages/ReadyGolf.vue') },
      { path: '/projects/eazy-marketplace', component: () => import('pages/EazyMarketplace.vue') },
      { path: '/projects/bridge-the-fridge', component: () => import('pages/BridgeTheFridge.vue') },
      { path: '/projects/portfolio', component: () => import('pages/PortfolioApp.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
