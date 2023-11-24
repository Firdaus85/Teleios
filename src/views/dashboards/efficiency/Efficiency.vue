<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
    <v-card>
          <v-card-title>
             <v-icon size="22">
          {{ icons.mdiLicense }}
        </v-icon>
            Asset Efficiency
          </v-card-title>
    </v-card>
      <SimpleTable />
    </v-col>
    
    <v-col
      cols="12"
      md="12"
    >
      <Charts />
    </v-col>
    <v-col
      cols="12"
      md="12"
    >
      <Opinion />
    </v-col>
  </v-row>
</template>

<script>


// demos

import { mdiLicense } from '@mdi/js'
import Charts from './chartjs/Chartjs.vue'
import Opinion from './simple-table/Opinion.vue'
import SimpleTable from './simple-table/SimpleTable.vue'

export default {
  components: {
   
    
    SimpleTable,
    Opinion,
    Charts
  },
  setup() {
     return {
        icons: {
          
          mdiLicense,
          
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