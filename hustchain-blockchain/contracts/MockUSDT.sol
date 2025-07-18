// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDT is ERC20 {
    constructor() ERC20("Mock USDT", "USDT") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals()); // 1 triệu USDT
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
