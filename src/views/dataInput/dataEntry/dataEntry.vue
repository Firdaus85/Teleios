<template>
    <div>
      
          
            
        <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiScaleBalance }}
        </v-icon>
            Financial Diagnostics
          </v-card-title>
    </v-card>
    <v-alert
      text
      color="info"
    >
     NOTE: Kindly note that only absolute figures should be entered. Expense-like figures should not be negated unless they actually have negative values
    </v-alert>
      <demo-stepper-with-form></demo-stepper-with-form>
    </div>
  </template>
  
  <script>

import { mdiScaleBalance } from '@mdi/js';
import DemoStepperWithForm from './entry.vue';
  export default {
    components: {
      
      DemoStepperWithForm,
    },
    
  setup() {
     return {
        icons: {
          
          mdiScaleBalance,
          
        },
      }
  },
  }
  </script>
  
  <style scoped>
.v-card__title {
    gap: 5px;
    margin-bottom: 20px;
}

.v-application .primary {
    background-color:#0094ea !important;
    border-color: #0094ea!important;
}
</style>