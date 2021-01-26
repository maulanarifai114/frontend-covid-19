const perWeekData = {
  tglCasesPerDay: [],
  totalDataLine: {
    labels: [],
    datasets: [
      {
        label: 'Covid - 19 Indonesia',
        data: [0,0,0],
      }
    ]
  },
  addDataLine: {
    labels: [],
    datasets: [
      {
        label: 'Covid - 19 Indonesia',
        data: [0,0,0],
      }
    ]
  }
}

const perweek = (state = perWeekData, action) => {
  switch (action.type) {
    case 'PERWEEK':
      return {
      ...state,
      tglCasesPerDay: action.payload.tglCasesPerDay,
      totalDataLine: action.payload.totalDataLine,
      addDataLine: action.payload.addDataLine,
    }
    default:
      return state
  }
}

export default perweek