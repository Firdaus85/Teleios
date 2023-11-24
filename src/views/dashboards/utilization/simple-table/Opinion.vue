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
          <td>{{ item.description }}</td>
          <td class="text-center">
            {{ item.ratings }}
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
        description: 'Available cash flow to meet capital requirements',
      ratings: 'Bad',
       
      },
      {
        description: 'Age and condition of assets',
      ratings: 'Good',
       
      },
      {
        description: 'How fast are assets depreciating and how commensurate are investments being made to ensure growth',
        rating: 'Bad',
        
      },
      {
        description: "Barriers to entry or company's flexiblity to market dynamics",
        rating: 'Good',
        
      },
      
    ]

    return {
      opinions,
    }
  },
}
</script>
