import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { MockUSDT, MockUSDTInterface } from "../../contracts/MockUSDT";
type MockUSDTConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockUSDT__factory extends ContractFactory {
    constructor(...args: MockUSDTConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<MockUSDT & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): MockUSDT__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f4d6f636b205553445400000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f555344540000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000629565b508060049081620000a1919062000629565b505050620000e333620000b9620000e960201b60201c565b600a620000c79190620008a0565b620f4240620000d79190620008f1565b620000f260201b60201c565b62000a44565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620001675760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016200015e919062000981565b60405180910390fd5b6200017b600083836200017f60201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620001d5578060026000828254620001c891906200099e565b92505081905550620002ab565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101562000264578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200025b93929190620009ea565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002f6578060026000828254039250508190555062000343565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003a2919062000a27565b60405180910390a3505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200043157607f821691505b602082108103620004475762000446620003e9565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004b17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000472565b620004bd868362000472565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200050a62000504620004fe84620004d5565b620004df565b620004d5565b9050919050565b6000819050919050565b6200052683620004e9565b6200053e620005358262000511565b8484546200047f565b825550505050565b600090565b6200055562000546565b620005628184846200051b565b505050565b5b818110156200058a576200057e6000826200054b565b60018101905062000568565b5050565b601f821115620005d957620005a3816200044d565b620005ae8462000462565b81016020851015620005be578190505b620005d6620005cd8562000462565b83018262000567565b50505b505050565b600082821c905092915050565b6000620005fe60001984600802620005de565b1980831691505092915050565b6000620006198383620005eb565b9150826002028217905092915050565b6200063482620003af565b67ffffffffffffffff81111562000650576200064f620003ba565b5b6200065c825462000418565b620006698282856200058e565b600060209050601f831160018114620006a157600084156200068c578287015190505b6200069885826200060b565b86555062000708565b601f198416620006b1866200044d565b60005b82811015620006db57848901518255600182019150602085019450602081019050620006b4565b86831015620006fb5784890151620006f7601f891682620005eb565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200079e5780860481111562000776576200077562000710565b5b6001851615620007865780820291505b808102905062000796856200073f565b945062000756565b94509492505050565b600082620007b957600190506200088c565b81620007c957600090506200088c565b8160018114620007e25760028114620007ed5762000823565b60019150506200088c565b60ff84111562000802576200080162000710565b5b8360020a9150848211156200081c576200081b62000710565b5b506200088c565b5060208310610133831016604e8410600b84101617156200085d5782820a90508381111562000857576200085662000710565b5b6200088c565b6200086c84848460016200074c565b9250905081840481111562000886576200088562000710565b5b81810290505b9392505050565b600060ff82169050919050565b6000620008ad82620004d5565b9150620008ba8362000893565b9250620008e97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620007a7565b905092915050565b6000620008fe82620004d5565b91506200090b83620004d5565b92508282026200091b81620004d5565b9150828204841483151762000935576200093462000710565b5b5092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000969826200093c565b9050919050565b6200097b816200095c565b82525050565b600060208201905062000998600083018462000970565b92915050565b6000620009ab82620004d5565b9150620009b883620004d5565b9250828201905080821115620009d357620009d262000710565b5b92915050565b620009e481620004d5565b82525050565b600060608201905062000a01600083018662000970565b62000a106020830185620009d9565b62000a1f6040830184620009d9565b949350505050565b600060208201905062000a3e6000830184620009d9565b92915050565b610f0d8062000a546000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806370a082311161006657806370a082311461015d5780637b56c2b21461018d57806395d89b41146101a9578063a9059cbb146101c7578063dd62ed3e146101f75761009e565b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100f157806323b872dd1461010f578063313ce5671461013f575b600080fd5b6100ab610227565b6040516100b89190610b61565b60405180910390f35b6100db60048036038101906100d69190610c1c565b6102b9565b6040516100e89190610c77565b60405180910390f35b6100f96102dc565b6040516101069190610ca1565b60405180910390f35b61012960048036038101906101249190610cbc565b6102e6565b6040516101369190610c77565b60405180910390f35b610147610315565b6040516101549190610d2b565b60405180910390f35b61017760048036038101906101729190610d46565b61031e565b6040516101849190610ca1565b60405180910390f35b6101a760048036038101906101a29190610c1c565b610366565b005b6101b1610374565b6040516101be9190610b61565b60405180910390f35b6101e160048036038101906101dc9190610c1c565b610406565b6040516101ee9190610c77565b60405180910390f35b610211600480360381019061020c9190610d73565b610429565b60405161021e9190610ca1565b60405180910390f35b60606003805461023690610de2565b80601f016020809104026020016040519081016040528092919081815260200182805461026290610de2565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b5050505050905090565b6000806102c46104b0565b90506102d18185856104b8565b600191505092915050565b6000600254905090565b6000806102f16104b0565b90506102fe8582856104ca565b61030985858561055f565b60019150509392505050565b60006012905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6103708282610653565b5050565b60606004805461038390610de2565b80601f01602080910402602001604051908101604052809291908181526020018280546103af90610de2565b80156103fc5780601f106103d1576101008083540402835291602001916103fc565b820191906000526020600020905b8154815290600101906020018083116103df57829003601f168201915b5050505050905090565b6000806104116104b0565b905061041e81858561055f565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6104c583838360016106d5565b505050565b60006104d68484610429565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156105595781811015610549578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161054093929190610e22565b60405180910390fd5b610558848484840360006106d5565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105d15760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105c89190610e59565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106435760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161063a9190610e59565b60405180910390fd5b61064e8383836108ac565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106c55760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106bc9190610e59565b60405180910390fd5b6106d1600083836108ac565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036107475760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161073e9190610e59565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107b95760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016107b09190610e59565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156108a6578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161089d9190610ca1565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108fe5780600260008282546108f29190610ea3565b925050819055506109d1565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561098a578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161098193929190610e22565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a1a5780600260008282540392505081905550610a67565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ac49190610ca1565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b0b578082015181840152602081019050610af0565b60008484015250505050565b6000601f19601f8301169050919050565b6000610b3382610ad1565b610b3d8185610adc565b9350610b4d818560208601610aed565b610b5681610b17565b840191505092915050565b60006020820190508181036000830152610b7b8184610b28565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bb382610b88565b9050919050565b610bc381610ba8565b8114610bce57600080fd5b50565b600081359050610be081610bba565b92915050565b6000819050919050565b610bf981610be6565b8114610c0457600080fd5b50565b600081359050610c1681610bf0565b92915050565b60008060408385031215610c3357610c32610b83565b5b6000610c4185828601610bd1565b9250506020610c5285828601610c07565b9150509250929050565b60008115159050919050565b610c7181610c5c565b82525050565b6000602082019050610c8c6000830184610c68565b92915050565b610c9b81610be6565b82525050565b6000602082019050610cb66000830184610c92565b92915050565b600080600060608486031215610cd557610cd4610b83565b5b6000610ce386828701610bd1565b9350506020610cf486828701610bd1565b9250506040610d0586828701610c07565b9150509250925092565b600060ff82169050919050565b610d2581610d0f565b82525050565b6000602082019050610d406000830184610d1c565b92915050565b600060208284031215610d5c57610d5b610b83565b5b6000610d6a84828501610bd1565b91505092915050565b60008060408385031215610d8a57610d89610b83565b5b6000610d9885828601610bd1565b9250506020610da985828601610bd1565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dfa57607f821691505b602082108103610e0d57610e0c610db3565b5b50919050565b610e1c81610ba8565b82525050565b6000606082019050610e376000830186610e13565b610e446020830185610c92565b610e516040830184610c92565b949350505050565b6000602082019050610e6e6000830184610e13565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610eae82610be6565b9150610eb983610be6565b9250828201905080821115610ed157610ed0610e74565b5b9291505056fea2646970667358221220b18e10975146413749d233ccc0786ffdf1f2d035857cd9c7e67fbed787993d2464736f6c63430008140033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "allowance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidApprover";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSpender";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "faucet";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MockUSDTInterface;
    static connect(address: string, runner?: ContractRunner | null): MockUSDT;
}
export {};
//# sourceMappingURL=MockUSDT__factory.d.ts.map