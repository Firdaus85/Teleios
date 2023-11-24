<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
      class="align-self-end"
    >
    <v-card-title >
             <v-icon size="22">
          {{ icons.mdiRadar }}
        </v-icon>
            Investment Metrics
          </v-card-title>
      <SimpleTable />
    </v-col>
    

    <v-col
      cols="12"
      md="12"
    >
      <Charts />
    </v-col>
    <v-col
      cols="12"
      md="12"
    >
      <Opinion />
    </v-col>
  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import StatisticsCardVertical from '@/@core/components/statistics-card/StatisticsCardVertical.vue'
import StatisticsCardLineChart from '@core/components/statistics-card/StatisticsCardLineChart.vue'
import StatisticsCardRadialBarChart from '@core/components/statistics-card/StatisticsCardRadialBarChart.vue'
import { mdiChartTimelineVariant, mdiCheck, mdiCurrencyUsd, mdiRadar, mdiTrendingUp } from '@mdi/js'

// demos
import EcommerceCardMeetingSchedule from './EcommerceCardMeetingSchedule.vue'
import EcommerceCardTransaction from './EcommerceCardTransaction.vue'
import EcommerceCardWebsiteStatistics from './EcommerceCardWebsiteStatistics.vue'
import EcommerceCongratulationJohn from './EcommerceCongratulationJohn.vue'
import EcommerceNewVisitorChart from './EcommerceNewVisitorChart.vue'
import EcommerceStatisticsTotalSales from './EcommerceStatisticsTotalSales.vue'
import EcommerceTotalProfit from './EcommerceTotalProfit.vue'
import EcommerceUserTable from './EcommerceUserTable.vue'
import Charts from './chartjs/Chartjs.vue'
import Opinion from './simple-table/Opinion.vue'
import SimpleTable from './simple-table/SimpleTable.vue'

export default {
  components: {
    StatisticsCardVertical,
    StatisticsCardLineChart,
    StatisticsCardRadialBarChart,
    EcommerceCongratulationJohn,
    EcommerceTotalProfit,
    EcommerceStatisticsTotalSales,
    EcommerceCardTransaction,
    EcommerceNewVisitorChart,
    EcommerceCardWebsiteStatistics,
    EcommerceUserTable,
    EcommerceCardMeetingSchedule,
    SimpleTable,
    Opinion,
    Charts
  },
  setup() {
    const transactionsOptions = {
      statTitle: 'Transactions',
      icon: mdiTrendingUp,
      color: 'info',
      subtitle: 'Daily Transactions',
      statistics: '1.2k',
      change: '+12%',
    }
    const revenueOptions = {
      statTitle: 'Revenue',
      icon: mdiCurrencyUsd,
      color: 'success',
      subtitle: 'Revenue Increase',
      statistics: '$95.2k',
      change: '+12%',
    }

    const revenueLineChart = {
      statTitle: 'Total Revenue',
      statistics: '$35.4k',
      series: [
        {
          data: [28, 58, 40, 68],
        },
      ],
    }

    const salesRadialChart = {
      statTitle: 'Total Sales',
      statistics: '135k',
      series: [78],
    }

    const logisticsOptions = {
      statTitle: 'Logistics',
      icon: mdiChartTimelineVariant,
      color: 'error',
      subtitle: 'Revenue Increase',
      statistics: '44.1k',
      change: '+12%',
    }

    const reportsOptions = {
      statTitle: 'Reports',
      icon: mdiCheck,
      color: 'warning',
      subtitle: 'System Bugs',
      statistics: '268',
      change: '-8%',
    }

    return {
      transactionsOptions,
      revenueOptions,
      revenueLineChart,
      salesRadialChart,
      logisticsOptions,
      reportsOptions,
              icons: {
          
mdiRadar          
        },
    }
  },
}
</script>


<style >
.v-card__title {
    gap: 5px;
}
</style>