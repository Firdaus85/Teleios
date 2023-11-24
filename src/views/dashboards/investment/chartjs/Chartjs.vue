<template>
  <v-row class="match-height">
    <!-- bar chart -->
    

    <!-- line chart -->
    <v-col cols="12">
      <chartjs-line-chart></chartjs-line-chart>
    </v-col>

    <v-col cols="12" md="6">
      <EmployedLineChart />
    </v-col>
    <v-col cols="12" md="6">
      <EquityLineAreaChart />
    </v-col>
    

   

    <!-- data science -->
    <v-col cols="12" md="6">
      <InvestedLineAreaChart />
    </v-col>
    <v-col cols="12" md="6">
      <InvestmentLineChart />
    </v-col>
  </v-row>
</template>
<script>
import ChartjsBarChart from './ChartjsBarChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsLineChart from './ChartjsLineChart.vue'
import EmployedLineChart from './EmployedLineChart.vue'
import InvestedLineAreaChart from './InvestedLineAreaChart.vue'
import InvestmentLineChart from './InvestmentLineChart.vue'
import ChartjsRadarChart from './ChartjsRadarChart.vue'
import ChartjsPolarAreaChart from './ChartjsPolarAreaChart.vue'
import ChartjsBubbleChart from './ChartjsBubbleChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsScatterChart from './ChartjsScatterChart.vue'
import ChartjsLineAreaChart from './ChartjsLineAreaChart.vue'
import EquityLineAreaChart from './EquityLineAreaChart.vue'

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
    EmployedLineChart,
    EquityLineAreaChart,
    InvestedLineAreaChart,
    InvestmentLineChart

  },
}
</script>
import ChartjsBarChart from './ChartjsBarChart.vue'
import ChartjsBubbleChart from './ChartjsBubbleChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsBarChart from './ChartjsBarChart.vue'
import ChartjsBubbleChart from './ChartjsBubbleChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsLineAreaChart from './ChartjsLineAreaChart.vue'
import ChartjsLineChart from './ChartjsLineChart.vue'
import ChartjsPolarAreaChart from './ChartjsPolarAreaChart.vue'
import ChartjsRadarChart from './ChartjsRadarChart.vue'
import ChartjsScatterChart from './ChartjsScatterChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsLineAreaChart from './ChartjsLineAreaChart.vue'
import ChartjsLineChart from './ChartjsLineChart.vue'
import ChartjsPolarAreaChart from './ChartjsPolarAreaChart.vue'
import ChartjsRadarChart from './ChartjsRadarChart.vue'
import ChartjsScatterChart from './ChartjsScatterChart.vue'
