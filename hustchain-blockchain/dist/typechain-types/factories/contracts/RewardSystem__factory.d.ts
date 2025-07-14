import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { RewardSystem, RewardSystemInterface } from "../../contracts/RewardSystem";
type RewardSystemConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RewardSystem__factory extends ContractFactory {
    constructor(...args: RewardSystemConstructorParams);
    getDeployTransaction(_hustToken: AddressLike, _usdtToken: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_hustToken: AddressLike, _usdtToken: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RewardSystem & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RewardSystem__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b5060405162001a8338038062001a838339818101604052810190620000379190620002d0565b6200004c6000801b33620000f160201b60201c565b508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050505062000317565b6000620001058383620001f460201b60201c565b620001e957600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001856200025e60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050620001ee565b600090505b92915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000298826200026b565b9050919050565b620002aa816200028b565b8114620002b657600080fd5b50565b600081519050620002ca816200029f565b92915050565b60008060408385031215620002ea57620002e962000266565b5b6000620002fa85828601620002b9565b92505060206200030d85828601620002b9565b9150509250929050565b60805160a05160c0516116f66200038d600039600081816105830152818161068f015281816108e7015281816109bf01528181610e960152610f6d0152600081816104ca0152818161063a0152818161089501528181610d6e0152610e4501526000818161055801526107bd01526116f66000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80639bbc63bd11610097578063ba7bd2aa11610066578063ba7bd2aa1461029b578063d547741f146102b7578063e1e158a5146102d3578063f16ad51e146102f157610100565b80639bbc63bd14610225578063a217fddf14610243578063a98ad46c14610261578063ac81fea31461027f57610100565b806336568abe116100d357806336568abe1461019f5780633be895f7146101bb5780636a42724d146101d757806391d14854146101f557610100565b806301ffc9a7146101055780630e1505e014610135578063248a9ca3146101535780632f2ff15d14610183575b600080fd5b61011f600480360381019061011a9190611208565b61030d565b60405161012c9190611250565b60405180910390f35b61013d610387565b60405161014a9190611284565b60405180910390f35b61016d600480360381019061016891906112d5565b610394565b60405161017a9190611311565b60405180910390f35b61019d6004803603810190610198919061138a565b6103b3565b005b6101b960048036038101906101b4919061138a565b6103d5565b005b6101d560048036038101906101d091906113f6565b610450565b005b6101df6104c8565b6040516101ec91906114a8565b60405180910390f35b61020f600480360381019061020a919061138a565b6104ec565b60405161021c9190611250565b60405180910390f35b61022d610556565b60405161023a91906114e4565b60405180910390f35b61024b61057a565b6040516102589190611311565b60405180910390f35b610269610581565b60405161027691906114a8565b60405180910390f35b610299600480360381019061029491906113f6565b6105a5565b005b6102b560048036038101906102b091906114ff565b61061d565b005b6102d160048036038101906102cc919061138a565b610729565b005b6102db61074b565b6040516102e89190611284565b60405180910390f35b61030b600480360381019061030691906114ff565b610757565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610380575061037f82610a5a565b5b9050919050565b683635c9adc5dea0000081565b6000806000838152602001908152602001600020600101549050919050565b6103bc82610394565b6103c581610ac4565b6103cf8383610ad8565b50505050565b6103dd610bc9565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610441576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61044b8282610bd1565b505050565b6000801b61045d81610ac4565b6104678383610cc3565b610472848484610d62565b8373ffffffffffffffffffffffffffffffffffffffff167f30a28ebb80703b2a083c9e170214d32a84036c6a89b68c26bfa18c858312ead584846040516104ba92919061153f565b60405180910390a250505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000801b81565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000801b6105b281610ac4565b6105bc8383610cc3565b6105c7848484610d62565b8373ffffffffffffffffffffffffffffffffffffffff167fa082be3090d0a41a188216d5d035056c21c832bee4a70ef914bdb89185b9e0b5848460405161060f92919061153f565b60405180910390a250505050565b6000801b61062a81610ac4565b600083111561067f5761067e33847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610fb79092919063ffffffff16565b5b60008211156106d4576106d333837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610fb79092919063ffffffff16565b5b3373ffffffffffffffffffffffffffffffffffffffff167fffe903c0abe6b2dbb2f3474ef43d7a3c1fca49e5a774453423ca8e1952aabffa848460405161071c92919061153f565b60405180910390a2505050565b61073282610394565b61073b81610ac4565b6107458383610bd1565b50505050565b670de0b6b3a764000081565b6000801b61076481610ac4565b670de0b6b3a764000082846107799190611597565b10156107b1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008311156108db57827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161081491906115da565b602060405180830381865afa158015610831573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610855919061160a565b101561088d576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108da3330857f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611036909392919063ffffffff16565b5b6000821115610a0557817f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161093e91906115da565b602060405180830381865afa15801561095b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097f919061160a565b10156109b7576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a043330847f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611036909392919063ffffffff16565b5b3373ffffffffffffffffffffffffffffffffffffffff167ffdfdcf596161b0e81e3161597d46888dcc88bd83b22dcfb341c76377ca3bbc9e8484604051610a4d92919061153f565b60405180910390a2505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ad581610ad0610bc9565b6110b8565b50565b6000610ae483836104ec565b610bbe57600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610b5b610bc9565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610bc3565b600090505b92915050565b600033905090565b6000610bdd83836104ec565b15610cb857600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610c55610bc9565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050610cbd565b600090505b92915050565b60008183610cd19190611597565b03610d08576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b683635c9adc5dea00000821180610d275750683635c9adc5dea0000081115b15610d5e576040517f9efd526000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6000821115610e8a57817f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610dc591906115da565b602060405180830381865afa158015610de2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e06919061160a565b1015610e3e576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e8983837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610fb79092919063ffffffff16565b5b6000811115610fb257807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610eed91906115da565b602060405180830381865afa158015610f0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2e919061160a565b1015610f66576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fb183827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610fb79092919063ffffffff16565b5b505050565b611031838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401610fea929190611637565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611109565b505050565b6110b2848573ffffffffffffffffffffffffffffffffffffffff166323b872dd86868660405160240161106b93929190611660565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611109565b50505050565b6110c282826104ec565b6111055780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016110fc929190611697565b60405180910390fd5b5050565b600080602060008451602086016000885af18061112c576040513d6000823e3d81fd5b3d925060005191505060008214611147576001811415611163565b60008473ffffffffffffffffffffffffffffffffffffffff163b145b156111a557836040517f5274afe700000000000000000000000000000000000000000000000000000000815260040161119c91906115da565b60405180910390fd5b50505050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6111e5816111b0565b81146111f057600080fd5b50565b600081359050611202816111dc565b92915050565b60006020828403121561121e5761121d6111ab565b5b600061122c848285016111f3565b91505092915050565b60008115159050919050565b61124a81611235565b82525050565b60006020820190506112656000830184611241565b92915050565b6000819050919050565b61127e8161126b565b82525050565b60006020820190506112996000830184611275565b92915050565b6000819050919050565b6112b28161129f565b81146112bd57600080fd5b50565b6000813590506112cf816112a9565b92915050565b6000602082840312156112eb576112ea6111ab565b5b60006112f9848285016112c0565b91505092915050565b61130b8161129f565b82525050565b60006020820190506113266000830184611302565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113578261132c565b9050919050565b6113678161134c565b811461137257600080fd5b50565b6000813590506113848161135e565b92915050565b600080604083850312156113a1576113a06111ab565b5b60006113af858286016112c0565b92505060206113c085828601611375565b9150509250929050565b6113d38161126b565b81146113de57600080fd5b50565b6000813590506113f0816113ca565b92915050565b60008060006060848603121561140f5761140e6111ab565b5b600061141d86828701611375565b935050602061142e868287016113e1565b925050604061143f868287016113e1565b9150509250925092565b6000819050919050565b600061146e6114696114648461132c565b611449565b61132c565b9050919050565b600061148082611453565b9050919050565b600061149282611475565b9050919050565b6114a281611487565b82525050565b60006020820190506114bd6000830184611499565b92915050565b60006114ce82611475565b9050919050565b6114de816114c3565b82525050565b60006020820190506114f960008301846114d5565b92915050565b60008060408385031215611516576115156111ab565b5b6000611524858286016113e1565b9250506020611535858286016113e1565b9150509250929050565b60006040820190506115546000830185611275565b6115616020830184611275565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115a28261126b565b91506115ad8361126b565b92508282019050808211156115c5576115c4611568565b5b92915050565b6115d48161134c565b82525050565b60006020820190506115ef60008301846115cb565b92915050565b600081519050611604816113ca565b92915050565b6000602082840312156116205761161f6111ab565b5b600061162e848285016115f5565b91505092915050565b600060408201905061164c60008301856115cb565b6116596020830184611275565b9392505050565b600060608201905061167560008301866115cb565b61168260208301856115cb565b61168f6040830184611275565b949350505050565b60006040820190506116ac60008301856115cb565b6116b96020830184611302565b939250505056fea2646970667358221220daa5da45c68b8bda8e06a15d620c61b6e52786cac5ee8f049e4efcecc69a2d8364736f6c63430008140033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_hustToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_usdtToken";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AccessControlBadConfirmation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "neededRole";
            readonly type: "bytes32";
        }];
        readonly name: "AccessControlUnauthorizedAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExceedsMaxReward";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "SafeERC20FailedOperation";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "student";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hustAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "usdtAmount";
            readonly type: "uint256";
        }];
        readonly name: "StudentRewarded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "teacher";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hustAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "usdtAmount";
            readonly type: "uint256";
        }];
        readonly name: "TeacherRewarded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "depositor";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hustAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "usdtAmount";
            readonly type: "uint256";
        }];
        readonly name: "TokensDeposited";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "admin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hustAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "usdtAmount";
            readonly type: "uint256";
        }];
        readonly name: "TokensWithdrawn";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_REWARD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MIN_DEPOSIT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "hustAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "usdtAmount";
            readonly type: "uint256";
        }];
        readonly name: "depositTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hustToken";
        readonly outputs: readonly [{
            readonly internalType: "contract HUSTToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "callerConfirmation";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "student";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "hustAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "usdtAmount";
            readonly type: "uint256";
        }];
        readonly name: "rewardStudent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "teacher";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "hustAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "usdtAmount";
            readonly type: "uint256";
        }];
        readonly name: "rewardTeacher";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "usdtToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "hustAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "usdtAmount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wrappedHustToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): RewardSystemInterface;
    static connect(address: string, runner?: ContractRunner | null): RewardSystem;
}
export {};
//# sourceMappingURL=RewardSystem__factory.d.ts.map