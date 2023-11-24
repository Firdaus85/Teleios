<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            Description
          </th>
          <th class="text-center text-uppercase">
            Dec-15 
          </th>
          <th class="text-center text-uppercase">
            Feb-15 
          </th>
          <th class="text-center text-uppercase">
            Apr-17 
          </th>
          <th class="text-center text-uppercase">
            Dec-18 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in Metrics"
          :key="item.Metric"
        >
          <td>{{ item.description }}</td>
          <td class="text-center">
            {{ item.dec }}
          </td>
          <td class="text-center">
            {{ item.feb }}
          </td>
          <td class="text-center">
            {{ item.apr }}
          </td>
          <td class="text-center">
            {{ item.decs }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const Metrics = [
      {
        description: 'Capex Ratio',
        dec: 0.14,
        feb: 0.2,
        apr: 5582.74,
        decs: 0.14,
      },
      {
        description: 'Asset Depretiation Ratio',
        dec: 1,
        feb: 0.36,
        apr: 0.61,
        decs: 1,
      },
      {
        description: 'Productive Asset Investment Ratio',
        dec: 0.25,
        feb: 0.2,
        apr: 10126.84,
        decs: 0.25,
      },
      {
        description: 'Non Current Total Asset Ratio',
        dec: 0.72,
        feb: 0.31,
        apr: 0.38,
        decs: 0.74,
      }
    ]

    return {
      Metrics,
    }
  },
}
</script>
