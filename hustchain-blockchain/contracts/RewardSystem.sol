// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./HUSTToken.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract RewardSystem is AccessControl {
    using SafeERC20 for IERC20;
    
    HUSTToken public immutable hustToken;
    IERC20 public immutable wrappedHustToken; // Thêm biến wrapped để sử dụng SafeERC20
    IERC20 public immutable usdtToken;
    
    uint256 public constant MAX_REWARD = 1000e18;
    uint256 public constant MIN_DEPOSIT = 1e18;
    
    event TokensDeposited(address indexed depositor, uint256 hustAmount, uint256 usdtAmount);
    event EnrolledCourse(address indexed student, uint256 hustAmount, uint256 usdtAmount);
    event StudentRewarded(address indexed student, uint256 hustAmount, uint256 usdtAmount);
    event TeacherRewarded(address indexed teacher, uint256 hustAmount, uint256 usdtAmount);
    event TokensWithdrawn(address indexed admin, uint256 hustAmount, uint256 usdtAmount);
    
    error InsufficientBalance();
    error InvalidAmount();
    error ExceedsMaxReward();
    
    constructor(address _hustToken, address _usdtToken) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        hustToken = HUSTToken(_hustToken);
        wrappedHustToken = IERC20(_hustToken); // Wrap HUSTToken thành IERC20
        usdtToken = IERC20(_usdtToken);
    }

    function depositTokens(uint256 hustAmount, uint256 usdtAmount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (hustAmount + usdtAmount < MIN_DEPOSIT) revert InvalidAmount();
        
        if (hustAmount > 0) {
            if (hustToken.balanceOf(msg.sender) < hustAmount) revert InsufficientBalance();
            wrappedHustToken.safeTransferFrom(msg.sender, address(this), hustAmount);
        }
        
        if (usdtAmount > 0) {
            if (usdtToken.balanceOf(msg.sender) < usdtAmount) revert InsufficientBalance();
            usdtToken.safeTransferFrom(msg.sender, address(this), usdtAmount);
        }
        
        
         emit TokensDeposited(msg.sender, hustAmount, usdtAmount);
    }

    function enrollCourse(uint256 hustAmount, uint256 usdtAmount) external {
        if(hustAmount < MIN_DEPOSIT || usdtAmount < MIN_DEPOSIT) revert InvalidAmount();
        if (hustAmount > 0) {
            if (wrappedHustToken.balanceOf(msg.sender) < hustAmount) revert InsufficientBalance();
            wrappedHustToken.safeTransferFrom(msg.sender, address(this), hustAmount);
        }
        if (usdtAmount > 0) {
            if (usdtToken.balanceOf(msg.sender) < usdtAmount) revert InsufficientBalance();
            usdtToken.safeTransferFrom(msg.sender, address(this), usdtAmount);
        }
       emit EnrolledCourse(msg.sender, hustAmount, usdtAmount);
    }

    function rewardToken(address _address,uint256 hustAmount,uint256 usdtAmount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _validateReward(hustAmount, usdtAmount);
        _transferTokens(_address, hustAmount, usdtAmount);
        emit StudentRewarded(_address, hustAmount, usdtAmount);
    }

    function withdrawTokens(uint256 hustAmount,uint256 usdtAmount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (hustAmount > 0) {
            wrappedHustToken.safeTransfer(msg.sender, hustAmount);
        }
        if (usdtAmount > 0) {
            usdtToken.safeTransfer(msg.sender, usdtAmount);
        }
        emit TokensWithdrawn(msg.sender, hustAmount, usdtAmount);
    }

    function getBalances() external onlyRole(DEFAULT_ADMIN_ROLE)  view returns (uint256 hustBalance, uint256 usdtBalance) {
        hustBalance = wrappedHustToken.balanceOf(address(this));
        usdtBalance = usdtToken.balanceOf(address(this));
    }

    // ============ Internal Functions ============

    function _validateReward(uint256 hustAmount, uint256 usdtAmount) internal pure {
        if (hustAmount + usdtAmount == 0) revert InvalidAmount();
        if (hustAmount > MAX_REWARD || usdtAmount > MAX_REWARD) revert ExceedsMaxReward();
    }

    function _transferTokens(address recipient,uint256 hustAmount,uint256 usdtAmount) internal {
        if (hustAmount > 0) {
            if (wrappedHustToken.balanceOf(address(this)) < hustAmount) revert InsufficientBalance();
            wrappedHustToken.safeTransfer(recipient, hustAmount);
        }
        
        if (usdtAmount > 0) {
            if (usdtToken.balanceOf(address(this)) < usdtAmount) revert InsufficientBalance();
            usdtToken.safeTransfer(recipient, usdtAmount);
        }
    }
}