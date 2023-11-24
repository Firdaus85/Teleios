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
        description: 'How efficient marketing/ distribution channels are in moving goods',
      ratings: 'Good',
       
      },
      {
        description: 'How favourable are your contract terms with suppliers',
      ratings: 'Good',
       
      },
      {
        description: 'How tight are your credit terms for customers',
        rating: 'Bad',
        
      },
      {
        description: "How long does your cash remain locked up. How quickly does cash flow back",
        rating: 'Bad',
        
      },
      {
        description: "How efficient is your entire cash management system.",
        rating: 'Bad',
        
      }
    ]

    return {
      opinions,
    }
  },
}
</script>