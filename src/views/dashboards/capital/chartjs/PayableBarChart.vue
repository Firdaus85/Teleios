<template>
  <v-card>
    <v-card-title>
      <span>Payable Days Graph(%)</span>
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
        :data="chartjsData.PayableChart.data"
        :options="chartjsData.PayableChart.options"
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
