import {createStoreon} from 'storeon'
import {reportModule, reportModuleEvents , reportModuleState} from './report'
//import { persistState } from '@storeon/localstorage'
export type State = reportModuleState 
export type Events = reportModuleEvents
const store = createStoreon <State,Events> ([
    reportModule
])

export default store;