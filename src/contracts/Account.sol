pragma solidity >=0.4.17;

contract Ballot {
    mapping(address=> uint) public userMoney;

        modifier restricted() {
            require(userMoney[msg.sender] != 0);
            _;                              
        }

    function createAccount() public {
        userMoney[msg.sender] = 0;
    }

    function redeemBalance() public restricted {
        //Converting this to address payable first
        payable(msg.sender).transfer(userMoney[msg.sender]);
        userMoney[msg.sender] = 0;
    } 
    
    function buyCourse(address whomCourseBuyed) public payable {
        userMoney[whomCourseBuyed] = userMoney[whomCourseBuyed] + msg.value; 
    }

    function getUserBalance() public view returns(uint) {
        if(userMoney[msg.sender] != 0) {
            return userMoney[msg.sender];
        } else {
            return 0;
        }
        // return userMoney[msg.sender];
    }

}