import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api'
    : `https://clone-of-stack-over-flow.herokuapp.com`

const publicFetch = axios.create({
  baseURL
})

export { publicFetch, baseURL }
