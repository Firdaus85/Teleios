<template>
  <vue-apex-charts
    type="donut"
    height="350"
    :options="apexChatData.cashflowCoverage.chartOptions"
    :series="apexChatData.cashflowCoverage.series"
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
