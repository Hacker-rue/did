const DidDocumentContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "pubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "didDocument",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "init",
                "inputs": [
                    {
                        "name": "issuerAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "newDidDocument",
                "inputs": [
                    {
                        "name": "didDocument",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deactivate",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "newDidIssuerAddr",
                "inputs": [
                    {
                        "name": "issuerAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deleteDidDocument",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getDid",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "status",
                                "type": "uint8"
                            },
                            {
                                "name": "PubKey",
                                "type": "uint256"
                            },
                            {
                                "name": "issuerAddr",
                                "type": "address"
                            },
                            {
                                "name": "didDocument",
                                "type": "string"
                            }
                        ],
                        "name": "value0",
                        "type": "tuple"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrDidStorage",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "status",
                                "type": "uint8"
                            },
                            {
                                "name": "PubKey",
                                "type": "uint256"
                            },
                            {
                                "name": "issuerAddr",
                                "type": "address"
                            },
                            {
                                "name": "didDocument",
                                "type": "string"
                            }
                        ],
                        "name": "didItem",
                        "type": "tuple"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "components": [
                    {
                        "name": "status",
                        "type": "uint8"
                    },
                    {
                        "name": "PubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "issuerAddr",
                        "type": "address"
                    },
                    {
                        "name": "didDocument",
                        "type": "string"
                    }
                ],
                "name": "_didItem",
                "type": "tuple"
            },
            {
                "name": "_addrDidStorage",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint256"
            }
        ]
    },
    tvc: "te6ccgECKAEABbwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUnBAQkiu1TIOMDIMD/4wIgwP7jAvILJAgFJgEABgL87UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK5GQcBFNMfAds8+Edu8nwJA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfCMjCQIoIIIQOsul5rvjAiCCEHE8tRe74wITCgRQIIIQRmOCXLrjAiCCEF6ivMy64wIgghBsNV6ZuuMCIIIQcTy1F7rjAhEPDQsDJjD4RvLgTPhCbuMA0ds82zx/+GciDCAAOPhJ+EpvEscF8uBm+EnIz4UIzoBvz0DJgQCg+wADODD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zx/+GciDiAAmPhFIG6SMHDe+EpvEbry4GT4Sm8SjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy4GT4APhKAW9SIPhqcW9Q+GoDODD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zx/+GciECAAWPhJ+EpvEscF8uBmghAL68IAcvsC+EoBb1L4avhJyM+FiM6Ab89AyYEAgPsAAygw+Eby4Ez4Qm7jANTR2zzbPH/4ZyISIABY+En4Sm8SxwXy4GaCEAvrwgBy+wL4SgFvU/hq+EnIz4WIzoBvz0DJgQCA+wAEUCCCEAgdfO264wIgghAostEAuuMCIIIQL9QCDrrjAiCCEDrLpea64wIfHRsUBOIw+EJu4wD4RvJz1w3/ldTR0NP/39TR+EGIyM+OK2zWzM7J2zwgbvLQZSBu8n/Q+kAw+EkhxwXy4GRopv5gghAR4aMAvvLgZPgA+GtwII0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBknFhUCJohvBHBvUAFvUwFvUfhq2zx/+GcmIAIY0CCLOK2zWMcFioriFxgBCtdN0Ns8GABC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBio6A4iIaAehw7UTQ9AVwII0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIhvBPhqjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GtxIYBA9A6T1wv/kXDi+GyAQPQO8r3XC//4YnD4YyYDjDD4RvLgTPhCbuMA0ds8Io4tJNDTAfpAMDHIz4cgznHPC2ECyM+Sv1AIOs4BbyReMMsHy/9ZyM7Mzc3JcPsAkVvi4wB/+GciHCABpI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiG8EW/hL+EomAyYw+Eby4Ez4Qm7jANHbPNs8f/hnIh4gAFj4SfhKbxLHBfLgZoIQC+vCAHL7AvhKcG9Q+Gr4ScjPhYjOgG/PQMmBAID7AAOEMPhG8uBM+EJu4wDR2zwhjikj0NMB+kAwMcjPhyDOcc8LYQHIz5IgdfO2AW8kXjDLB8v/zszNyXD7AJEw4uMAf/hnIiEgAFL4TPhL+Er4Q/hCyMv/yz/PgwFvJF4wywfL/1UwyM7MWcjOy//NzcntVAAE+EoAVu1E0NP/0z/TADHTB9P/1NHQ+kDUVTBvBAHU0dD6QNP/0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSYlABRzb2wgMC40OS4wAAAADCD4Ye0e2Q==",
    code: "te6ccgECJQEABY8AAgaK2zUkAQQkiu1TIOMDIMD/4wIgwP7jAvILIQUCIwEAAwL87UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK5FgQBFNMfAds8+Edu8nwGA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfCAgBgIoIIIQOsul5rvjAiCCEHE8tRe74wIQBwRQIIIQRmOCXLrjAiCCEF6ivMy64wIgghBsNV6ZuuMCIIIQcTy1F7rjAg4MCggDJjD4RvLgTPhCbuMA0ds82zx/+GcfCR0AOPhJ+EpvEscF8uBm+EnIz4UIzoBvz0DJgQCg+wADODD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zx/+GcfCx0AmPhFIG6SMHDe+EpvEbry4GT4Sm8SjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy4GT4APhKAW9SIPhqcW9Q+GoDODD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zx/+GcfDR0AWPhJ+EpvEscF8uBmghAL68IAcvsC+EoBb1L4avhJyM+FiM6Ab89AyYEAgPsAAygw+Eby4Ez4Qm7jANTR2zzbPH/4Zx8PHQBY+En4Sm8SxwXy4GaCEAvrwgBy+wL4SgFvU/hq+EnIz4WIzoBvz0DJgQCA+wAEUCCCEAgdfO264wIgghAostEAuuMCIIIQL9QCDrrjAiCCEDrLpea64wIcGhgRBOIw+EJu4wD4RvJz1w3/ldTR0NP/39TR+EGIyM+OK2zWzM7J2zwgbvLQZSBu8n/Q+kAw+EkhxwXy4GRopv5gghAR4aMAvvLgZPgA+GtwII0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBYkExICJohvBHBvUAFvUwFvUfhq2zx/+GcjHQIY0CCLOK2zWMcFioriFBUBCtdN0Ns8FQBC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBio6A4h8XAehw7UTQ9AVwII0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIhvBPhqjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GtxIYBA9A6T1wv/kXDi+GyAQPQO8r3XC//4YnD4YyMDjDD4RvLgTPhCbuMA0ds8Io4tJNDTAfpAMDHIz4cgznHPC2ECyM+Sv1AIOs4BbyReMMsHy/9ZyM7Mzc3JcPsAkVvi4wB/+GcfGR0BpI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiG8EW/hL+EojAyYw+Eby4Ez4Qm7jANHbPNs8f/hnHxsdAFj4SfhKbxLHBfLgZoIQC+vCAHL7AvhKcG9Q+Gr4ScjPhYjOgG/PQMmBAID7AAOEMPhG8uBM+EJu4wDR2zwhjikj0NMB+kAwMcjPhyDOcc8LYQHIz5IgdfO2AW8kXjDLB8v/zszNyXD7AJEw4uMAf/hnHx4dAFL4TPhL+Er4Q/hCyMv/yz/PgwFvJF4wywfL/1UwyM7MWcjOy//NzcntVAAE+EoAVu1E0NP/0z/TADHTB9P/1NHQ+kDUVTBvBAHU0dD6QNP/0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSMiABRzb2wgMC40OS4wAAAADCD4Ye0e2Q==",
    codeHash: "c72bab41b351c73305e1c0c8421f709f90be0c7c4f5cbcd4f6f0b5ff846fe878",
};
module.exports = { DidDocumentContract };