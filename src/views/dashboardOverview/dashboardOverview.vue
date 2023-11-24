<template>
<v-col>  
        <v-row>
          <v-col
            cols="12"
            md="8"
          >

        <v-card>
          
         
          <v-card-text>
            <welcome></welcome>
          </v-card-text>
        </v-card>

        </v-col>
  
        <v-col
          cols="12"
          md="4"
        >

        <v-card>
          
         
          <v-card-text>
            <filterbtn  @updateChartData="updateChartData"></filterbtn>
          </v-card-text>
        </v-card>

        </v-col>
        </v-row>
  
 
    <v-row>
 
      <v-col
        cols="12"
        md="8"
      >
      <router-link to="/dashboards/profitable">
        <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiStethoscope  }}
        </v-icon>
            Health & Sustainability Metrics
          </v-card-title>
         
          <v-card-text>
            <healthSustainabilitiesMetrics :filteredData="filteredData" ></healthSustainabilitiesMetrics>
          </v-card-text>
        </v-card>
      </router-link>
      </v-col>




      <v-col
        cols="12"
        md="4"
      >
      <router-link to="/dashboards/profitable">
        <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiSpeedometer  }}
        </v-icon>
            Bankruptcy Predictor Chart
          </v-card-title>
         
          <v-card-text>
            <bankkrupcyPredictorCharts></bankkrupcyPredictorCharts>
          </v-card-text>
        </v-card>
      </router-link>
      </v-col>




      <!-- Expense Ratio -->
      <v-col
        cols="12"
        md="4"
      >
      <router-link to="/dashboards/profitable">
        <v-card>
          <v-card-title>
            <v-icon size="22">
          {{ icons.mdiCalendarOutline }}
        </v-icon>
            Profitabilities Metrics
          </v-card-title>
         
          <v-card-text>
            <profitabilitiesMetrics></profitabilitiesMetrics>
          </v-card-text>
        </v-card>
      </router-link>
      </v-col>
       <!-- Expense Ratio -->
       <v-col
        cols="12"
        md="4"
      >
      <router-link to="/dashboards/investment">
        <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiRadar }}
        </v-icon>
            Investment Metrics
          </v-card-title>
         
          <v-card-text>
            <investmentMetrics></investmentMetrics>
          </v-card-text>
        </v-card>
      </router-link>
      </v-col>
       <!-- Expense Ratio -->
       <v-col
        cols="12"
        md="4"
      >
      <router-link to="/dashboards/capital">
        <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiBank }}
        </v-icon>
            Working Capital
          </v-card-title>
          
          <v-card-text>
            <workingCapital></workingCapital>
          </v-card-text>
        </v-card>
      </router-link>
      </v-col>





       <!-- Solvency -->
       
       
       
        <v-col
        cols="12"
        md="8"
      >
      <router-link to="/dashboards/solvency">
        <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiCashUsd }}
        </v-icon>
           Solvency
          </v-card-title>
          
          <v-card-text>
            <debtRatio></debtRatio>
          </v-card-text>
        </v-card>
      </router-link>
      </v-col>
       
      
      
      
      
       

       


      <!-- Liquidity -->
      <v-col
        cols="12"
        md="4"
      >
      <router-link to="/dashboards/liquidity">
        <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiCashCheck }}
        </v-icon>
            Liquidity
          </v-card-title>
         
          <v-card-text>
            <liquidity></liquidity>
          </v-card-text>
        </v-card>
      </router-link>
      </v-col>

























<!--------Asset Utilization-->


      <v-col
        cols="12"
        md="8"
      >
            <router-link to="/dashboards/utilization">
        <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiSeal }}
        </v-icon>
           Asset Utilization
          </v-card-title>
         
          <v-card-text>
            <capex></capex>
          </v-card-text>
        </v-card>
      </router-link>
      </v-col>
       




       <!-- Asset Efficiency -->
       <v-col
        cols="12"
        md="4"
      >
            <router-link to="/dashboards/efficiency">
        <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiLicense }}
        </v-icon>
            Asset Efficiency
          </v-card-title>
        
          <v-card-text>
            <assetEfficiency></assetEfficiency>
          </v-card-text>
        </v-card>
      </router-link>
      </v-col>
    </v-row>
  </v-col>
  </template>
  
  <script>
  import { mdiBank, mdiCalendarBlankOutline, mdiCalendarOutline, mdiCashCheck, mdiCashUsd, mdiDotsVertical, mdiLicense, mdiRadar, mdiSeal, mdiSpeedometer, mdiStethoscope } from '@mdi/js';

  import assetCoverage from './assetCoverage.vue';
import assetEfficiency from './assetEfficiency.vue';
import capex from './assetUtilizationDash.vue';
import bankkrupcyPredictorCharts from './bankkrupcyPredictorCharts.vue';
import cashflowCoverage from './cashflowCoverage.vue';
import filterbtn from './filterbtn.vue';
import healthSustainabilitiesMetrics from './healthSustainabilitiesMetrics.vue';
import investmentMetrics from './investmentMetrics.vue';
import liquidity from './liquidity.vue';
import productiveAsset from './productiveAsset.vue';
import profitabilitiesMetrics from './profitabilitiesMetrics.vue';
import debtRatio from './solvencydash.vue';
import welcome from './welcome.vue';
import workingCapital from './workingCapital.vue';
  
  export default {
    components: {

      investmentMetrics,
      profitabilitiesMetrics,
      cashflowCoverage,
      assetCoverage,
      debtRatio,
      workingCapital,
      liquidity,
      capex,
      productiveAsset,
      assetEfficiency,
      healthSustainabilitiesMetrics,
      bankkrupcyPredictorCharts,
      welcome,
      filterbtn
    },
    data() {
    return {
      filteredData: [],
    };
  },
    methods: {
  updateChartData(filteredData) {
    this.filteredData = filteredData;
  },
},
    setup() {
      
      return {
         
        icons: {
          mdiCalendarBlankOutline,
          mdiCalendarOutline,
          mdiDotsVertical,
          mdiCashCheck,
          mdiCashUsd, mdiLicense, mdiRadar, mdiSeal, mdiBank, mdiStethoscope , mdiSpeedometer 
        },
      
      }
    },
  }
  </script>
  

  <style scoped>
.v-application a {
   
    text-decoration: none;
}
.v-card__title {
    gap: 6px;
}
</style>

