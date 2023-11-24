<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="12"
        sm="6"
        
      >
      <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiCashCheck }}
        </v-icon>
            Liquidity
          </v-card-title>
      </v-card>
        <SimpleTable />
      
      </v-col>
      <v-col
        cols="12"
        md="12"
        sm="6"
        
      >
        <Charts />
      
      </v-col>
      <v-col
        cols="12"
        md="12"
        sm="6"
        
      >
        <Opinion />
      
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StatisticsCardVertical from '@/@core/components/statistics-card/StatisticsCardVertical.vue'
import StatisticsCardAreaChart from '@core/components/statistics-card/StatisticsCardAreaChart.vue'
import StatisticsCardWithImages from '@core/components/statistics-card/StatisticsCardWithImages.vue'

// icons
import { mdiCashCheck } from '@mdi/js'

// demos
import CrmActivityTimeline from './CrmActivityTimeline.vue'
import CrmCardDeveloperMeetup from './CrmCardDeveloperMeetup.vue'
import CrmCardMeetingSchedule from './CrmCardMeetingSchedule.vue'
import CrmCardUpgradePlan from './CrmCardUpgradePlan.vue'
import CrmRevenueReport from './CrmRevenueReport.vue'
import CrmSalesOverview from './CrmSalesOverview.vue'
import CrmStatisticsCard from './CrmStatisticsCard.vue'
import CrmTotalSales from './CrmTotalSales.vue'
import CrmWeeklySales from './CrmWeeklySales.vue'
import Charts from './chartjs/Chartjs.vue'
import Opinion from './simple-table/Opinion.vue'
import SimpleTable from './simple-table/SimpleTable.vue'

export default {
  components: {
    StatisticsCardWithImages,
    StatisticsCardAreaChart,
    StatisticsCardVertical,

    CrmStatisticsCard,
    CrmTotalSales,
    CrmRevenueReport,
    CrmSalesOverview,
    CrmActivityTimeline,
    CrmWeeklySales,
    CrmCardUpgradePlan,
    CrmCardMeetingSchedule,
    CrmCardDeveloperMeetup,
    Opinion,
    SimpleTable,
    Charts
  },
  setup() {
     return {
        icons: {
          
          mdiCashCheck,
          
        },
      }
  },
}
</script>


<style scoped>
.v-card__title {
    gap: 5px;
    margin-bottom: 10px;
}
</style>