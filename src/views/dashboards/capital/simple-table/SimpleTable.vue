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
        description: 'Inventory Days',
        dec: '-0.2%',
        feb:'-0.22%',
        apr: '-0.02%',
        decs: '-0.01%',
      },
      {
        description: 'Payable Days',
        dec: '-72%',
        feb: '-32.99%',
        apr: '-5.4%',
        decs: '-3.04%',
      },
      {
        description: 'Receivable Days',
        dec: '14.4%',
        feb: '1.34%',
        apr: '2.16%',
        decs: '1.49%',
      },
      {
        description: 'Operating Cycle',
        dec: '14.2%',
        feb: '1.12%',
        apr: '2.15%',
        decs: '1.49%',
      }
      ,
      {
        description: 'Cash Conversion Cycle',
        dec: '86.2%',
        feb: '34.11%',
        apr:'7.55%',
        decs: '-4.52%',
      }
     
    ]

    return {
      Metrics,
    }
  },
}
</script>
