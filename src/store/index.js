export const useStore = defineStore('main', {
    state: () => ({
        counter: 0,
    }),
    getters: {
        doubleCounter (state) {
            return state.counter * 2
        }
    },
    actions: {
        increment () {
            this.counter++
        },
        randomizeCounter () {
            this.counter = Math.round(100 * Math.random())
        },
    },
})