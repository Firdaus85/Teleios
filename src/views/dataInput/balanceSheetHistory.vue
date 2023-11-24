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
          <td class="text-uppercase">Property, Plant & Equipment</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.propertyPlantEquipment }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Intangible Assets</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.intangibleAssets }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Deferred tax</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.deferredtax }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Total Non-Current Assets</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.totalNonCurrentAssets }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Cash & Cash Equivalents</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.cashCashEquivalents }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Account Receivables</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.accountReceivables }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Inventory</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.inventory }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Short Term Investments</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.shortTermInvestments }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Taxation</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.taxation }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Cash flow from Operations</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.cashflowFromOperations }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Total Current Assets</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.totalCurrentAssets }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Total Assets</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.totalAssets }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Stated Capital</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.statedCapital }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Deposit for Shares</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.depositForShares }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Income Surplus</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.incomeSurplus }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Total Equity</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.totalEquity }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Long Term Debt</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.longTermDebt }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Account Payable</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.accountPayable }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Accruals</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.accruals }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Short term loan</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.shortTermLoan }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Bank Overdraft</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.bankOverdraft }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Total Current Liabilities</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.totalCurrentLiabilities }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Total Liabilities</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.totalLiabilities }}
          </td>
        </tr>
        <tr>
          <td class="text-uppercase">Total Equity and Liabilities</td>
          <td v-for="item in histories" :key="item.history" class="text-center">
            {{ item.totalEquityLiabilities }}
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
        propertyPlantEquipment: 159,
        intangibleAssets	: 6,
        deferredtax		: 24,
        totalNonCurrentAssets	: 4,
        cashCashEquivalents	: 5,
        accountReceivables		: 132,
        inventory: 137,
        shortTermInvestments: 38,
        taxation:37,
        totalCurrentAssets	:35,
        totalAssets	:73,
        statedCapital	:773,
        depositForShares	:773,
        incomeSurplus	:73,
        totalEquity:63,
        longTermDebt:53,
        accountPayable	:43,
        accruals:23,
        shortTermLoan	:33,
        bankOverdraft:23,
        totalCurrentLiabilities:33,
        totalLiabilities	:23,
        totalEquityLiabilities:13,
     

      },
      {
        date: '1/05/2013',
        propertyPlantEquipment: 159,
        intangibleAssets	: 6,
        deferredtax		: 24,
        totalNonCurrentAssets	: 4,
        cashCashEquivalents	: 5,
        accountReceivables		: 132,
        inventory: 137,
        shortTermInvestments: 38,
        taxation:37,
        totalCurrentAssets	:35,
        totalAssets	:73,
        statedCapital	:773,
        depositForShares	:773,
        incomeSurplus	:73,
        totalEquity:63,
        longTermDebt:53,
        accountPayable	:43,
        accruals:23,
        shortTermLoan	:33,
        bankOverdraft:23,
        totalCurrentLiabilities:33,
        totalLiabilities	:23,
        totalEquityLiabilities:13,

      },
      {
        date: '1/15/2015',
        propertyPlantEquipment: 159,
        intangibleAssets	: 6,
        deferredtax		: 24,
        totalNonCurrentAssets	: 4,
        cashCashEquivalents	: 5,
        accountReceivables		: 132,
        inventory: 137,
        shortTermInvestments: 38,
        taxation:37,
        totalCurrentAssets	:35,
        totalAssets	:73,
        statedCapital	:773,
        depositForShares	:773,
        incomeSurplus	:73,
        totalEquity:63,
        longTermDebt:53,
        accountPayable	:43,
        accruals:23,
        shortTermLoan	:33,
        bankOverdraft:23,
        totalCurrentLiabilities:33,
        totalLiabilities	:23,
        totalEquityLiabilities:13,

      },
      
    ]

    return {
      histories,
    }
  },
}
</script>
