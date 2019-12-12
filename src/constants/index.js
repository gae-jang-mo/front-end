export const APP_BASE_URL = process.env.VUE_APP_URL
export const API_BASE_URL = process.env.VUE_APP_SERVER_URL
export const OAUTH2_REDIRECT_URI =  `${APP_BASE_URL}/oauth2/redirect`
export const OAUTH2_GITHUB_URI =  `${API_BASE_URL}/oauth2/authorization/github?redirect_uri=${OAUTH2_REDIRECT_URI}`