<template>
  <v-card
    id="pricing-plan"
    class="text-center py-sm-15 py-5"
  >
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="6"
          sm="8"
          class="mx-auto"
        >
          <h1 class="font-weight-medium mb-5">
            Pricing Plans
          </h1>
          <p class="mb-3">
            All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs.
          </p>

          <!--plan switch -->
          <div class="d-flex align-center justify-center">
            <span class="font-weight-semibold">Monthly</span>
            <v-switch
              v-model="status"
              value="annually"
              class="mx-3"
            ></v-switch>
            <span class="font-weight-semibold">Annually</span>
          </div>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text class="mt-3 pb-15">
      <v-row>
        <v-col
          offset-sm="2"
          sm="8"
          md="12"
          offset-lg="2"
          lg="10"
          class="mx-auto"
        >
          <v-row>
            <!-- basic -->
            <v-col
              cols="12"
              md="4"
            >
              <v-card
                outlined
                class="text-center"
              >
                <v-card-text>
                  <!-- image -->
                  <div class="d-flex justify-center">
                    <img
                      :src="pricing.basicPlan.imgSrc"
                      class="mx-auto mt-3"
                    >
                  </div>

                  <!-- title -->
                  <h1 class="text-2xl font-weight-medium">
                    {{ pricing.basicPlan.title }}
                  </h1>
                  <p>{{ pricing.basicPlan.subtitle }}</p>

                  <!-- annual plan -->
                  <div class="annual-plan">
                    <div class="plan-price d-flex align-center justify-center">
                      <sup class="text-sm text-primary">$</sup>
                      <span class="pricing-basic-value text-5xl primary--text font-weight-semibold">
                        {{ status ? pricing.basicPlan.yearlyPlan.perMonth: pricing.basicPlan.monthlyPrice }}
                      </span>
                      <sub class="pricing-duration text-sm mb-n3">/month</sub>
                    </div>
                    <small
                      v-if="status"
                      class="annual-pricing"
                    >USD {{ pricing.basicPlan.yearlyPlan.totalAnnual }} / year</small>
                  </div>
                <!--/ annual plan -->
                </v-card-text>

                <v-card-text>
                  <div class="pb-2">
                    <div
                      v-for="benefits in pricing.basicPlan.planBenefits"
                      :key="benefits"
                      class="d-flex align-start text-sm px-5 my-4 cursor-pointer text-left"
                    >
                      <v-icon
                        size="14"
                        class="me-2 mt-1"
                      >
                        {{ icons.mdiCheckboxBlankCircleOutline }}
                      </v-icon>
                      <span class="text-sm text--secondary">{{ benefits }}</span>
                    </div>
                  </div>

                  <!-- plan button -->
                  <v-btn
                    outlined
                    block
                    color="success"
                  >
                    Your current plan
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- standard -->
            <v-col
              cols="12"
              md="4"
            >
              <v-card
                outlined
                class="popular text-center"
              >
                <v-card-text>
                  <!-- chip -->
                  <div
                    v-show="pricing.standardPlan.popularPlan"
                    class="pricing-badge text-right mt-n3"
                  >
                    <v-chip
                      small
                      color="primary"
                      class="v-chip-light-bg primary--text font-weight-semibold"
                    >
                      Popular
                    </v-chip>
                  </div>

                  <!-- image -->
                  <div class="d-flex justify-center">
                    <img
                      :src="pricing.standardPlan.imgSrc"
                      class="mx-auto"
                    >
                  </div>

                  <!-- title -->
                  <h1 class="text-2xl font-weight-medium">
                    {{ pricing.standardPlan.title }}
                  </h1>
                  <p>{{ pricing.standardPlan.subtitle }}</p>

                  <!-- annual plan -->
                  <div class="annual-plan">
                    <div class="plan-price d-flex align-center justify-center">
                      <sup class="text-sm text-primary">$</sup>
                      <span class="pricing-basic-value text-5xl primary--text font-weight-semibold">
                        {{ status ? pricing.standardPlan.yearlyPlan.perMonth: pricing.standardPlan.monthlyPrice }}
                      </span>
                      <sub class="pricing-duration text-sm mb-n3">/month</sub>
                    </div>
                    <small
                      v-if="status"
                      class="annual-pricing"
                    >USD {{ pricing.standardPlan.yearlyPlan.totalAnnual }} / year</small>
                  </div>
                <!--/ annual plan -->
                </v-card-text>

                <v-card-text>
                  <div class="pb-2">
                    <div
                      v-for="benefits in pricing.standardPlan.planBenefits"
                      :key="benefits"
                      class="d-flex align-start text-sm px-5 my-4 cursor-pointer text-left"
                    >
                      <v-icon
                        size="14"
                        class="me-2 mt-1"
                      >
                        {{ icons.mdiCheckboxBlankCircleOutline }}
                      </v-icon>
                      <span class="text-sm text--secondary">{{ benefits }}</span>
                    </div>
                  </div>

                  <!-- plan button -->
                  <v-btn
                    block
                    color="primary"
                  >
                    Upgrade
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- enterprise -->
            <v-col
              cols="12"
              md="4"
            >
              <v-card
                outlined
                class="text-center"
              >
                <v-card-text>
                  <!-- image -->
                  <div class="d-flex justify-center">
                    <img
                      :src="pricing.enterprisePlan.imgSrc"
                      class="mx-auto mb-3"
                    >
                  </div>

                  <!-- title -->
                  <h1 class="text-2xl font-weight-medium">
                    {{ pricing.enterprisePlan.title }}
                  </h1>
                  <p>{{ pricing.enterprisePlan.subtitle }}</p>

                  <!-- annual plan -->
                  <div class="annual-plan">
                    <div class="plan-price d-flex align-center justify-center">
                      <sup class="text-sm text-primary">$</sup>
                      <span class="pricing-basic-value text-5xl primary--text font-weight-semibold">
                        {{ status ? pricing.enterprisePlan.yearlyPlan.perMonth: pricing.enterprisePlan.monthlyPrice }}
                      </span>
                      <sub class="pricing-duration text-sm mb-n3">/month</sub>
                    </div>
                    <small
                      v-if="status"
                      class="annual-pricing"
                    >USD {{ pricing.enterprisePlan.yearlyPlan.totalAnnual }} / year</small>
                  </div>
                <!--/ annual plan -->
                </v-card-text>

                <v-card-text>
                  <div class="pb-2">
                    <div
                      v-for="benefits in pricing.enterprisePlan.planBenefits"
                      :key="benefits"
                      class="d-flex align-start text-sm px-5 my-4 cursor-pointer text-left"
                    >
                      <v-icon
                        size="14"
                        class="me-2 mt-1"
                      >
                        {{ icons.mdiCheckboxBlankCircleOutline }}
                      </v-icon>
                      <span class="text-sm text--secondary">{{ benefits }}</span>
                    </div>
                  </div>

                  <!-- plan button -->
                  <v-btn
                    outlined
                    block
                    color="primary"
                  >
                    Upgrade
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- pricing free trial -->
    <v-card-text class="pricing-free-trial my-16">
      <v-row>
        <v-col
          cols="12"
          md="10"
          class="mx-auto"
        >
          <div class="pricing-trial-content d-flex justify-space-between flex-column flex-md-row">
            <div class="text-center text-md-left mt-7">
              <p class="text-2xl font-weight-medium primary--text mb-2">
                Still not convinced? Start with a 14-day FREE trial!
              </p>
              <p class="text-base">
                You will get full access to with all the features for 14 days.
              </p>

              <v-btn
                color="primary"
                class="mt-4 mt-lg-6"
              >
                Start 14-day FREE trial
              </v-btn>
            </div>

            <!-- images -->
            <v-img
              contain
              height="278"
              max-width="250"
              src="@/assets/images/3d-characters/pose-fs-9.png"
              class="pricing-trial-img mx-auto"
              alt="svg img"
            />
            <!--/ images -->
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <!--/ pricing free trial -->

    <v-card-text>
      <h2 class="text-2xl font-weight-medium mb-2">
        FAQ's
      </h2>
      <p>Let us help answer the most common questions.</p>
    </v-card-text>

    <v-card-text class="pricing-accordion mt-1">
      <v-row>
        <v-col
          cols="12"
          md="8"
          class="mx-auto text-left"
        >
          <v-expansion-panels v-model="pricingAccordion">
            <v-expansion-panel
              v-for="item in faqsList"
              :key="item.title"
            >
              <v-expansion-panel-header>
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.desc }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCheckboxBlankCircleOutline } from '@mdi/js'

export default {
  setup() {
    const status = ref(false)
    const pricingAccordion = ref(0)

    const pricing = {
      basicPlan: {
        title: 'Basic',
        monthlyPrice: 0,
        currentPlan: true,
        popularPlan: false,
        subtitle: 'A simple start for everyone',
        imgSrc: require('@/assets/images/misc/pricing-tree-1.png'),
        yearlyPlan: {
          perMonth: 0,
          totalAnnual: 0,
        },
        planBenefits: [
          '100 responses a month',
          'Unlimited forms and surveys',
          'Unlimited fields',
          'Basic form creation tools',
          'Up to 2 subdomains',
        ],
      },
      standardPlan: {
        monthlyPrice: 49,
        title: 'Standard',
        popularPlan: true,
        currentPlan: false,
        subtitle: 'For small to medium businesses',
        imgSrc: require('@/assets/images/misc/pricing-tree-2.png'),
        yearlyPlan: {
          perMonth: 40,
          totalAnnual: 480,
        },
        planBenefits: [
          'Unlimited responses',
          'Unlimited forms and surveys',
          'Instagram profile page',
          'Google Docs integration',
          'Custom “Thank you” page',
        ],
      },
      enterprisePlan: {
        monthlyPrice: 99,
        popularPlan: false,
        currentPlan: false,
        title: 'Enterprise',
        subtitle: 'Solution for big organizations',
        imgSrc: require('@/assets/images/misc/pricing-tree-3.png'),
        yearlyPlan: {
          perMonth: 80,
          totalAnnual: 960,
        },
        planBenefits: [
          'PayPal payments',
          'Logic Jumps',
          'File upload with 5GB storage',
          'Custom domain support',
          'Stripe integration',
        ],
      },
    }

    const faqsList = [
      {
        title: 'General settings',
        desc: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
      },
      {
        title: 'Users',
        desc: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
      },
      {
        title: 'Personal data',
        desc: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
      },
      {
        title: 'Advanced settings',
        desc: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
      },
    ]

    return {
      status,
      pricing,
      faqsList,
      pricingAccordion,
      icons: {
        mdiCheckboxBlankCircleOutline,
      },
    }
  },
}
</script>

<style lang="scss" >
@import '@core/preset/preset/mixins';
@import '@core/preset/preset/variables';

#pricing-plan {
  .popular {
    border-color: rgba(145, 85, 253, 0.3);
  }

  .pricing-free-trial {
    background-color: rgba(145, 85, 253, 0.04);
    position: relative;
    height: 14.625rem;
    .pricing-trial-img {
      position: relative;
      top: -3.5rem;
      right: 0;
    }
  }
  .pricing-accordion {
    .v-expansion-panels {
      .v-expansion-panel {
        box-shadow: none !important;
        margin-bottom: -1px;
        &::before {
          box-shadow: none;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  #pricing-plan {
    .pricing-free-trial {
      height: auto;
      .pricing-trial-img {
        bottom: -1.2rem;
        top: unset;
      }
    }
  }
}

@include theme--child(pricing-accordion) using ($material) {
  .v-expansion-panels {
    .v-expansion-panel {
      border: 1px solid map-deep-get($material, 'dividers');
    }
  }
}
</style>
