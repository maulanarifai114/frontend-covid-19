export const optionsChart = (params) => {
  return {
    tooltips: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      titleFontFamily: 'Quicksand',
      bodyFontFamily: 'Quicksand',
      footerMarginTop: 16,
      footerFontFamily: 'Quicksand',
      xPadding: 12,
      yPadding: 12,
      borderColor: '#fff',
      caretSize: 10,
      multiKeyBackground: '#00000000',
      callbacks: {
        footer: function(tooltipItem, data) {
          const day = tooltipItem[0].label
          const label = data.labels
          let date = ''
          label.forEach((el, index)=> {
            if(day === el) {
              date = params[index]
            }
          })
          return date
        }
      }
    },  
    scales: {
      yAxes: [{
        ticks: {
          fontFamily: 'Quicksand',
          fontColor: 'white'
        }
      }],
      xAxes: [{
        ticks: {
          fontFamily: 'Quicksand',
          fontColor: 'white'
        }
      }]
    },        
    legend: {
      labels: {
        fontFamily: 'Quicksand',
        fontColor: '#ffffff',
        fontSize: 16,
        boxWidth: 20
      }
      
    },
    responsive: true,
    maintainAspectRatio: false 
  }
}