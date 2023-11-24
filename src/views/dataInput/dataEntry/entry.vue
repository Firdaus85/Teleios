<template>
    <v-stepper
      v-model="activeStep"
      class="custom-header"
    >
      <!-- Header -->
      <v-stepper-header>
        <!-- Header: Step 1 -->
        <v-stepper-step
          :complete="activeStep > 1"
          step="1"
          :rules="[() => stepValidationResult[1]]"
        >
          <div class="d-flex align-center">
            <span
              class="text-4xl font-weight-bold me-3"
              :class="stepValidationResult[1] ? 'text--primary' : 'error--text'"
            >01</span>
            <div class="d-flex flex-column">
              <span
                class="text-sm font-weight-semibold"
                :class="stepValidationResult[1] ? 'text--primary' : 'error--text'"
              >Income Statement</span>
              <span
                class="text-xs"
                :class="stepValidationResult[1] ? 'text--secondary' : 'error--text'"
              >Enter Income Statement</span>
            </div>
          </div>
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <!-- Header: Step 2 -->
        <v-stepper-step
          :complete="activeStep > 2"
          step="2"
          :rules="[() => stepValidationResult[2]]"
        >
          <div class="d-flex align-center">
            <span
              class="text-4xl font-weight-bold me-3"
              :class="stepValidationResult[2] ? 'text--primary' : 'error--text'"
            >02</span>
            <div class="d-flex flex-column">
              <span
                class="text-sm font-weight-semibold"
                :class="stepValidationResult[2] ? 'text--primary' : 'error--text'"
              >Balance Sheet</span>
              <span
                class="text-xs"
                :class="stepValidationResult[2] ? 'text--secondary' : 'error--text'"
              >Enter Balance Sheet</span>
            </div>
          </div>
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <!-- Header: Step 3 -->
        <v-stepper-step
          step="3"
          :rules="[() => stepValidationResult[3]]"
        >
          <div class="d-flex align-center">
            <span
              class="text-4xl font-weight-bold me-3"
              :class="stepValidationResult[3] ? 'text--primary' : 'error--text'"
            >03</span>
            <div class="d-flex flex-column">
              <span
                class="text-sm font-weight-semibold"
                :class="stepValidationResult[3] ? 'text--primary' : 'error--text'"
              >Financial Notes</span>
              <span
                class="text-xs"
                :class="stepValidationResult[3] ? 'text--secondary' : 'error--text'"
              >Enter Financial Notes</span>
            </div>
          </div>
        </v-stepper-step>
      </v-stepper-header>
  
      <!-- Stepper Items -->
      <v-stepper-items>
        <!-- Stepper Content: Step 1 -->
        <v-stepper-content step="1">
          <v-form
            ref="step1Form"
            class="pb-6 pt-2"
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                   
                  v-model="userData.year"
                  @change="extractYear"
                  label="Year"
                  type="number"
                  step="1"
                  min="1900" max="2099"
                  outlined
                  dense
                  hide-details="auto"
                  :rules="[validators.required]"
                  placeholder="Year"
                ></v-text-field>
              </v-col>
  
              <v-col cols="12" md="6">
                <v-select
      v-model="userData.month"
      :items="months.map(month => month.name)"
      :menu-props="['offset-y']"
      label="Month"
      dense
      hide-details="auto"
      outlined
    ></v-select>
  </v-col>
  
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="userData.revenue"
                  label="Revenue"
                  @input="logValues"
                  outlined
                  dense
                  hide-details="auto"
                  type= "number"
                  :rules="[validators.required]"
                  placeholder="Revenue"
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="userData.cost_of_sales"
                  label="Cost of Sales"
                  @input="logValues"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Cost of Sales"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="userData.operating_expenses"
                  label="Operating Expenses"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Operating Expenses"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="userData.finance_cost"
                  label="Finance Cost"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Finance Cost"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="userData.gross_profit"
                  label="Gross Profit"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Gross Profit"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="userData.operating_profit_or_loss"
                  label="Operating Profit/Loss"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Operating Profit/Loss"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="userData.profit_before_tax"
                  label="Profit Before Tax"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Profit Before Tax"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="userData.profit_or_loss"
                  label="Profit/Loss For the Year"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Profit/Loss For the Year"
                ></v-text-field>
              </v-col>
              
            </v-row>
            
          </v-form>
         
    
          <div class="d-flex justify-end">
            <v-btn
              color="primary"
              class="me-2"
              @click="handleStepValidation(1)"
            >
              Next
            </v-btn>
          </div>
        </v-stepper-content>
  
        <!-- Stepper Content: Step 2 -->
        <v-stepper-content step="2">
          <v-form
            ref="step2Form"
            class="pb-6 pt-2 multi-col-validation"
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.property_plant_equipment"
                  label="Property, Plant & Equipment"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Property, Plant & Equipment"
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.intangible_assets"
                  label="Intangible Assets"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Intangible Assets"
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.deferred_tax_asset"
                  label="Deferred Tax"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Deferred Tax"
                ></v-text-field>
              </v-col>
  
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.cash_and_cash_equivalents"
                  label="Cash & Cash Equivalents"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Cash & Cash Equivalents"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.accounts_receivable"
                  label="Account Receivable"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Account Receivable"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.inventory"
                  label="Inventory"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Inventory"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.short_term_investments"
                  label="Short Term Investment"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Short Term Investment"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.current_tax_assets"
                  label="Current Tax Assets"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Current Tax Assets"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.taxation"
                  label="Taxation"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Taxation"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.stated_capital"
                  label="Stated Capital"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Stated Capital"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.deposit_for_shares"
                  label="Deposit for Shares"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Deposit for Shares"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.income_surplus"
                  label="Income Surplus"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Income Surplus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.long_term_debt"
                  label="Long Term Debt"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Long Term Debt"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.accounts_payable"
                  label="Account Payable"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Account Payable"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.accruals"
                  label="Accruals"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Accruals"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.short_term_loans"
                  label="Short Term Loans"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Short Term Loans"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.bank_overdraft"
                  label="Bank Overdraft"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Bank Overdraft"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.total_non_current_assets"
                  label="Total Non Current Assets"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Total Non Current Assets"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.total_current_assets"
                  label="Total Current Assets"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Total Current Assets"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.total_assets"
                  label="Total  Assets"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Total  Assets"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.total_equity"
                  label="Total Equity"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Total Equity"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.total_current_liabilities"
                  label="Total Current Liabilities"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Total Current Liabilities"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.total_liabilities"
                  label="Total  Liabilities"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Total  Liabilities"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.total_equity_and_liabilities"
                  label="Total Equity & Liabilities"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Total Equity & Liabilities"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
  
          <div class="d-flex justify-space-between">
            <v-btn
              outlined
              @click="handleStepValidation(2, false)"
            >
              Previous
            </v-btn>
            <v-btn
              color="primary"
              @click="handleStepValidation(2)"
            >
              Next
            </v-btn>
          </div>
        </v-stepper-content>
  
        <!-- Stepper Content: Step 3 -->
        <v-stepper-content step="3">
          <v-form
            ref="step3Form"
            class="pb-6 pt-2 multi-col-validation"
          >
            <v-row>
              <!-- Twitter -->
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.total_issued_shares"
                  label="Total issued shares"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Total issued shares"
                ></v-text-field>
              </v-col>
  
        
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.cash_flow_from_operations"
                  label="Cash flow from operations"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Cash flow from operations"
                ></v-text-field>
              </v-col>
  
        
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.dividends_paid"
                  label="Dividends Paid"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Dividends Paid"
                ></v-text-field>
              </v-col>
  
             
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.weighted_average_cost_of_capital"
                  label="Weighted Average Cost of Capital (%)"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Weighted Average Cost of Capital (%)"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.capital_expenditure"
                  label="Capital expenditure (additions)"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Capital expenditure (additions)"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.depreciation"
                  label="Depreciation"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Depreciation"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.accumulated_depreciation"
                  label="Accummulated depreciation"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Accummulated depreciation"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
              <v-text-field
                  v-model="userData.historical_cost_of_assets"
                  label="Historical cost of assets"
                  type="number"
                  outlined
                  dense
                  hide-details="auto"
              
                  :rules="[validators.required]"
                  placeholder="Historical cost of assets"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
  
          <!-- Action Buttons -->
          <div class="d-flex justify-space-between">
            <v-btn
              outlined
              @click="handleStepValidation(3, false)"
            >
              Previous
            </v-btn>
            <v-btn
              color="primary"
              @click="handleStepValidation(3, true, true)"
            >
              Complete
            </v-btn>
          </div>
  
          <v-snackbar v-model="isFormSubmittedSnackbarVisible">
            Form Submitted Successfully.
          </v-snackbar>
        </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>









  <script>      
 import {
alphaDashValidator,
alphaValidator,
confirmedValidator,
emailValidator,
passwordValidator,
required,
} from '@core/utils/validation';
import { computed, ref } from '@vue/composition-api';

  
  export default {
    setup() {
      // Stepper's active step
      const activeStep = ref(1)
  
      // Data
      const userData = ref({
        year: '',
        month: null,
        revenue: '',
        cost_of_sales: '',
        operating_expenses: '',
        finance_cost: '',
        taxation: '',
        gross_profit: '',
        operating_profit_or_loss: '',
        profit_before_tax: '',
        profit_or_loss:'',
        
          property_plant_equipment:'',
          deferred_tax_asset:'',
            account_receivable:'',
            short_term_investment:'',
            current_tax_assets:'',
            stated_capital:'',
            income_surplus:'',
            accountPayable:'',
            short_term_loans:'',
            intangible_assets:'',
            cash_and_cash_equivalents:'',
            inventory:'',
            taxation:'',
            deposit_for_shares:'',
            long_term_debt:'',
            accruals:'',
            bank_overdraft: '',
            total_non_current_assets: '',
            total_current_assets: '',
            total_assets: '',
            total_equity: '',
            total_current_liabilities: '',
            total_liabilities: '',
            total_equity_and_liabilities:'',
          total_issued_shares:'',
          cash_flow_from_operations:'',
          dividends_paid:'',
          weighted_average_cost_of_capital:'',
          capital_expenditure:'',
            depreciation:'',
            accumulated_depreciation:'',
            historical_cost_of_assets:''


        
      })
      const displayedValues = ref({
        revenue: '',
        cost_of_sales: '',
        operating_expenses: '',
        finance_cost: '',
        taxation: ''
    });

      const logValues = () => {
                displayedValues.value.revenue = userData.value.revenue;
                displayedValues.value.costOfSales = userData.value.costOfSales;
                displayedValues.value.operatingExpenses = userData.value.operatingExpenses;
                displayedValues.value.financeCost = userData.value.financeCost;
                displayedValues.value.taxation = userData.value.taxation;
                
                console.log("Revenue: ", userData.value.revenue);
                console.log("Cost of Sales: ", userData.value.costOfSales);
        };
            

        const extractYear = () => {
      const dateObject = new Date(userData.value.year);
      const year = dateObject.getFullYear();
      userData.value.year = year.toString();
    };

    const months = [
      { name: 'January', number: 1 },
      { name: 'February', number: 2 },
      { name: 'March', number: 3 },
      { name: 'April', number: 4 },
      { name: 'May', number: 5 },
      { name: 'June', number: 6 },
      { name: 'July', number: 7 },
      { name: 'August', number: 8 },
      { name: 'September', number: 9 },
      { name: 'October', number: 10 },
      { name: 'November', number: 11 },
      { name: 'December', number: 12 },
    ];

    const selectedMonth = ref(null);

    const getMonthNumber = computed(() => {
      if (selectedMonth.value === null) {
        return null;
      }

      return months.find((month) => month.name === selectedMonth.value).number;
    });




      // Form Submitted Snackbar
      const isFormSubmittedSnackbarVisible = ref(false)

// Template refs
const step1Form = ref(null)
const step2Form = ref(null)
const step3Form = ref(null)

// Step Validation (for `rules` prop of `v-stepper-step`)
// It will be updated when the step is validated
const stepValidationResult = ref({
  1: true,
  2: true,
  3: true,
})

// Step Validation
const handleStepValidation = async (step, navigateNext = true, isFinalStep = false) => {
  // Get Form templateRef of Step from the argument
  const templateRef = (() => {
    if (step === 1) return step1Form
    if (step === 2) return step2Form
    if (step === 3) return step3Form

    return null
  })()

  // If no validated step templateRef is found, just return
  if (!templateRef) return

  // If the step is valid, proceed to the next step
  const isStepValid = templateRef.value.validate()

  // Assign to stepValidationResult
  stepValidationResult.value[step] = isStepValid

  if (isStepValid) {
    if (navigateNext && !isFinalStep) {
      activeStep.value += 1;

    } else if (!navigateNext) activeStep.value -= 1

    // Show Snackbar
    if (isFinalStep) {
      console.log("User Data:", userData.value);

      try {
        const url = 'https://teleiosapi.panoramicspace.com/api/consolidated-import'; // Your single endpoint here
        const requestData = userData.value;
        const accessToken = ref('132|k0TAwcJBkoGEF6yJjjYnU57hqmqYRSHdKZeGOxqa'); // Replace with your initial access token

// Update the access token as needed, for example, after a successful login or token refresh
const updateAccessToken = (newToken) => {
  accessToken.value = newToken;
};

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken.value}`,
          },
          body: JSON.stringify(requestData),
        });

        // Handle the response from the API endpoint
        const data = await response.json();
        console.log('Response from the API endpoint:', data);
      } catch (error) {
        console.error('Error sending data to the API endpoint:', error);
      }
      // Some Ajax request which saves form data in the database
      isFormSubmittedSnackbarVisible.value = true
    }
  }
}
  
      return {
        activeStep,
        extractYear,
        selectedMonth,
        getMonthNumber,
        months,
        userData,
        logValues,
        displayedValues,
        // Field Validators
        validators: {
          required,
          alphaDashValidator,
          emailValidator,
          passwordValidator,
          confirmedValidator,
          alphaValidator,
        },
  
        // Step Validations
        stepValidationResult,
        handleStepValidation,
  
        // Template Refs
        step1Form,
        step2Form,
        step3Form,
  
        // Snackbar
        isFormSubmittedSnackbarVisible,
      }
      
    },
    watch: {
    'userData.month': {
      handler(newMonth, oldMonth) {
        if (newMonth !== null) {
          const selectedMonth = this.months.find((month) => month.name === newMonth);
          if (selectedMonth) {
            this.userData.month = selectedMonth.number;
          }
        }
      },
      deep: true,
    },
  },
  }
  </script>
  

  <style scoped>


.v-application .primary {
    background-color:#0094ea !important;
    border-color: #0094ea!important;
}
.v-stepper__step__step {
   background-color:#0094ea !important;
    border-color: #0094ea!important;
}
</style>