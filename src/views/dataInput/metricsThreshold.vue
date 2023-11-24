<template>
 
     
      
   
  <v-form class="multi-col-validation">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="economicValueAdded"
          label="Economic Value Added"
          type="number"
          outlined
          dense
          placeholder="Economic Value Added"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="valueCreationRate"
          label="Value Creation Rate"
          type="number"
          outlined
          dense
          placeholder="Value Creation Rate"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="sustainableGrowthRate"
          label="Sustainable Growth rate"
          outlined
          type="number"
          dense
          placeholder="Sustainable Growth rate"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="operatingMargin"
          label="Operating Margin"
          outlined
          type="number"
          dense
          placeholder="Operating Margin"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="cashConversionCycle"
          label="Cash Conversion Cycle"
          outlined
          type="number"
          dense
          placeholder="Cash Conversion Cycle"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="debtRatio"
          label="Debt Ratio"
          outlined
          type="number"
          dense
          placeholder="Debt Ratio"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="assetCoverageRatio"
          label="Asset Coverage Ratio"
          outlined
          type="number"
          dense
          placeholder="Asset Coverage Ratio"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="cashCoverageRatio"
          label="Cash Coverage Ratio"
          outlined
          type="number"
          dense
          placeholder="Cash Coverage Ratio"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="cashRatio"
          label="Cash Ratio"
          outlined
          type="number"
          dense
          placeholder="Cash Ratio"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="capexRatio"
          label="Capex Ratio"
          outlined
          type="number"
          dense
          placeholder="Capex Ratio"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="productiveAssetRatio"
          label="Productive Asset Ratio"
          outlined
          type="number"
          dense
          placeholder="Productive Asset Ratio"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="returnInvestedCapital"
          label="Return on Invested Capital"
          outlined
          type="number"
          dense
          placeholder="Return on Invested Capital"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn color="primary">
          Submit
        </v-btn>
        <v-btn
          type="reset"
          outlined
          class="mx-2"
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const economicValueAdded = ref('')
    const valueCreationRate = ref('')
    const sustainableGrowthRate = ref('')
    const operatingMargin = ref('')
    const cashConversionCycle = ref('')
    const debtRatio = ref('')
    const assetCoverageRatio = ref('')
    const cashCoverageRatio = ref('')
    const cashRatio = ref('')
    const capexRatio= ref('')
    const productiveAssetRatio = ref('')
    const returnInvestedCapital = ref('')

    return {
      economicValueAdded,
      valueCreationRate,
      sustainableGrowthRate,
      operatingMargin,
      cashConversionCycle,
      debtRatio,
      assetCoverageRatio,
      cashCoverageRatio,
      cashRatio,
      capexRatio,
      productiveAssetRatio,
      returnInvestedCapital
    }
  },
}
</script>
