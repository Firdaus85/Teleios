<template>
   
      
  
      
      <v-row>
        <v-col>
  <!-- Chart -->
  <v-card-title class="text-center">
        <span class="text-sm font-weight-semibold"> Bankruptcy Predictor Chart</span> 
      </v-card-title>
  <v-col class="text-center ">
        <vue-apex-charts
        id="total-revenue-chart"
        height="250"
        :options="chartOptions"
        :series="chartData"
      ></vue-apex-charts>
          <v-card-text class="text-no-wrap mt-12">
          
          <v-icon
            size="20"
            color="success"
          >
            {{ icons.mdiChevronUp }}
          </v-icon>
          <span class="success--text text-xs font-weight-semibold">85.6%</span>
          </v-card-text>
      </v-col>
        </v-col>
        
        
      </v-row>
      
  
  
      
 
  </template>
  
  <script>
  import VueApexCharts from 'vue-apexcharts'
  // eslint-disable-next-line object-curly-newline
  import { mdiChevronUp, mdiDotsVertical } from '@mdi/js'
  
  import { getVuetify } from '@core/utils'
import { kFormatter } from '@core/utils/filter'
  
  export default {
    components: {
      VueApexCharts,
    },
    setup() {
      const $vuetify = getVuetify()
  
      const chartOptions = {
        colors: [$vuetify.theme.currentTheme.error],
        chart: {
          type: 'radialBar',
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              size: '55%',
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -5,
                fontSize: '24px',
                fontWeight: 600,
                formatter(val) {
                  return `${kFormatter((val * 35250) / 100, 1)}`
                },
              },
            },
          },
        },
        stroke: {
          dashArray: 5,
        },
      }
  
      const chartData = [80]
  
      return {
        chartOptions,
        chartData,
  
        icons: {
          mdiDotsVertical,
          mdiChevronUp
        },
      }
    },
  }
  </script>
  

  <style scoped>
.v-card .v-card__title {
    line-height: 1;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
}
</style>