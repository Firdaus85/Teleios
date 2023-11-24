<template>
  <v-row class="match-height">
    <!-- bar chart -->
   

    <!-- horizontal bar chart -->
    <v-col
      cols="12"
      md="6"
    >
      <DefensiveLineAreaChart />
    </v-col>

    <!-- line chart -->
    <v-col cols="12" md="6">
      <QuickLineAreaChart />
    </v-col>

    <!-- radar chart -->
    <v-col
      cols="12"
      md="6"
    >
      <CurrentLineAreaChart />
    </v-col>

    <!-- polar chart -->
    <v-col
      cols="12"
      md="6"
    >
      <CashLineAreaChart />
    </v-col>

    
  </v-row>
</template>
<script>
import CashLineAreaChart from './CashLineAreaChart.vue'
import ChartjsBarChart from './ChartjsBarChart.vue'
import ChartjsBubbleChart from './ChartjsBubbleChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsLineAreaChart from './ChartjsLineAreaChart.vue'
import ChartjsLineChart from './ChartjsLineChart.vue'
import ChartjsPolarAreaChart from './ChartjsPolarAreaChart.vue'
import ChartjsRadarChart from './ChartjsRadarChart.vue'
import ChartjsScatterChart from './ChartjsScatterChart.vue'
import CurrentLineAreaChart from './CurrentLineAreaChart.vue'
import DefensiveLineAreaChart from './DefensiveLineAreaChart.vue'
import QuickLineAreaChart from './QuickLineAreaChart.vue'


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
    DefensiveLineAreaChart,
    QuickLineAreaChart,
    CurrentLineAreaChart,
    CashLineAreaChart
  },
}
</script>
