import {combineReducers} from 'redux'
import perweek from './perweek'
import total from './total'

const rootReducer = combineReducers({ perweek, total })

export default rootReducer