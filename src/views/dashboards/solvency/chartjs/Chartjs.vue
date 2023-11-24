<template>
  <v-row class="match-height">

    

    <!-- data science -->
    <v-col cols="12">
      <chartjs-line-area-chart></chartjs-line-area-chart>
    </v-col>
    <v-col cols="12" md="6">
      <BurdenLineAreaChart />
    </v-col>
    <v-col cols="12" md="6">
      <AverageLineAreaChart />
    </v-col>
    <v-col cols="12" md="6">
      <CashflowLineAreaChart />
    </v-col>
    <v-col cols="12" md="6">
      <EquityLineAreaChart />
    </v-col>
    <v-col cols="12" md="6">
      <LeverageLineAreaChart />
    </v-col>
    <v-col cols="12" md="6">
      <CoverLineAreaChart />
    </v-col>
  </v-row>
</template>
<script>
import AverageLineAreaChart from './AverageLineAreaChart.vue'
import BurdenLineAreaChart from './BurdenLineAreaChart.vue'
import CashflowLineAreaChart from './CashflowLineAreaChart.vue'
import ChartjsBarChart from './ChartjsBarChart.vue'
import ChartjsBubbleChart from './ChartjsBubbleChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsLineAreaChart from './ChartjsLineAreaChart.vue'
import ChartjsLineChart from './ChartjsLineChart.vue'
import ChartjsPolarAreaChart from './ChartjsPolarAreaChart.vue'
import ChartjsRadarChart from './ChartjsRadarChart.vue'
import ChartjsScatterChart from './ChartjsScatterChart.vue'
import CoverLineAreaChart from './CoverLineAreaChart.vue'
import EquityLineAreaChart from './EquityLineAreaChart.vue'
import LeverageLineAreaChart from './LeverageLineAreaChart.vue'

export default {
  components: {
    ChartjsBarChart,
    ChartjsHorizontalBarChart,
    ChartjsLineChart,
    ChartjsRadarChart,
    ChartjsPolarAreaChart,
    ChartjsBubbleChart,
    ChartjsDoughnutChart,
    ChartjsScatterChart,
    ChartjsLineAreaChart,
    BurdenLineAreaChart,
    AverageLineAreaChart,
    CashflowLineAreaChart,
    EquityLineAreaChart,
    LeverageLineAreaChart,
    CoverLineAreaChart
  },
}
</script>
