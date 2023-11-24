import themeConfig from '@themeConfig'
import axios from 'axios'
const $themeColors = themeConfig.themes.light

// heat chart data generator
function generateDataHeatMap(count, yrange) {
  let i = 0
  const series = []
  while (i < count) {
    const x = `w${(i + 1).toString()}`
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push({
      x,
      y,
    })
    // eslint-disable-next-line no-plusplus
    i++
  }

  return series
}

// colors
const chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff',
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f',
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1',
  },
  area: {
    series3: '#e0cffe',
    series2: '#b992fe',
    series1: '#ab7efd',
  },
}

export default {
  async mounted() {
    // Fetch initial data on component mount
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        // Make API request to fetch data
        const response = await axios.get('https://teleiosapi.panoramicspace.com/api/metrics/health-and-sustainability')

        // Store the fetched data in a variable
        const metricsData = response.data.data

        // Use the fetched data to update your series
        // Implement your logic to update each series based on the fetched data
        // For simplicity, I'll update the first series (EconomicValueAdded) as an example
        const economicValueAddedSeries = metricsData.map(item => parseFloat(item.economic_value_added))
        this.apexChatData.EconomicValueAdded.series = economicValueAddedSeries

        // Call the updateChartData method after updating the series
        // Use this.$nextTick to ensure the component is fully updated
        this.$nextTick(() => {
          this.$refs.dataComponent.updateChartData({ year: this.userData.year, month: this.userData.month })
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    updateChartData(filteredData) {
      // Implement logic to filter and update each series based on the filteredData
      // For simplicity, I'll update the first series (EconomicValueAdded) as an example
      const filteredEconomicValueAddedSeries = this.filterDataByYearAndMonth(
        this.apexChatData.EconomicValueAdded.series,
        filteredData.year,
        filteredData.month,
      )
      this.apexChatData.EconomicValueAdded.series = filteredEconomicValueAddedSeries
    },
    filterDataByYearAndMonth(series, year, month) {
      // Implement logic to filter the series based on the selected year and month
      // For simplicity, I'll return the series as is without filtering
      return series
    },
  },

  donutChart: {
    series: [75, 16, 50, 50],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [chartColors.donut.series1, chartColors.donut.series5, chartColors.donut.series3, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                label: 'Operational',
                formatter() {
                  return '31%'
                },
              },
            },
          },
        },
      },
      labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },

  investmentMetrics: {
    series: [75],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [$themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
            },
          },
        },
      },
      labels: ['Return on Assets', 'Return on Equity', 'Return on Capital Employed', 'Return on Investment'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },
  profitabilitiesMetrics: {
    series: [50],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '12px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [chartColors.donut.series3, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,

              name: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
            },
          },
        },
      },

      labels: ['Operating Margin', 'Gross Margin', 'Net Profit Margin', 'Revenue Growth'],
      labelContainerStyle: {
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        maxWidth: '100%',
        overflowScrolling: 'touch',
      },

      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },

  workingCapital: {
    series: [16, 17, 90, 30],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [chartColors.donut.series1, chartColors.donut.series5, chartColors.donut.series3, $themeColors.info],
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
              },
            },
          },
        },
      },
      labels: ['Payable days : 0days', 'Receivable days : 0days', 'Inventory days : 0days', 'Operating Cycle : 0days'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },
  liquidity: {
    series: [75, 16, 50, 50],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [chartColors.donut.series1, chartColors.donut.series5, chartColors.donut.series3, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}times`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}times`
                },
              },
            },
          },
        },
      },
      labels: ['Current Ratio', 'Quick Ratio', 'Defensive Interval', 'Cash Ratio'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },
  debtRatio: {
    series: [50],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [chartColors.donut.series3, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
            },
          },
        },
      },
      labels: ['Debt ratio', 'Debt to Equity'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },
  assetCoverage: {
    series: [75],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [chartColors.donut.series5, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
            },
          },
        },
      },
      labels: ['Interest Cover', 'Interest burden'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },
  cashflowCoverage: {
    series: [75],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [chartColors.donut.series4, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
            },
          },
        },
      },
      labels: ['Asset Coverage Ratio', 'Cashflow Coverage Ratio'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },
  capex: {
    series: [75],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [chartColors.donut.series3, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
            },
          },
        },
      },
      labels: ['Asset Depreciation Ratio', 'Capex Ratio'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },

  productiveAsset: {
    series: [86],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [chartColors.donut.series2, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
            },
          },
        },
      },
      labels: ['Non-current Assets to Total Assets Ratio', 'Productive asset investment Ratio'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },
  assetEfficiency: {
    series: [75, 16],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      colors: [chartColors.donut.series3, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}times`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: '"Inter", sans-serif',
              },
              value: {
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}times`
                },
              },
            },
          },
        },
      },
      labels: ['Inventory Turnover', 'WC Turnover'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },

    healthSustainability: {
      series: [75],
      colors: [chartColors.donut.series3, $themeColors.info],
      chart: {
        type: 'radialBar',
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: '55%',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -5,
              fontSize: '24px',
              fontWeight: 600,
              formatter(val) {
                return ``
              },
            },
          },
        },
      },
      stroke: {
        dashArray: 5,
      },

      EconomicValueAdded: [50],
      valueCreatedRate: [30],
      sustainableGrowthRate: [80],
    },
  },

  EconomicValueAdded: {
    series: [86],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      sparkline: {
        enabled: true,
      },
      colors: [chartColors.donut.series2, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      stroke: {
        dashArray: 5,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: '55%',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -5,
              fontSize: '24px',
              fontWeight: 600,
              formatter(val) {
                return ``
              },
            },
          },
        },
      },
      labels: ['20%'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },
  valueCreatedRate: {
    series: [76],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      sparkline: {
        enabled: true,
      },
      colors: [chartColors.donut.series2, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      stroke: {
        dashArray: 5,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: '55%',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -5,
              fontSize: '24px',
              fontWeight: 600,
              formatter(val) {
                return ``
              },
            },
          },
        },
      },
      labels: ['76%'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },
  sustainableGrowthRate: {
    series: [21],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
      },
      sparkline: {
        enabled: true,
      },
      colors: [chartColors.donut.series2, $themeColors.info],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      stroke: {
        dashArray: 5,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: '55%',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -5,
              fontSize: '24px',
              fontWeight: 600,
              formatter(val) {
                return ``
              },
            },
          },
        },
      },
      labels: ['86%'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },
}
