//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

import "./hackathon.sol";

contract Hackathon_Two{
    mapping(uint=> Recipient) public recipient_list;

    uint public recipient_count;
    Recipient[] recipient_array;


    function addRecipient(string memory name, address store, uint age, string memory organTypeNeeded, uint contactInfo, uint verification_number, string memory blood_group, bool isMedicaallyVerified) public{
        recipient_count++;
        Recipient memory new_recipient=Recipient(recipient_count, store, name, age, organTypeNeeded, contactInfo, verification_number, blood_group, isMedicaallyVerified);
        recipient_list[recipient_count]=new_recipient;
        recipient_array.push(new_recipient);
    }

    function updateMedicalRecords(uint id, bool isMedicaallyVerified) public{
        recipient_list[id].isMedicaallyVerified=isMedicaallyVerified;
    }

    function removeRecipient(uint id) public{
        delete recipient_list[id];
    }
    function getRecipient(uint id) public view returns(Recipient memory){
        return recipient_list[id];
    }

    function getRecipientId(uint id) public view returns(address){
        return recipient_list[id].store;
    }

    function payEther(uint id) public view{
        recipient_list[id].store.balance-(1 ether);
    }

    function getArray() public view returns(Recipient[] memory){
        return recipient_array;
    }
}