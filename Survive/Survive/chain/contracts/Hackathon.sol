//SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;


struct Donor{
        uint id;
        address payable store;
        string name;
        uint age;
        uint contact_number;
        uint verification_number; //This is what we will use for PAN, Passport etc.
        string blood_group;
        Organ organ_type;
        bool status; //1 if alive 0 if dead;
        bool death_contract;// This is for the death contract of the patient
        bool isMedicaallyVerified;// Boolean factor regarding medical history being administered by doctors
        bool Verified;
    }

struct Organ{
    uint organ_Id;
    string organ_type;
    uint donor_Id;
    uint recipient_Id;
}

struct Recipient {
        // Fields to store recipient information, such as name, organ type needed, and contact information.
        uint id;
        address store;
        string name;
        uint age;
        string organTypeNeeded;
        uint contactInfo;
        uint verification_number;
        string blood_group;
        bool isMedicaallyVerified;
    }
    
struct Match
{
    uint id;
    Organ organ;
    uint donor_id;
    uint recipient_id;
    address payable donor_address;
    address recipient_address;
}


contract Hackathon{
    mapping(uint=> Donor) public donor_list;
    
    uint public donor_count;
    uint public organ_count;
    string public location;
    Donor[] public donor_array;

    constructor(string memory place){
        location=place;
    } 

    function addDonor(string memory name, address payable store, uint age, uint contact_number, uint verification_number, string memory blood_group, string memory organ_type, bool status, bool death_contract, bool isMedicaallyVerified) public{
        donor_count++;
        organ_count++;
        Donor memory new_donor= Donor(donor_count, store, name, age, contact_number, verification_number, blood_group, Organ(organ_count, organ_type, 0, 0), status, death_contract, isMedicaallyVerified, false);
        donor_array.push(new_donor);
        donor_list[donor_count]=new_donor;
    }

    function updateMedicalRecords(uint id,bool isMedicaallyVerified) public{
        donor_list[id].isMedicaallyVerified=isMedicaallyVerified;
    }
    function updateDeathContract(uint id, bool death_contract) public{
        donor_list[id].death_contract=death_contract;
    }

    function isVerified(uint id, uint contact_number, uint verification_number) private view returns(bool){
        if(donor_list[id].age>=18 && contact_number==donor_list[id].contact_number && verification_number==donor_list[id].verification_number && ((donor_list[id].death_contract==true && donor_list[id].status==false) || (donor_list[id].status==true)) && donor_list[id].isMedicaallyVerified==true){

            return true;
        }
        return false;
    }

    function removeDonor(uint id) public{
        delete donor_list[id];
    }

    function getDonor(uint id) public view returns(Donor memory){
        return (donor_list[id]);
    }

    function getDonorId(uint id) public view returns(address){
        return donor_list[id].store;
    }

    function siteVerification(uint contact_number, uint verification_number) public returns(bool){
        for(uint i=0; i<donor_array.length; i++){
            if(isVerified(donor_array[i].id, contact_number, verification_number)){
                donor_array[i].Verified=true;
                return true;
            }
        }
        return false;
    }

    function getArray() public view returns(Donor[] memory){
        return donor_array;
    }
}





