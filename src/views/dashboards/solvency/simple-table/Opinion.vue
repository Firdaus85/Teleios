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
        description: 'Solvency Level',
      ratings: 'Gray',
       
      },
      {
        description: 'Capital Structure',
      ratings: 'Gray',
       
      },
      {
        description: 'Degree of leverage',
        rating: 'Green',
        
      },
      {
        description: "Ability to pay financial cost",
        rating: 'Bad',
        
      },
      {
        description: "Degree of external financial obligation",
        rating: 'Bad',
        
      },
      {
        description: "Solvency - long term sustainability of the company",
        rating: 'Green',
        
      },
      {
        description: "Debt level gauge/ debt sustainability",
        rating: 'Bad',
        
      },
    ]

    return {
      opinions,
    }
  },
}
</script>