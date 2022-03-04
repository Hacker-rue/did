const { Account } = require('@tonclient/appkit')
const { TonClient, signerKeys, signerNone } = require('@tonclient/core')
const { libNode } = require('@tonclient/lib-node')

const { DidDocumentContract } = require('./build/DidDocumentContract')
const { DidStorageContract } = require('./build/DidStorageContract')
const { ClientContract } = require('./build/ClientContract')

const send = require('./scripts/sendMessage')
const ApiDid = require("./scripts/api")

TonClient.useBinaryLibrary(libNode)

var DidStorageAddr = "0:ccf14291c229a5a9ade448c3376ff3225dc7ab59d6c516504b19a891bfe47b5a"


const client = new TonClient({
    network: {
        endpoints: ["net.ton.dev"]
    }
})

var didDocument = {
    "context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "did:example:",
    "authentication": [{
      
      "id": "did:example:",
      "type": "Ed25519VerificationKey2020",
      "controller": "did:example:",
      "publicKeyMultibase": "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
    }]
}

var didDocument2 = {
    "context": [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "did:example:123123123123123123",
    "authentication": [{
      
      "id": "did:example:",
      "type": "Ed25519VerificationKey2020",
      "controller": "did:example:",
      "publicKeyMultibase": "zH3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
    }]
}


async function main() {

    var didStorage = new Account(DidStorageContract, {
        address: DidStorageAddr,
        client: client
    })

    var AccountClient

    try {
        AccountClient = await deployClient()

        

        await ApiDid.addDid(AccountClient, didStorage, "0x" + AccountClient.signer.keys.public, JSON.stringify(didDocument))


        _document = new Account(DidDocumentContract, {
            address: await ApiDid.resolveDidDocument(didStorage, "0x" + AccountClient.signer.keys.public),
            client: client
        })

        console.log(_document)

        await ApiDid.init(_document, await AccountClient.getAddress(), AccountClient.signer)

        Timeout(5000)

        ress = await ApiDid.getInfo(_document)

        console.log(ress)

        

        

        await ApiDid.newDidDocument(AccountClient, _document, JSON.stringify(didDocument2))

        Timeout(10000)

        console.log(await ApiDid.getInfo(_document))




    } catch(er) {
        console.log(er)
    }


}

async function deployClient() {
    return new Promise(async (resolve, reject) => {
        try {
            contract = new Account(ClientContract, {
                signer: signerKeys(await client.crypto.generate_random_sign_keys()),
                client: client
            })
            ress =  await send.deploy(contract, {}, true)
            setTimeout(resolve, 10000, ress.Account)
        } catch(er) {
            reject("Error: No new account has been created!")
        }
    })
}

async function Timeout(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time, undefined)
    })
}


main()