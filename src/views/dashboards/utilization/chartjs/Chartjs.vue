<template>
  <v-row class="match-height">
    <!-- bar chart -->
   

    <!-- horizontal bar chart -->
    <v-col
      cols="12"
      md="6"
    >
      <NonLineAreaChart />
    </v-col>

    <!-- line chart -->
    <v-col cols="12" md="6">
      <CapexLineAreaChart />
    </v-col>

    <!-- radar chart -->
    <v-col
      cols="12"
      md="6"
    >
      <ProductiveLineAreaChart />
    </v-col>

    <!-- polar chart -->
    <v-col
      cols="12"
      md="6"
    >
      <DepreciationLineAreaChart />
    </v-col>

    
  </v-row>
</template>
<script>

import CapexLineAreaChart from './CapexLineAreaChart.vue'
import ChartjsBarChart from './ChartjsBarChart.vue'
import ChartjsBubbleChart from './ChartjsBubbleChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsLineAreaChart from './ChartjsLineAreaChart.vue'
import ChartjsLineChart from './ChartjsLineChart.vue'
import ChartjsPolarAreaChart from './ChartjsPolarAreaChart.vue'
import ChartjsRadarChart from './ChartjsRadarChart.vue'
import ChartjsScatterChart from './ChartjsScatterChart.vue'
import DepreciationLineAreaChart from './DepreciationLineAreaChart.vue'
import NonLineAreaChart from './NonLineAreaChart.vue'
import ProductiveLineAreaChart from './ProductiveLineAreaChart.vue'


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
    NonLineAreaChart,
    CapexLineAreaChart,
    ProductiveLineAreaChart,
    DepreciationLineAreaChart
  },
}
</script>
