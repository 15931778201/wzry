import axios from 'axios'

const http = axios.create({
  baseURL: ProcessingInstruction.env.VUE_APP_AI_URL || "/admin/api",
  // baseURL: "http://localhost:3000/admin/api"
})

export default http