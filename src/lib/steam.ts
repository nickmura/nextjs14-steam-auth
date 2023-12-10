import SteamAuth from 'node-steam-openid'

export const steam = new SteamAuth({
    realm: process.env.URL || "",
    apiKey: process.env.STEAM_API_KEY || "",
    returnUrl: process.env.URL + "/api/auth/return",
})