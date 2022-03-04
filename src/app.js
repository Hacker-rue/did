const { Account } = require('@tonclient/appkit')
const { TonClient, signerKeys, signerNone } = require('@tonclient/core')
const { libNode } = require('@tonclient/lib-node')

const { DidDocumentContract } = require('./build/DidDocumentContract')
const { DidStorageContract } = require('./build/DidStorageContract')

TonClient.useBinaryLibrary(libNode)


const client = new TonClient({
    network: {
        endpoints: ["main.ton.dev"]
    }
})


async function main() {

    var keys = await TonClient.default.crypto.generate_random_sign_keys()

    var DidStorage = new Account(DidStorageContract, {
        signer: signerKeys({
            public: '1dc76e52f749fe8a58a64f36197fea805dd2fc42dc605cf7d702f7268260a203',
            secret: 'c1ea4e7aa9a775f49aa741488d2e61956aa39ab142c4cefc45984bb0bf2835d7'
          }),
        client: client
    })

    try {
        var ress = await DidStorage.deploy({initFunctionName: "constructor", initInput: {
            codeDidDocument: DidDocumentContract.code
        }, useGiver: false})

        console.log(ress)

        console.log(DidStorage)
    } catch(er) {
        console.log(DidStorage)
        console.log(er)
    }


}


main()