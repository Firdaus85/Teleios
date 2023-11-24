<template>
  <vue-apex-charts
    type="donut"
    height="350"
    :options="apexChatData.productiveAsset.chartOptions"
    :series="apexChatData.productiveAsset.series"
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
