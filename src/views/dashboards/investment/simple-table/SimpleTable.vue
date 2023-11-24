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
        description: 'Return on Assets',
        dec: '0%',
        feb:'0%',
        apr: '0%',
        decs: '-0.54%',
      },
      {
        description: 'Return on Equity',
        dec: '0%',
        feb: '0%',
        apr: '0%',
        decs: '-10.4%',
      },
      {
        description: 'Return on Capital Employed',
        dec: '1%',
        feb: '31.01%',
        apr: '51.67%',
        decs: '39.7%',
      },
      {
        description: 'Return on Capital Invested',
        dec: '1.6%',
        feb: '32.4%',
        apr: '73.67%',
        decs: '4.14%',
      }
      ,
      {
        description: 'Return on Investment',
        dec: '0.14%',
        feb: '9.35%',
        apr:'12.92%',
        decs: '4.14%',
      }
     
    ]

    return {
      Metrics,
    }
  },
}
</script>
