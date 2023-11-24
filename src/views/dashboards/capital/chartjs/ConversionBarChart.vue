<template>
  <v-card>
    <v-card-title>
      <span>Cash Conversion Cycle Graph(%)</span>
      <v-spacer></v-spacer>
      <v-icon
        size="18"
        class="me-1"
      >
        {{ icons.mdiCalendarBlankOutline }}
      </v-icon>
      <span class="subtitle-2">2015 to 2018</span>
    </v-card-title>

    <!-- chart -->
    <v-card-text class="mt-5">
      <chartjs-component-bar-chart
        :height="300"
        :data="chartjsData.ConversionChart.data"
        :options="chartjsData.ConversionChart.options"
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
    return {
      chartjsData,
      icons: {
        mdiCalendarBlankOutline,
      },
    }
  },
}
</script>
