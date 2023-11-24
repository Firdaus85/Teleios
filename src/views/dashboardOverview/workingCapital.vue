<template>
  <vue-apex-charts
    type="radialBar"
    height="350"
    :options="apexChatData.workingCapital.chartOptions"
    :series="apexChatData.workingCapital.series"
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
