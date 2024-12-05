// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract ExampleEvent {
    mapping (address => uint) public tokenBalances;

    constructor() {
        tokenBalances[msg.sender] = 100;
    }

    event Transfer(address indexed _from, address indexed _to, uint _amount);

    function sendToken(address _to, uint _amount) public returns (bool) {
        require(tokenBalances[msg.sender] >= _amount, "not enough tokens");
        tokenBalances[msg.sender] -= _amount;
        tokenBalances[_to] += _amount;

        emit Transfer(msg.sender, _to, _amount);
        return true;
    }
}