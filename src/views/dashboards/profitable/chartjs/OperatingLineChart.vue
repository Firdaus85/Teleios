<template>
  <v-card>
    <v-card-title>
      Operating Margin Graph(%)
    </v-card-title>
    <v-card-subtitle></v-card-subtitle>

    <!-- chart -->
    <v-card-text>
      <chartjs-component-line-chart
        :height="300"
        :data="chartjsData.OperatingChart.data"
        :options="chartjsData.OperatingChart.options"
        :plugins="plugins"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import chartjsData from './chartjsData'
import ChartjsComponentLineChart from './charts-components/ChartjsComponentLineChart.vue'

export default {
  components: {
    ChartjsComponentLineChart,
  },
  setup() {
    const plugins = [
      // to add spacing between legends and chart
      {
        beforeInit(chart) {
          /* eslint-disable func-names, no-param-reassign */
          chart.legend.afterFit = function () {
            this.height += 20
          }
          /* eslint-enable */
        },
      },
    ]

    return {
      plugins,
      chartjsData,
    }
  },
}
</script>
