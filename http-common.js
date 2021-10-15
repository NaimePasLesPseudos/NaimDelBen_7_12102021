import axios from "axios"

export default axios.create({
    baseURL: "https://616961c209e030001712c33c.mockapi.io/",
    headers: {
        "Content-type": "application/json"
    }
})