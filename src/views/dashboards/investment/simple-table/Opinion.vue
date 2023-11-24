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
        description: 'How well are assets being utilized',
      ratings: 'Bad',
       
      },
      {
        description: 'The reward to shareholders for their investment. How efficient is capital being utilized',
      ratings: 'Bad',
       
      },
      {
        description: 'Pre-tax Return on invesment',
        rating: 'Bad',
        
      },
      {
        description: "Post-tax Return on investment",
        rating: 'Bad',
        
      },
      {
        description: "How well is capital being utilized to improve performance",
        rating: 'Bad',
        
      }
    ]

    return {
      opinions,
    }
  },
}
</script>