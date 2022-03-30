pragma solidity ^0.4.17;

contract VerifyCertificate {
    //---mapping is an associative array, similar to key/value pairs
    // key is bytes32 and value is boolean---
    mapping (string => bool) private proofs;

    //---stores the hash of the lyrics in the mapping---
    function storeProof(string proof) private {
    //require(hash != null);
  //  require(proof!="" );// it should not null && uploaded by manager.
    proofs[proof] = true;
    }

    //---calculate and store the hash (proof) for a song's lyrics---
    function upload_Hash(string file_hash) public {
        storeProof(file_hash);
    }

    //---check if a lyrics has previously been saved---
    function verifyCertificate(string file_hash) public view returns (bool) {
        return hasProof(file_hash);
    }

    //---returns true if proof is found---
    function hasProof(string proof) private view
    returns(bool) {
        return proofs[proof];
    }
}


