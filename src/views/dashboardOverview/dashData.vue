<template>
  <div>
    <data-component
      v-for="metric in metrics"
      :key="metric.name"
      :metric="metric.name"
      :chartOptions="metric.chartOptions"
      :chartData="metric.chartData"
      :profitPercentage="metric.profitPercentage"
      :metricData="metric.metricData"
    />
  </div>
</template>

<script>
import DataComponent from '@/components/Data.vue';

export default {
  components: {
    DataComponent,
  },
  data() {
    return {
      metrics: [
        {
          name: 'Profitability',
          chartOptions: {
            // ... your options
            chart: {
        height: 350,
        type: 'radialBar',
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        padding: {
          left: 60,
          right: 60,
        },
      },
      stroke: {
        lineCap: 'round',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 90],
          colorStops: [],
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -180,
          endAngle: 180,
          inverseOrder: true,
          hollow: {
            size: '62%',
          },
          dataLabels: {
            name: {
              offsetY: 26,
            },
            value: {
              fontSize: '2.125rem',

              // ! This isn't working???
              fontWeight: 600,
              offsetY: -14,
              formatter(value) {
                return `${value}k`
              },
            },
            total: {
              show: true,
              label: 'Growth',
              fontSize: '14px',
            },
          },
        },
      },
      labels: ['Cricket'],
          },
          chartData: [78],
          profitPercentage: '10%',
          metricData: {
            'Return on assets': '20%',
            'Return on investment': '40%',
          },
        },
        // ... other metrics
      ],
    }
  },
}
</script>
