import themeConfig from '@themeConfig'

const $themeColors = themeConfig.themes.light

// colors
const chartColors = {
  primaryColorShade: '#836AF9',
  yellowColor: '#ffe800',
  successColorShade: '#28dac6',
  warningColorShade: '#ffe802',
  warningLightColor: '#FDAC34',
  infoColorShade: '#299AFF',
  greyColor: '#4F5D70',
  blueColor: '#2c9aff',
  blueLightColor: '#84D0FF',
  greyLightColor: '#EDF1F4',
  tooltipShadow: 'rgba(0, 0, 0, 0.25)',
  lineChartPrimary: '#666ee8',
  lineChartDanger: '#ff4961',
  labelColor: '#6e6b7b',
  grid_line_color: 'rgba(200, 200, 200, 0.2)',
}

export default {
  lineAreaChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 30,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 5,
              min: 0,
              max: 25,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Asset Turnover Graph(%)',
          data: [1.39, 11.7, 20.83, 12.55],
          lineTension: 0,
          backgroundColor: chartColors.successColorShade,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 1.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.successColorShade,
        },
      ],
    },
  },
  WorkingCapitalChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 30,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 300,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Working Capital Turnover Graph(%)',
          data: [0.05, 29.12, 166.67, 241],
          lineTension: 0,
          backgroundColor: chartColors.blueColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 1.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.blueColor,
        },
      ],
    },
  },
  InventoryChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 30,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 50,
              min: 0,
              max: 150,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: ['2015', '2015', '2017', '2018'],
      datasets: [
        {
          label: 'Inventory Turnover Graph(%)',
          data: [5, 4.56, 66.67, 118.6],
          lineTension: 0,
          backgroundColor: chartColors.greyColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 1.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.greyColor,
        },
      ],
    },
  },
}
