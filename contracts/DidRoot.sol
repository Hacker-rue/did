pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

import "./resolvers/DidDocumentResolver.sol";

contract DidRoot is DidDocumentResolver {

    string _didName;

    constructor (string didName, TvmCell codeDidDocument) public {
        tvm.accept();
        _didName = didName;
        _codeDidDocument = codeDidDocument;
    }

    function createDid(string didDocument, uint256 pubkey) public {
        require(msg.pubkey() == pubkey);
        TvmCell code = _buildDidDocumetCode();
        TvmCell state = _buildDidDocumentState(code, pubkey);
        new DidDocument {stateInit: state, value: 0.4 ton}(_didName, didDocument, msg.sender);
    }

    function getInfo() public view returns(string didName) {
        didName = _didName;
    }

}