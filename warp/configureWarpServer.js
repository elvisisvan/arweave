import {WarpFactory} from 'warp-contracts'
import fs from 'fs'

const environment = process.env.WARPENV || 'testnet'
let warp 

if (environment === 'testnet') {
    warp = WarpFactory.forTestnet()
} else if (environment === 'mainnet') {
    warp = WarpFactory.forMainnet()
} else {
    throw Error('environemnt not set properly...')
}

async function configureWalet() {
    try {
        if (environment ==='testnet') {
            try {
                return JSON.parse(fs.readFileSync('../testwallet.json', 'utf-8'))
            } catch (err) {
                const {jwk} = await warp.generateWallet()
                fs.writeFileSync('../testwallet.json', JSON.stringify(jwk))
                return jwk
            }
        } else {
            return JSON.parse(fs.readFileSync('../testwallet.json', 'utf-8'))
        }
    } catch (err) {
        console.log("Error configure wallet: ", err)
    }
}

export {configureWallet, warp}