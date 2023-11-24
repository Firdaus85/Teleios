<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
    <v-card-title>
             <v-icon size="22">
          {{ icons.mdiBank }}
        </v-icon>
            Working Capital
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
// eslint-disable-next-line object-curly-newline
import StatisticsCardVertical from '@/@core/components/statistics-card/StatisticsCardVertical.vue';
import StatisticsCardLineChart from '@core/components/statistics-card/StatisticsCardLineChart.vue';
import StatisticsCardRadialBarChart from '@core/components/statistics-card/StatisticsCardRadialBarChart.vue';
import { mdiBank } from '@mdi/js';

// demos
import EcommerceCardMeetingSchedule from './EcommerceCardMeetingSchedule.vue';
import EcommerceCardTransaction from './EcommerceCardTransaction.vue';
import EcommerceCardWebsiteStatistics from './EcommerceCardWebsiteStatistics.vue';
import EcommerceCongratulationJohn from './EcommerceCongratulationJohn.vue';
import EcommerceNewVisitorChart from './EcommerceNewVisitorChart.vue';
import EcommerceStatisticsTotalSales from './EcommerceStatisticsTotalSales.vue';
import EcommerceTotalProfit from './EcommerceTotalProfit.vue';
import EcommerceUserTable from './EcommerceUserTable.vue';
import Chart from './chartjs/Chartjs.vue';
import Opinion from './simple-table/Opinion.vue';
import SimpleTable from './simple-table/SimpleTable.vue';

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
    Chart,
  },
  setup() {
     return {
        icons: {
          
          mdiBank,
          
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