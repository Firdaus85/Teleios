import { mdiBank, mdiCalendarOutline, mdiCashCheck, mdiCashUsd, mdiLicense, mdiRadar, mdiSeal } from '@mdi/js'

export default [
  {
    title: 'Financial Metrics',
    icon: mdiBank,
    badge: '7',
    badgeColor: 'warning',

    children: [
      {
        title: 'Dashboard',
        icon: mdiCalendarOutline,
        to: 'dashboard-overview',
      },
      {
        title: 'Profitability Metrics',
        icon: mdiCalendarOutline,
        to: 'dashboard-profitable',
      },
      {
        title: 'Investment Metrics',
        icon: mdiRadar,
        to: 'dashboard-investment',
      },
      {
        title: 'Working Capital Metrics',
        icon: mdiBank,
        to: 'dashboard-capital',
      },
      {
        title: 'Solvency Metrics',
        icon: mdiCashUsd,
        to: 'dashboard-solvency',
      },
      {
        title: 'Liquidity Metrics',
        icon: mdiCashCheck,
        to: 'dashboard-liquidity',
      },
      {
        title: 'Asset Utilization Metrics',
        icon: mdiSeal,
        to: 'dashboard-utilization',
      },
      {
        title: 'Asset Efficiency Metrics',
        icon: mdiLicense,
        to: 'dashboard-efficiency',
      },
    ],
  },
]
