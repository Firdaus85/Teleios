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
        description: 'Short-term liquidity',
      ratings: 'Gray',
       
      },
      {
        description: 'Immediate liquidity without affecting ongoing business',
      ratings: 'Gray',
       
      },
      {
        description: 'Cash cover',
        rating: 'Bad',
        
      },
      {
        description: "Cost cover",
        rating: 'Bad',
        
      },
      
    ]

    return {
      opinions,
    }
  },
}
</script>