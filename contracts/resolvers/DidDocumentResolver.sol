pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "../DidDocument.sol";

contract DidDocumentResolver {

    TvmCell _codeDidDocument;

    function resolveCodeHashDidDocument() public view returns (uint256) {
        return tvm.hash(_buildDidDocumetCode());
    }

    function resolveDidDocument(uint256 pubkey) public view returns(address addrDidDocument) {
        TvmCell code = _buildDidDocumetCode();
        TvmCell state = _buildDidDocumentState(code, pubkey);
        uint256 hashState = tvm.hash(state);
        addrData = address.makeAddrStd(0, hashState);
    }

    function _buildDidDocumetCode() internal view returns(TvmCell) {
        TvmBuilder salt;
        salt.store(address(this));
        return tvm.setCodeSalt(_codeDidDocument, salt.toCell());
    }

    function _buildDidDocumentState(TvmCell code, uint256 pubkey) internal view returns(TvmCell) {
        return tvm.buildStateInit({
            contr: DidDocument,
            varInit: {_id: pubkey},
            code: code
        });
    }

}