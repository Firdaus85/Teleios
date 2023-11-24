<template>
  <v-row>
    <v-col>
  <vue-apex-charts
    type="radialBar"
    height="300"
    :options="apexChatData.debtRatio.chartOptions"
    :series="apexChatData.debtRatio.series"
  />
</v-col>
  <v-col>
   <vue-apex-charts
    type="radialBar"
    height="300"
    :options="apexChatData.assetCoverage.chartOptions"
    :series="apexChatData.assetCoverage.series"
  />
  </v-col>
  <v-col>
   <vue-apex-charts
    type="radialBar"
    height="300"
    :options="apexChatData.cashflowCoverage.chartOptions"
    :series="apexChatData.cashflowCoverage.series"
  />
  </v-col>
  </v-row>
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
