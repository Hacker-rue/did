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
            public: 'cf434d1286e883bb3a7e723d233c360a7047f7022a41cec4c5903b305da19ed8',
            secret: 'a1b9dc69fe03318f517b4c74d539c7568c8131114171f4c15cc30c91493b8cd0'
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