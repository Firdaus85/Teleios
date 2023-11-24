<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase fixed-column">
            Items
          </th>
          <th v-for="item in histories" :key="item.history" class="text-uppercase">
            {{ item.date }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-uppercase fixed-column">Revenue</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.revenue }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase fixed-column">Cost Of Sales</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.costOfSales }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase fixed-column">Gross Profit</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.grossProfit }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase fixed-column">Operating Expenses</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.operatingExpenses }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase fixed-column">Operating Profit/Loss</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.operatingProfitLoss }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase fixed-column">Finance Cost</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.financeCost }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase fixed-column">Profit Before Tax</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.profitBeforeTax }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase fixed-column">Taxation</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.taxation }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase fixed-column">Profit / Loss</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.profitLoss }}
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
        revenue: 159,
        costOfSales: 6,
        grossProfit	: 24,
        operatingExpenses: 4,
        operatingProfitLoss: 5,
        financeCost: 132,
        profitBeforeTax: 137,
        taxation: 3,
        profitLoss: -122	,

      },
      {
        date: '15/01/2013',
        revenue: 19,
        costOfSales: 63,
        grossProfit	: 234,
        operatingExpenses: 34,
        operatingProfitLoss: 35,
        financeCost: 12,
        profitBeforeTax: 17,
        taxation: 32,
        profitLoss: -12	,

      },
      {
        date: '12/03/2013',
        revenue: 15,
        costOfSales: 63,
        grossProfit	: 424,
        operatingExpenses: 24,
        operatingProfitLoss: 1,
        financeCost: 152,
        profitBeforeTax: 1373,
        taxation: 3,
        profitLoss: 124	,

      },
      {
        date: '12/01/2013',
        revenue: 159,
        costOfSales: 6,
        grossProfit	: 24,
        operatingExpenses: 4,
        operatingProfitLoss: 5,
        financeCost: 132,
        profitBeforeTax: 137,
        taxation: 3,
        profitLoss: -122	,

      },
      {
        date: '15/01/2013',
        revenue: 19,
        costOfSales: 63,
        grossProfit	: 234,
        operatingExpenses: 34,
        operatingProfitLoss: 35,
        financeCost: 12,
        profitBeforeTax: 17,
        taxation: 32,
        profitLoss: -12	,

      },
      {
        date: '12/03/2013',
        revenue: 15,
        costOfSales: 63,
        grossProfit	: 424,
        operatingExpenses: 24,
        operatingProfitLoss: 1,
        financeCost: 152,
        profitBeforeTax: 1373,
        taxation: 3,
        profitLoss: 124	,

      },
      {
        date: '12/01/2013',
        revenue: 159,
        costOfSales: 6,
        grossProfit	: 24,
        operatingExpenses: 4,
        operatingProfitLoss: 5,
        financeCost: 132,
        profitBeforeTax: 137,
        taxation: 3,
        profitLoss: -122	,

      },
      {
        date: '15/01/2013',
        revenue: 19,
        costOfSales: 63,
        grossProfit	: 234,
        operatingExpenses: 34,
        operatingProfitLoss: 35,
        financeCost: 12,
        profitBeforeTax: 17,
        taxation: 32,
        profitLoss: -12	,

      },
      {
        date: '12/03/2013',
        revenue: 15,
        costOfSales: 63,
        grossProfit	: 424,
        operatingExpenses: 24,
        operatingProfitLoss: 1,
        financeCost: 152,
        profitBeforeTax: 1373,
        taxation: 3,
        profitLoss: 124	,

      },
      {
        date: '12/01/2013',
        revenue: 159,
        costOfSales: 6,
        grossProfit	: 24,
        operatingExpenses: 4,
        operatingProfitLoss: 5,
        financeCost: 132,
        profitBeforeTax: 137,
        taxation: 3,
        profitLoss: -122	,

      },
      {
        date: '15/01/2013',
        revenue: 19,
        costOfSales: 63,
        grossProfit	: 234,
        operatingExpenses: 34,
        operatingProfitLoss: 35,
        financeCost: 12,
        profitBeforeTax: 17,
        taxation: 32,
        profitLoss: -12	,

      },
      {
        date: '12/03/2013',
        revenue: 15,
        costOfSales: 63,
        grossProfit	: 424,
        operatingExpenses: 24,
        operatingProfitLoss: 1,
        financeCost: 152,
        profitBeforeTax: 1373,
        taxation: 3,
        profitLoss: 124	,

      },
      {
        date: '12/01/2013',
        revenue: 159,
        costOfSales: 6,
        grossProfit	: 24,
        operatingExpenses: 4,
        operatingProfitLoss: 5,
        financeCost: 132,
        profitBeforeTax: 137,
        taxation: 3,
        profitLoss: -122	,

      },
      {
        date: '15/01/2013',
        revenue: 19,
        costOfSales: 63,
        grossProfit	: 234,
        operatingExpenses: 34,
        operatingProfitLoss: 35,
        financeCost: 12,
        profitBeforeTax: 17,
        taxation: 32,
        profitLoss: -12	,

      },
      {
        date: '12/03/2013',
        revenue: 15,
        costOfSales: 63,
        grossProfit	: 424,
        operatingExpenses: 24,
        operatingProfitLoss: 1,
        financeCost: 152,
        profitBeforeTax: 1373,
        taxation: 3,
        profitLoss: 124	,

      },
      {
        date: '12/01/2013',
        revenue: 159,
        costOfSales: 6,
        grossProfit	: 24,
        operatingExpenses: 4,
        operatingProfitLoss: 5,
        financeCost: 132,
        profitBeforeTax: 137,
        taxation: 3,
        profitLoss: -122	,

      },
      {
        date: '15/01/2013',
        revenue: 19,
        costOfSales: 63,
        grossProfit	: 234,
        operatingExpenses: 34,
        operatingProfitLoss: 35,
        financeCost: 12,
        profitBeforeTax: 17,
        taxation: 32,
        profitLoss: -12	,

      },
      {
        date: '12/03/2013',
        revenue: 15,
        costOfSales: 63,
        grossProfit	: 424,
        operatingExpenses: 24,
        operatingProfitLoss: 1,
        financeCost: 152,
        profitBeforeTax: 1373,
        taxation: 3,
        profitLoss: 124	,

      },
      {
        date: '12/01/2013',
        revenue: 159,
        costOfSales: 6,
        grossProfit	: 24,
        operatingExpenses: 4,
        operatingProfitLoss: 5,
        financeCost: 132,
        profitBeforeTax: 137,
        taxation: 3,
        profitLoss: -122	,

      },
      {
        date: '15/01/2013',
        revenue: 19,
        costOfSales: 63,
        grossProfit	: 234,
        operatingExpenses: 34,
        operatingProfitLoss: 35,
        financeCost: 12,
        profitBeforeTax: 17,
        taxation: 32,
        profitLoss: -12	,

      },
      {
        date: '12/03/2013',
        revenue: 15,
        costOfSales: 63,
        grossProfit	: 424,
        operatingExpenses: 24,
        operatingProfitLoss: 1,
        financeCost: 152,
        profitBeforeTax: 1373,
        taxation: 3,
        profitLoss: 124	,

      },
      
    ]

    return {
      histories,
    }
  },
}
</script>


<style scoped>
.table-container {
  overflow-x: auto;
}

.fixed-column {
  position: sticky;
  left: 0;
  z-index: 1;
  background-color: white; 
  padding-right: 75px !important;
}
</style>