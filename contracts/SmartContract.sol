// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Verifile {
    
    address public issuer;
    mapping (bytes => bool) private proofs;
    constructor(){
        issuer = msg.sender;
    }
    function issue(bytes memory file_hash) public {
        require(msg.sender == issuer,"Invalid Issuer");
        storeProof(file_hash);
    }
    function revoke(bytes memory file_hash) public {
        require(msg.sender == issuer , "Invalid Revoker");
        revokeProof(file_hash);
    }

    function storeProof(bytes memory proof) private {
        require(bytes(proof).length > 0,"You cannot upload blank hash");
        proofs[proof] = true;
    }
    function revokeProof(bytes memory proof) private {
        require(bytes(proof).length > 0,"You cannot upload blank hash");
        proofs[proof] = true;
    }

    function verifyCertificate(bytes memory file_hash) public view returns (bool) {
        require(bytes(file_hash).length > 0,"While verifying hash you cannot keep it blank");
        return hasProof(file_hash);
    }

    function hasProof(bytes memory proof) private view returns(bool) {
        return proofs[proof];
    }
}
