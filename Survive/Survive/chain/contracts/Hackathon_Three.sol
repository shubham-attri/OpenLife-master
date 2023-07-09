//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

import "./Hackathon.sol";

contract Hackathon_Three
{
    Match[] public match_array;
    uint match_count;

    function searchAndMatch(Donor[] memory donor_array, Recipient memory recipient) public{
        uint donor_id;
        for(uint i=0; i<donor_array.length; i++){
            if(keccak256(abi.encodePacked(donor_array[i].organ_type.organ_type))==keccak256(abi.encodePacked(recipient.organTypeNeeded)) && keccak256(abi.encodePacked(recipient.blood_group))== keccak256(abi.encodePacked(donor_array[i].blood_group)) && donor_array[i].Verified){
                donor_id=i;
                break;
            }
        }

        if(donor_id!=0 && recipient.id!=0 && recipient.isMedicaallyVerified){
            donor_array[donor_id].organ_type.recipient_Id=recipient.id;
            match_count++;
            Match memory new_match=Match(match_count, donor_array[donor_id].organ_type, donor_array[donor_id].id, recipient.id, donor_array[donor_id].store, recipient.store);
            match_array.push(new_match);
        }
    }

    function getArray() public view returns(Match[] memory){
        return match_array;
    }
    function getRecipientAddress(uint id) public view returns(address){
        return match_array[id-1].recipient_address;
    }
    function getDonorAddress(uint id) public view returns(address payable){
        return match_array[id-1].donor_address;
    }
}