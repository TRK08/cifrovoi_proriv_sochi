import {defineStore} from "pinia";
import axios from "axios";
import type {IResult} from "@/shims-vue";
import  {type UploadFileInfo} from "naive-ui";
import {imgToBase64} from "@/utilits";
import { v4 as uuidv4 } from 'uuid';


interface IState {
    fetchStatus: 'init' | 'loading' | 'error' | 'success'
    results: IResult[],
}

export const useResultsStore = defineStore('results',  {
    state: (): IState => ({
        fetchStatus: 'init',
        results: [],
    }),
    actions:  {
        async loadInfo(fileInfo: UploadFileInfo) {
            this.fetchStatus = 'loading'
            const file = fileInfo?.file
            const formData = new FormData();
            // @ts-ignore
            formData.append('file', file?.file as File);

            try {
                const res = await axios.post(`https://d6ae-37-204-156-155.ngrok-free.app/predict`, formData, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });
                if (res.data) {
                    const resItem = {
                        ...res.data,
                        id: uuidv4(),
                        filename: file?.name,
                        // @ts-ignore
                        img: await imgToBase64(file?.file as File),
                    }

                    this.results = [resItem, ...this.results]
                    localStorage.setItem('results', JSON.stringify(this.results))
                    this.fetchStatus = 'success'
                }
            } catch (e: unknown) {
                this.fetchStatus = 'error'
                if (axios.isAxiosError(e)) {
                    console.log(e)
                    return {
                        status: this.fetchStatus,
                        code: e.response?.status
                    }
                }
            } finally {
                this.fetchStatus = "init"
            }
        },
        removeItem(id: string) {
            this.results = this.results.filter(res => res.id !== id)
            localStorage.setItem('results', JSON.stringify(this.results))
        },
    },
    getters: {}
})
