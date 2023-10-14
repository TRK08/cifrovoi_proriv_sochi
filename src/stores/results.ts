import {defineStore} from "pinia";
import axios from "axios";


interface IState {
    fetchStatus: 'init' | 'loading' | 'error' | 'success'
}

export const useResultsStore = defineStore('results',  {
    state: (): IState => ({
        fetchStatus: 'init',
    }),
    actions:  {

    },
    getters: {

    }
})
