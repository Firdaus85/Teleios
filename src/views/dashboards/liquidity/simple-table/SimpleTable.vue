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
        description: 'Current Ratio',
        dec: 0.01,
        feb: 2.23,
        apr: 1.25,
        decs: 1.25,
      },
      {
        description: 'Quick Ratio',
        dec: 0.01,
        feb: 1.62,
        apr: 1,
        decs: 1,
      },
      {
        description: 'Cash Ratio',
        dec: 0,
        feb: 0.5,
        apr: 0.25,
        decs: 0.25,
      },
      {
        description: 'Defensive Interval',
        dec: -3650,
        feb: -323.19,
        apr: 165.91,
        decs: -43.25,
      }
    ]

    return {
      Metrics,
    }
  },
}
</script>
