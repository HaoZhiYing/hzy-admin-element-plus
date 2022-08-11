import { defineStore } from "pinia";
import { reactive } from "vue";

interface IState {
    isOpen: boolean
}

export default defineStore("SettingsStore", () => {

    let state = reactive<IState>({
        //
        isOpen: false,
    });

    /**
     * 
     * @param isOpen 
     */
    function onOpen(isOpen: boolean) {
        state.isOpen = isOpen;
    }

    return {
        state,
        onOpen
    }

});