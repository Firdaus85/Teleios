<template>
  <v-card>
    <v-card-title>
      <span>Gross Margin Graph(%)</span>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-icon size="18">
          {{ mdiCalendarBlankOutline }}
        </v-icon>
        <span class="subtitle-2 ms-2">2015 to 2018</span>
      </div>
    </v-card-title>

    <!-- chart -->
    <v-card-text>
      <chartjs-component-bar-chart
        :height="300"
        :data="chartjsData.latestBarChart.data"
        :options="chartjsData.latestBarChart.options"
        :plugins="plugins"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiCalendarBlankOutline } from '@mdi/js'
import chartjsData from './chartjsData'
import ChartjsComponentBarChart from './charts-components/ChartjsComponentBarChart.vue'

export default {
  components: {
    ChartjsComponentBarChart,
  },
  setup() {
    const plugins = [
      // to add spacing between legends and chart
      {
        beforeInit(chart) {
          /* eslint-disable func-names, no-param-reassign */
          chart.legend.afterFit = function () {
            this.height += 25
          }
          /* eslint-enable */
        },
      },
    ]

    return {
      plugins,
      chartjsData,
      mdiCalendarBlankOutline,
    }
  },
}
</script>
