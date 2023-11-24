<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            Financial Opinion
          </th>
          <th class="text-center text-uppercase">
            Rating
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in opinions"
          :key="item.opinion"
        >
          <td>{{ item.Description }}</td>
          <td class="text-center">
            {{ item.rating }}
          </td>
          
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const opinions = [
      {
        Description: 'Efficiency in using assets to generate revenue',
        rating: "Red",
       
      },
      {
        Description: 'Efficiency in using inventory',
        calories: 'Green',
     
      },
      {
        Description: 'Efficiency in using working capital to generate revenue',
        rating: "Green",
        
      }
    ]

    return {
      opinions,
    }
  },
}
</script>
