import { createSubstore } from "storeon-substore";
import { StoreonStore } from "storeon";
import { State,Events } from './store'

const sliceName = "report";

export interface reportModuleState {
    [sliceName]:{
        previousResults:Array<{name:string,result:string}>
    }
}

export const addNewResult = "result";


export interface reportModuleEvents {
    [addNewResult]:Array<{name:string,result:string}>;
 
  }

export const reportModule = (parentStore: StoreonStore<State,Events>)  => {
    const store = createSubstore(parentStore, sliceName);

    store.on("@init", () => ({ previousResults:[] }));

    store.on(addNewResult, (state,[data]) => {
        const prev=state.previousResults
        prev.push(data)
        return {previousResults:prev}
    } )


}