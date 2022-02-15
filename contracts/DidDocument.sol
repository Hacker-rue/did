pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

contract DidDocument {

    enum status { notInitialized, deactivated, activated }

    string _didName;
    uint256 static _id;
    mapping (address => bool) _controllers;

    status _status;

    string _didDocument;


    constructor (string didName, string didDocument, address controller) public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue());
        (address addrRoot) = optSalt.get().toSlice().decode(address);
        require(msg.sender == addrRoot);

        _didName = didName;
        _didDocument = didDocument;
        _controllers[controller] = true;
        _status = status.notInitialized;
    }

    function init() public {
        require(msg.pubkey() == _id);
        _status = status.activated;
    }

    function setDidDocument(string didDocument) public onlyController() {
        _didDocument = didDocument;
    }

    function updateController(address controller, bool status) public onlyController() {
        _controllers[controller] = status;
    }

    function deactivation() public onlyController() {
        _status = status.deactivated;
    }

    function getInfo() public view returns(
        string didName,
        uint256 id,
        string didDocument,
        mapping (address => bool) controllers,
        status status
    ) {
        didName = _didName;
        id = _id;
        didDocument = _didDocument;
        controllers = _controllers;
        status = _status;
    }

    modifier onlyController() {
        require(controllers[msg.sender] == true);
        _;
    }

    


}