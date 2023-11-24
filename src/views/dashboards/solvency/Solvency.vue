<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
     <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiCashUsd }}
        </v-icon>
           Solvency
          </v-card-title>
          </v-card>
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
import StatisticsCardVertical from '@/@core/components/statistics-card/StatisticsCardVertical.vue'
import StatisticsCardProfitLineChart from '@core/components/statistics-card/StatisticsCardProfitLineChart.vue'
import StatisticsCardSessionBarChart from '@core/components/statistics-card/StatisticsCardSessionBarChart.vue'
import { mdiCashUsd, mdiLabelVariantOutline, mdiPoll } from '@mdi/js'

// demos
import AnalyticsCardDepositAndWithdraw from './AnalyticsCardDepositAndWithdraw.vue'
import AnalyticsCardSalesByCountries from './AnalyticsCardSalesByCountries.vue'
import AnalyticsCardTotalEarning from './AnalyticsCardTotalEarning.vue'
import AnalyticsCongratulationJohn from './AnalyticsCongratulationJohn.vue'
import AnalyticsPerformance from './AnalyticsPerformance.vue'
import AnalyticsStatisticsCard from './AnalyticsStatisticsCard.vue'
import AnalyticsUserTable from './AnalyticsUserTable.vue'
import AnalyticsWeeklyOverview from './AnalyticsWeeklyOverview.vue'
import Charts from './chartjs/Chartjs.vue'
import Opinion from './simple-table/Opinion.vue'
import SimpleTable from './simple-table/SimpleTable.vue'

export default {
  components: {
    StatisticsCardProfitLineChart,
    StatisticsCardVertical,
    StatisticsCardSessionBarChart,
    AnalyticsCongratulationJohn,
    AnalyticsStatisticsCard,
    AnalyticsCardTotalEarning,
    AnalyticsPerformance,
    AnalyticsCardDepositAndWithdraw,
    AnalyticsCardSalesByCountries,
    AnalyticsUserTable,
    AnalyticsWeeklyOverview,
    SimpleTable,
    Opinion,
    Charts

  },
  setup() {
    const profitLineChart = {
      statTitle: 'Total Profit',
      statistics: '$86.4k',
      series: [
        {
          data: [0, 20, 5, 30, 15, 45],
        },
      ],
    }

    const totalProfitOptions = {
      statTitle: 'Total Profit',
      icon: mdiPoll,
      color: 'secondary',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%',
    }

    // vertical card options
    const newProjectOptions = {
      statTitle: 'New Project',
      icon: mdiLabelVariantOutline,
      color: 'primary',
      subtitle: 'Yearly Project',
      statistics: '862',
      change: '-18%',
    }

    const sessionBarChart = {
      statTitle: 'Sessions',
      statistics: '2,856',
      series: [
        {
          name: '2020',
          data: [45, 85, 65, 50, 70],
        },
      ],
    }

    return {
      profitLineChart,
      totalProfitOptions,
      newProjectOptions,
      sessionBarChart,
      icons: {
          
          mdiCashUsd,
          
        },
    }
  },
}
</script>

<style scoped>
.v-card__title {
    gap: 5px;
    margin-bottom: 10px;
}
</style>