<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            Items
          </th>
          <th v-for="item in histories" :key="item.history" class="text-uppercase">
            {{ item.date }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-uppercase">Total Issued Shares</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.totalIssuedShares }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Dividends Paid</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.dividendsPaid }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Weighted Average Cost Capital</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.weightedAverageCostCapital }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Capital Expenditure (additions)</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.capitalExpenditure }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Depreciation</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.depreciation }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Accumulated Depreciation</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.accumulatedDepreciation }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Historical Cost Of Assets</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.historicalCostOfAssets }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Cash flow from Operations</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.cashflowFromOperations }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
export default {
  setup() {
    const histories = [
      {
        date: '12/01/2013',
        totalIssuedShares: 159,
        dividendsPaid: 6,
        weightedAverageCostCapital	: 24,
        capitalExpenditure: 4,
        depreciation: 5,
        accumulatedDepreciation	: 132,
        historicalCostOfAssets: 137,
        cashflowFromOperations: 3,
     

      },
      {
        date: '1/05/2013',
        totalIssuedShares: 19,
        dividendsPaid: 6,
        weightedAverageCostCapital	: 4,
        capitalExpenditure: 4,
        depreciation: 5,
        accumulatedDepreciation	: 12,
        historicalCostOfAssets: 37,
        cashflowFromOperations: 3,

      },
      {
        date: '1/15/2015',
        totalIssuedShares: 9,
        dividendsPaid: 68,
        weightedAverageCostCapital	: 4,
        capitalExpenditure: 49,
        depreciation: 88,
        accumulatedDepreciation	: 32,
        historicalCostOfAssets: 17,
        cashflowFromOperations: 3,

      },
      
    ]

    return {
      histories,
    }
  },
}
</script>
