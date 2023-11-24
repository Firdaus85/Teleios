<template>
  <vue-apex-charts
    type="radialBar"
    height="350"
  
 :series="apexChatData.profitabilitiesMetrics.series" 
   :options="apexChatData.profitabilitiesMetrics.chartOptions"
  />
 

 

 
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import apexChatData from './apexChartData';

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    return {
      apexChatData,
    }
  },
}
</script>

