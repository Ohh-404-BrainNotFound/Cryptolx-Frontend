pragma solidity ^0.4.17;

contract Account {
    mapping(address => uint) public userMoney;

        modifier restricted() {
            require(userMoney[msg.sender] != 0);
            _;                              
        }

    function createAccount() public {
        userMoney[msg.sender] = 0;
    }

    function redeemBalance() public restricted {
        msg.sender.transfer(userMoney[msg.sender]);
    } 
    
    function buyCourse(address whomCourseBuyed) public payable {
        userMoney[whomCourseBuyed] = userMoney[whomCourseBuyed] + msg.value; 
    }

    function getUserBalance() public returns(uint) {
        if(userMoney[msg.sender] != 0) {
            return userMoney[msg.sender];
        } else {
            return 0;
        }
        // return userMoney[msg.sender];
    }

}