<template>
  <v-form class="multi-col-validation">
    <v-col cols="12">
      <v-text-field
        v-model="userData.year"
        @change="extractYear"
        label="Year"
        type="number"
        step="1"
        min="1900" max="2099"
        outlined
        dense
        hide-details="auto"
        :rules="[validators.required]"
        placeholder="Year"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="12">
      <v-select
        v-model="userData.month"
        :items="months.map((month, index) => ({ text: month.name, value: index + 1 }))"
        :menu-props="['offset-y']"
        label="Month"
        dense
        hide-details="auto"
        outlined
      ></v-select>
    </v-col>
    <v-col class="bn">
      <v-btn color="primary" @click="submitForm">
        Filter
      </v-btn>
    </v-col>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        year: null,
        month: null,
      },
      originalData: {},

      filteredData: {
        'health-and-sustainability': [],
        'bankruptcy': [],
        'liquidity': [],
      },
      months: [
        { name: 'January' },
        { name: 'February' },
        { name: 'March' },
        { name: 'April' },
        { name: 'May' },
        { name: 'June' },
        { name: 'July' },
        { name: 'August' },
        { name: 'September' },
        { name: 'October' },
        { name: 'November' },
        { name: 'December' },
      ],
      validators: {
        required: (value) => !!value || 'This field is required',
      },
    };
  },
  methods: {
    extractYear() {
      // Add any additional logic for year extraction if needed
    },

    async fetchData(endpoint) {
      const apiUrl = `https://teleiosapi.panoramicspace.com/api/metrics/${endpoint}`;

      try {
        const bearerToken = localStorage.getItem('accessToken');

        if (!bearerToken) {
          throw new Error('Bearer token is missing in local storage.');
        }

        const response = await fetch(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(`Fetched Data for ${endpoint}:`, responseData);

        this.$set(this.originalData, endpoint, responseData);
      } catch (error) {
        console.error(`Error fetching data for ${endpoint}:`, error);
      }
    },

    async submitForm() {
      const endpoints = ['health-and-sustainability', 'bankruptcy', 'liquidity'];

      for (const endpoint of endpoints) {
        if (!this.originalData[endpoint] || this.originalData[endpoint].length === 0) {
          await this.fetchData(endpoint);
        }

        const { year, month } = this.userData;
        const selectedYear = parseInt(year, 10);
        const selectedMonth = parseInt(month, 10);

        const filteredData = this.originalData[endpoint].data.filter(item => {
          const match = item.year === selectedYear && item.month === selectedMonth;
          return match;
        });

        console.log(`Filtered Data for ${endpoint}:`, filteredData);

        // Update the filteredData object with the filtered data for each endpoint
        this.$set(this.filteredData, endpoint, filteredData);

        // Emit an event to notify the parent or other components about the filtered data
        this.$emit(`updateChartData-${endpoint}`, filteredData);

        // Inside submitForm method in the filter button component
this.$emit(`updateChartData-${endpoint}`, { data: filteredData, endpoint });

      }
    },
  },
};
</script>

<style scoped>
.bn {
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
