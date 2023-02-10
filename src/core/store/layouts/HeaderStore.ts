import { defineStore } from "pinia";
import { reactive } from "vue";

interface IState {

}

export default defineStore("HeaderStore", () => {

    //
    let state = reactive<IState>({

    });

    return {
        state
    }

});