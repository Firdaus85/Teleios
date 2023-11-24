<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
     <v-card-title class="gap-10">
            <v-icon size="22">
          {{ icons.mdiCalendarOutline }}
        </v-icon>
            Profitabilities Metrics
          </v-card-title>
      <SimpleTable />
      </v-col>
      <v-col
      cols="12"
      md="12"
    >
      <Chart />
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

// demos
import { mdiCalendarOutline } from '@mdi/js'
import AnalyticsCardDepositAndWithdraw from './AnalyticsCardDepositAndWithdraw.vue'
import AnalyticsCardSalesByCountries from './AnalyticsCardSalesByCountries.vue'
import AnalyticsCardTotalEarning from './AnalyticsCardTotalEarning.vue'
import AnalyticsCongratulationJohn from './AnalyticsCongratulationJohn.vue'
import AnalyticsPerformance from './AnalyticsPerformance.vue'
import AnalyticsStatisticsCard from './AnalyticsStatisticsCard.vue'
import AnalyticsUserTable from './AnalyticsUserTable.vue'
import AnalyticsWeeklyOverview from './AnalyticsWeeklyOverview.vue'
import Chart from './chartjs/Chartjs.vue'
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
    Chart,
  },
  setup() {
     return {
        icons: {
          
          mdiCalendarOutline,
          
        },
      }
  },
}
</script>

<style scoped>
.v-card__title {
    gap: 5px;
}
</style>