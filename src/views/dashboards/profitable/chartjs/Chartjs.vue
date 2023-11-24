<template>
  <v-row class="match-height">
    

    
    <v-col cols="12">
      <GrossLineAreaChart />
    </v-col>
    <v-col cols="12" md="6">
      <NetLineAreaChart />
    </v-col>
    <v-col cols="12" md="6">
      <EarningsLineAreaChart />
    </v-col>
    <v-col cols="12" md="6">
      <RevenueLineChart />
    </v-col>
    <v-col cols="12" md="6">
      <OperatingLineChart />
    </v-col>
  </v-row>
</template>
<script>
import ChartjsBarChart from './ChartjsBarChart.vue'
import ChartjsBubbleChart from './ChartjsBubbleChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsLineAreaChart from './ChartjsLineAreaChart.vue'
import ChartjsLineChart from './ChartjsLineChart.vue'
import ChartjsPolarAreaChart from './ChartjsPolarAreaChart.vue'
import ChartjsRadarChart from './ChartjsRadarChart.vue'
import ChartjsScatterChart from './ChartjsScatterChart.vue'
import EarningsLineAreaChart from './EarningsLineAreaChart.vue'
import GrossLineAreaChart from './GrossLineAreaChart.vue'
import NetLineAreaChart from './NetLineAreaChart.vue'
import OperatingLineChart from './OperatingLineChart.vue'
import RevenueLineChart from './RevenueLineChart.vue'

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
    GrossLineAreaChart,
    NetLineAreaChart,
    EarningsLineAreaChart,
    RevenueLineChart,
    OperatingLineChart
  },
}
</script>
