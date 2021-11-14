import { createLogger, createStore } from 'vuex'
import { auth } from "./authModule";

const store = createStore({
    modules: {
        auth,
    },
    plugins: [createLogger()]
})

export default store