<template>
  <v-row>
    <v-col>
  <vue-apex-charts
    type="radialBar"
    height="350"
    :options="apexChatData.capex.chartOptions"
    :series="apexChatData.capex.series"
  />
  </v-col>
  <v-col>
  <vue-apex-charts
    type="radialBar"
    height="350"
    :options="apexChatData.productiveAsset.chartOptions"
    :series="apexChatData.productiveAsset.series"
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
