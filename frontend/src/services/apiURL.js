const is_localhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1'
export const url = is_localhost ? 'http://localhost:5005/v1/' : 'http://localhost:5005/v1/' 

// TODO : Env var