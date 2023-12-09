import SteamAuth from 'node-steam-openid'




const URL = 'http://localhost:3000'
const RETURN_URL = `${URL}/api/steam/return`
const STEAM_API_KEY = `5224B5431ACFE430BE8DEA601D168B6F`

export const steam = new SteamAuth({
    realm: URL, 
    returnUrl: RETURN_URL,
    apiKey: STEAM_API_KEY
})