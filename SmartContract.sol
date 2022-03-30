// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.7.6;

contract VerifyCertificate {
    
    //---Issuer is an authority who can store hash of certificate in the blockchain---

    address public issuer;
    mapping (string => bool) private proofs;
   
   //---Storing the address of Issuer in Smart Contract---//
    constructor(){
        issuer = msg.sender;
    }
    
    //--Only Issuer can upload hash in blockchain---//
    function upload_Hash(string memory file_hash) public {
        require(msg.sender == issuer,"You must be a valid issuer to issue certificate");
        storeProof(file_hash);
    }

    //-- Private function which will store hash in blockchain , it also checks that hash should not be blank--//
    function storeProof(string memory proof) private {
        require(bytes(proof).length > 0,"You cannot upload blank hash");
        proofs[proof] = true;
    }

  
    //--- While verifying the certificate one can upload the hash of the Certificate to the function and check if its valid or not---//
    function verifyCertificate(string  memory file_hash) public view returns (bool) {
        require(bytes(file_hash).length > 0,"While verifying hash you cannot keep it blank");
        return hasProof(file_hash);
    }
    
    //--- It will return true if the given certificate is valid ---//
    function hasProof(string memory proof) private view returns(bool) {
        return proofs[proof];
    }
}

