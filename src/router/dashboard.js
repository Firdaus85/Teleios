const dashboard = [
  {
    path: '/dashboards/overview',
    name: 'dashboard-overview',
    component: () => import('@/views/dashboardOverview/dashboardOverview.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dashboards/capital',
    name: 'dashboard-capital',
    component: () => import('@/views/dashboards/capital/Capital.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dashboards/profitable',
    name: 'dashboard-profitable',
    component: () => import('@/views/dashboards/profitable/Profitable.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dashboards/investment',
    name: 'dashboard-investment',
    component: () => import('@/views/dashboards/investment/Investment.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dashboards/solvency',
    name: 'dashboard-solvency',
    component: () => import('@/views/dashboards/solvency/Solvency.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dashboards/liquidity',
    name: 'dashboard-liquidity',
    component: () => import('@/views/dashboards/liquidity/Liquidity.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dashboards/utilization',
    name: 'dashboard-utilization',
    component: () => import('@/views/dashboards/utilization/Utilization.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dashboards/efficiency',
    name: 'dashboard-efficiency',
    component: () => import('@/views/dashboards/efficiency/Efficiency.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dataInput/dataEntry',
    name: 'dashboard-dataEntry',
    component: () => import('@/views/dataInput/dataEntry/dataEntry.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dataInput/incomeStatementHistory',
    name: 'dashboard-incomeStatementHistory',
    component: () => import('@/views/dataInput/incomeStatementHistory.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dataInput/balanceSheetHistory',
    name: 'dashboard-balanceSheetHistory',
    component: () => import('@/views/dataInput/balanceSheetHistory.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dataInput/financialNotesHistory',
    name: 'dashboard-financialNotesHistory',
    component: () => import('@/views/dataInput/financialNotesHistory.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dataInput/metricsThreshold',
    name: 'dashboard-metricsThreshold',
    component: () => import('@/views/dataInput/metricsThreshold.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default dashboard
