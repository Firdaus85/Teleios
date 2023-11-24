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
        description: 'Dept Ratio',
        dec: 0.08,
        feb: 0.15,
        apr: 0.13,
        decs: 0.05,
      },
      {
        description: 'Dept to Equity',
        dec: 1.5,
        feb: 1.05,
        apr: 1,
        decs: 1,
      },
      {
        description: 'Financial Coverage',
        dec: 18,
        feb: 6.79,
        apr: 8,
        decs: 19.2,
      },
      {
        description: 'Interest Cover',
        dec: 0.04,
        feb: 60.64,
        apr: 25.83,
        decs: 0.9,
      }
      ,
      {
        description: 'Interest Burden',
        dec: 0.04,
        feb: 0.99,
        apr:-0.27,
        decs: -9.23,
      }
      ,
      {
        description: 'Average Coverage Ratio',
        dec: 2,
        feb: 1.78,
        apr: 3,
        decs: 6.2,
      }
      ,
      {
        description: 'Cashflow Coverage Ratio',
        dec: 2.67,
        feb: 63.36,
        apr: 147.33,
        decs: 81.2,
      }
    ]

    return {
      Metrics,
    }
  },
}
</script>
