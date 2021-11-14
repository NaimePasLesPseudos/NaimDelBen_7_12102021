import baseHeaders from "./header"
import { url } from "./apiURL"

export const authAPI = {
    async login(user) {
        const res = await fetch(url + "auth/login", {
            method: "POST",
            headers: baseHeaders(),
            body: JSON.stringify({ 
                email: user.email,
                password: user.password
            })
        })
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        
        return res
        
    },
    
    async signup(user) {
        const res = await fetch(url + "auth/signup", {
            method: "POST",
            headers: baseHeaders(),
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            })
        })

        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },

    async logout() {
        localStorage.removeItem('user')
    }
}