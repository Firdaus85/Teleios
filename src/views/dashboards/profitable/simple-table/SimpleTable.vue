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
        description: 'Operating Margin',
        dec: '0.1%',
        feb:'0.84%',
        apr: '0.62%',
        decs: '0.33%',
      },
      {
        description: 'Gross Margin',
        dec: '0%',
        feb: '0%',
        apr: '0%',
        decs: '0.51%',
      },
      {
        description: 'Net Margin',
        dec: '0%',
        feb: '0%',
        apr: '0%',
        decs: '-0.04%',
      },
      {
        description: 'Revenue Growth',
        dec: '1.02%',
        feb: '1%',
        apr: '1%',
        decs: '1%',
      }
      ,
      {
        description: 'Earnings Growth',
        dec: '0%',
        feb: '0%',
        apr:'10%',
        decs: '0.98%',
      }
     
    ]

    return {
      Metrics,
    }
  },
}
</script>
