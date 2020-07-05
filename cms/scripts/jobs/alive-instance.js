#!/usr/bin/env node

const dotenv = require('dotenv')
const axios = require('axios')

dotenv.config()

const baseUrl = process.env.ALIVE_TARGET_URL

try {
  axios.get(baseUrl)
} catch (error) {
  console.error(error)
}
