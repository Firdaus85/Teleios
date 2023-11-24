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
          v-for="item in metrics"
          :key="item.metric"
        >
          <td>{{ item.Description }}</td>
          <td class="text-center">
            {{ item.Dec }}
          </td>
          <td class="text-center">
            {{ item.Feb }}
          </td>
          <td class="text-center">
            {{ item.Apr }}
          </td>
          <td class="text-center">
            {{ item.Decs }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const metrics = [
      {
        Description: 'Asset Turnover',
        Dec: 1.39,
        Feb: 11.07,
        Apr: 20.83,
        Decs: 12.55,
      },
      {
        Description: 'Inventory Turnover',
        Dec: 5,
        Feb: 4.56,
        Apr: 66.67,
        Decs: 118.6,
      },
      {
        Description: 'Working Capital Turnover',
        Dec: -0.05,
        Feb: 29.12,
        Apr: 166.67,
        Decs: 241,
      }
    ]

    return {
      metrics,
    }
  },
}
</script>
