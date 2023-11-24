<template>
  <v-row>
    <v-col>
      <v-card-title class="text-center">
        <span class="text-sm font-weight-semibold"> Economic Value Added</span> 
      </v-card-title>
      <vue-apex-charts
        type="radialBar"
        height="350"
        :series="apexChartData.EconomicValueAdded.series"
        :options="apexChartData.EconomicValueAdded.chartOptions"
      />
    </v-col>
    <v-col>
      <v-card-title class="text-center">
        <span class="text-sm font-weight-semibold"> Value Created Rate</span> 
      </v-card-title>
      <vue-apex-charts
        type="radialBar"
        height="350"
        :series="apexChartData.valueCreatedRate.series"
        :options="apexChartData.valueCreatedRate.chartOptions"
      />
    </v-col>
    <v-col>
      <v-card-title class="text-center">
        <span class="text-sm font-weight-semibold"> Sustainable Growth Rate</span> 
      </v-card-title>
      <vue-apex-charts
        type="radialBar"
        height="350"
        :series="apexChartData.sustainableGrowthRate.series"
        :options="apexChartData.sustainableGrowthRate.chartOptions"
      />
    </v-col>
  </v-row>
</template>
<script>
import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';
import apexChartData from './apexChartData';

export default {
  components: {
    VueApexCharts,
  },
  props: {
    filteredData: {
      type: Array,
      default: () => [],
    },
  },
  
  computed: {
    healthAndSustainabilityData() {
      // Access the 'health-and-sustainability' data from the prop
      return this.filteredData['health-and-sustainability'] || [];
    },
  },
  data() {
    return {
      apexChartData,
      filteredDataRef: Vue.observable([]),
    };
  },
  methods: {
    // Function to update series data
    updateChartData(data) {
      // Check if there is filtered data
      if (data.length > 0) {
        // Assuming you have new data for each series
        const economicValueAddedSeries = data.map(item => parseFloat(item.economic_value_added));
        const valueCreatedRateSeries = data.map(item => parseFloat(item.value_creation_rate));
        const sustainableGrowthRateSeries = data.map(item => parseFloat(item.sustainable_growth_rate));

        Vue.set(apexChartData.EconomicValueAdded, 'series', economicValueAddedSeries);
        Vue.set(apexChartData.valueCreatedRate, 'series', valueCreatedRateSeries);
        Vue.set(apexChartData.sustainableGrowthRate, 'series', sustainableGrowthRateSeries);

        // Update labels if needed
        Vue.set(apexChartData.EconomicValueAdded.chartOptions, 'labels',economicValueAddedSeries);
        Vue.set(apexChartData.valueCreatedRate.chartOptions, 'labels', valueCreatedRateSeries);
        Vue.set(apexChartData.sustainableGrowthRate.chartOptions, 'labels',sustainableGrowthRateSeries);
      }
    },
  },
  watch: {
    // Watch for changes in filteredData and update the chart accordingly
    filteredData: 'updateChartData',
  },
  mounted() {
    // Update the chart data when the component is mounted
    this.updateChartData(this.healthAndSustainabilityData);
    // Log series values to the console
    console.log('EconomicValueAdded Series:', this.apexChartData.EconomicValueAdded.series);
    console.log('valueCreatedRate Series:', this.apexChartData.valueCreatedRate.series);
    console.log('sustainableGrowthRate Series:', this.apexChartData.sustainableGrowthRate.series);
    console.log('sustainableGrowthRate Labels:', this.apexChartData.sustainableGrowthRate.chartOptions.labels);
    console.log('EconomicValueAdded Labels:', this.apexChartData.EconomicValueAdded.chartOptions.labels);
    console.log('valueCreatedRate Labels:', this.apexChartData.valueCreatedRate.chartOptions.labels);
  },
};
</script>

<style scoped>
.v-card .v-card__title {
    line-height: 1;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
}
</style>