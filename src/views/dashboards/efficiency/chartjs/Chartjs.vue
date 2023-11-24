<template>
  <v-row class="match-height">
  
   


    <v-col
      cols="12"
      md="6"
    >
      <AssetLineAreaChart />
    </v-col>

    


    <v-col
      cols="12"
      md="6"
    >
      <InventoryLineAreaChart />
    </v-col>


    <v-col
      cols="12"
      md="6"
    >
      <WorkingLineAreaChart />
    </v-col>

    
  </v-row>
</template>
<script>

import AssetLineAreaChart from './AssetLineAreaChart.vue'
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
import InventoryLineAreaChart from './InventoryLineAreaChart.vue'
import WorkingLineAreaChart from './WorkingLineAreaChart.vue'


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
    AssetLineAreaChart,
    CapexLineAreaChart,
    InventoryLineAreaChart,
    WorkingLineAreaChart
  },
}
</script>
