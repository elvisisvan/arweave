import {warp, configureWallet} from './configureWarpServer'
import {transactionId} from '../transactionid.js'
import {v4 as uuid} from 'uuid'

async function createPost() {
    let wallet = await configureWallet()
    const contract = warp.contract(transactionId).connect(wallet)
    
    await contract.writeInteraction({
        function: 'createPost',
        post: {
            title: "Bonjour, first post on arweave!",
            content: "Arweave is cool!",
            id: uuid()
        }
    })
}

createPost()