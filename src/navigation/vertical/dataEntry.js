import {
  mdiFileCheckOutline,
  mdiFileDocument,
  mdiFileDocumentEditOutline,
  mdiNoteMultiple,
  mdiRadar,
  mdiTextBoxMultipleOutline,
} from '@mdi/js'

export default [
  {
    title: 'Data Input',
    icon: mdiFileCheckOutline,
    badge: '5',
    badgeColor: 'warning',
    children: [
      {
        title: 'Data Entry',
        icon: mdiFileDocumentEditOutline,
        to: 'dashboard-dataEntry',
      },
      {
        title: 'Income Statement History',
        icon: mdiRadar,
        to: 'dashboard-incomeStatementHistory',
      },
      {
        title: 'Balance Sheet History',
        icon: mdiFileDocument,
        to: 'dashboard-balanceSheetHistory',
      },
      {
        title: 'Financial Notes History',
        icon: mdiNoteMultiple,
        to: 'dashboard-financialNotesHistory',
      },
      {
        title: 'Metrics Threshold',
        icon: mdiTextBoxMultipleOutline,
        to: 'dashboard-metricsThreshold',
      },
    ],
  },
]
