const totalData = {
  cases : 0,
  secure : 0,
  death : 0,
  positive : 0,
  plusCases : 0,
  plusSecure : 0,
  plusDeath : 0,
  plusPositive : 0,
  date : null
}

const total = (state = totalData, action) => {
  switch (action.type) {
    case 'TOTAL':
      return {
      ...state,
      cases: action.payload.cases,
      secure: action.payload.secure,
      death: action.payload.death,
      positive: action.payload.positive,
      plusCases: action.payload.plusCases,
      plusSecure: action.payload.plusSecure,
      plusDeath: action.payload.plusDeath,
      plusPositive: action.payload.plusPositive,
      date: action.payload.date,
    }
    default:
      return state
  }
}

export default total