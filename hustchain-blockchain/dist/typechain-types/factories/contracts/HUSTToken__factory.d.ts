import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { HUSTToken, HUSTTokenInterface } from "../../contracts/HUSTToken";
type HUSTTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HUSTToken__factory extends ContractFactory {
    constructor(...args: HUSTTokenConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<HUSTToken & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): HUSTToken__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f4855535420546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f485553540000000000000000000000000000000000000000000000000000000081525081600390816200008f91906200081c565b508060049081620000a191906200081c565b505050620000b96000801b336200016560201b60201c565b50620000ec7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200016560201b60201c565b506200011f7fe97b137254058bd94f28d2f3eb79e2d34074ffb488d042e3bc958e0a57d2fa22336200016560201b60201c565b506200015f33620001356200026960201b60201c565b600a62000143919062000a93565b621e848062000153919062000ae4565b6200027260201b60201c565b62000c37565b6000620001798383620002ff60201b60201c565b6200025e5760016005600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001fa6200036a60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905062000263565b600090505b92915050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002e75760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401620002de919062000b74565b60405180910390fd5b620002fb600083836200037260201b60201c565b5050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620003c8578060026000828254620003bb919062000b91565b925050819055506200049e565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101562000457578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200044e9392919062000bdd565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620004e9578060026000828254039250508190555062000536565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000595919062000c1a565b60405180910390a3505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200062457607f821691505b6020821081036200063a5762000639620005dc565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006a47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000665565b620006b0868362000665565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620006fd620006f7620006f184620006c8565b620006d2565b620006c8565b9050919050565b6000819050919050565b6200071983620006dc565b62000731620007288262000704565b84845462000672565b825550505050565b600090565b6200074862000739565b620007558184846200070e565b505050565b5b818110156200077d57620007716000826200073e565b6001810190506200075b565b5050565b601f821115620007cc57620007968162000640565b620007a18462000655565b81016020851015620007b1578190505b620007c9620007c08562000655565b8301826200075a565b50505b505050565b600082821c905092915050565b6000620007f160001984600802620007d1565b1980831691505092915050565b60006200080c8383620007de565b9150826002028217905092915050565b6200082782620005a2565b67ffffffffffffffff811115620008435762000842620005ad565b5b6200084f82546200060b565b6200085c82828562000781565b600060209050601f8311600181146200089457600084156200087f578287015190505b6200088b8582620007fe565b865550620008fb565b601f198416620008a48662000640565b60005b82811015620008ce57848901518255600182019150602085019450602081019050620008a7565b86831015620008ee5784890151620008ea601f891682620007de565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620009915780860481111562000969576200096862000903565b5b6001851615620009795780820291505b8081029050620009898562000932565b945062000949565b94509492505050565b600082620009ac576001905062000a7f565b81620009bc576000905062000a7f565b8160018114620009d55760028114620009e05762000a16565b600191505062000a7f565b60ff841115620009f557620009f462000903565b5b8360020a91508482111562000a0f5762000a0e62000903565b5b5062000a7f565b5060208310610133831016604e8410600b841016171562000a505782820a90508381111562000a4a5762000a4962000903565b5b62000a7f565b62000a5f84848460016200093f565b9250905081840481111562000a795762000a7862000903565b5b81810290505b9392505050565b600060ff82169050919050565b600062000aa082620006c8565b915062000aad8362000a86565b925062000adc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200099a565b905092915050565b600062000af182620006c8565b915062000afe83620006c8565b925082820262000b0e81620006c8565b9150828204841483151762000b285762000b2762000903565b5b5092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000b5c8262000b2f565b9050919050565b62000b6e8162000b4f565b82525050565b600060208201905062000b8b600083018462000b63565b92915050565b600062000b9e82620006c8565b915062000bab83620006c8565b925082820190508082111562000bc65762000bc562000903565b5b92915050565b62000bd781620006c8565b82525050565b600060608201905062000bf4600083018662000b63565b62000c03602083018562000bcc565b62000c12604083018462000bcc565b949350505050565b600060208201905062000c31600083018462000bcc565b92915050565b61181d8062000c476000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063a9059cbb11610071578063a9059cbb14610357578063b930908f14610387578063d5391393146103a5578063d547741f146103c3578063dd62ed3e146103df5761012c565b806370a082311461029f57806391d14854146102cf57806395d89b41146102ff5780639dc29fac1461031d578063a217fddf146103395761012c565b8063248a9ca3116100f4578063248a9ca3146101fd5780632f2ff15d1461022d578063313ce5671461024957806336568abe1461026757806340c10f19146102835761012c565b806301ffc9a71461013157806306fdde0314610161578063095ea7b31461017f57806318160ddd146101af57806323b872dd146101cd575b600080fd5b61014b600480360381019061014691906112c3565b61040f565b604051610158919061130b565b60405180910390f35b610169610489565b60405161017691906113b6565b60405180910390f35b6101996004803603810190610194919061146c565b61051b565b6040516101a6919061130b565b60405180910390f35b6101b761053e565b6040516101c491906114bb565b60405180910390f35b6101e760048036038101906101e291906114d6565b610548565b6040516101f4919061130b565b60405180910390f35b6102176004803603810190610212919061155f565b610577565b604051610224919061159b565b60405180910390f35b610247600480360381019061024291906115b6565b610597565b005b6102516105b9565b60405161025e9190611612565b60405180910390f35b610281600480360381019061027c91906115b6565b6105c2565b005b61029d6004803603810190610298919061146c565b61063d565b005b6102b960048036038101906102b4919061162d565b610676565b6040516102c691906114bb565b60405180910390f35b6102e960048036038101906102e491906115b6565b6106be565b6040516102f6919061130b565b60405180910390f35b610307610729565b60405161031491906113b6565b60405180910390f35b6103376004803603810190610332919061146c565b6107bb565b005b6103416107f4565b60405161034e919061159b565b60405180910390f35b610371600480360381019061036c919061146c565b6107fb565b60405161037e919061130b565b60405180910390f35b61038f61081e565b60405161039c919061159b565b60405180910390f35b6103ad610842565b6040516103ba919061159b565b60405180910390f35b6103dd60048036038101906103d891906115b6565b610866565b005b6103f960048036038101906103f4919061165a565b610888565b60405161040691906114bb565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061048257506104818261090f565b5b9050919050565b606060038054610498906116c9565b80601f01602080910402602001604051908101604052809291908181526020018280546104c4906116c9565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b5050505050905090565b600080610526610979565b9050610533818585610981565b600191505092915050565b6000600254905090565b600080610553610979565b9050610560858285610993565b61056b858585610a28565b60019150509392505050565b600060056000838152602001908152602001600020600101549050919050565b6105a082610577565b6105a981610b1c565b6105b38383610b30565b50505050565b60006012905090565b6105ca610979565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461062e576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106388282610c22565b505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661066781610b1c565b6106718383610d15565b505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b606060048054610738906116c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610764906116c9565b80156107b15780601f10610786576101008083540402835291602001916107b1565b820191906000526020600020905b81548152906001019060200180831161079457829003601f168201915b5050505050905090565b7fe97b137254058bd94f28d2f3eb79e2d34074ffb488d042e3bc958e0a57d2fa226107e581610b1c565b6107ef8383610d97565b505050565b6000801b81565b600080610806610979565b9050610813818585610a28565b600191505092915050565b7fe97b137254058bd94f28d2f3eb79e2d34074ffb488d042e3bc958e0a57d2fa2281565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61086f82610577565b61087881610b1c565b6108828383610c22565b50505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b61098e8383836001610e19565b505050565b600061099f8484610888565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811015610a225781811015610a12578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610a0993929190611709565b60405180910390fd5b610a2184848484036000610e19565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a9a5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610a919190611740565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b0c5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610b039190611740565b60405180910390fd5b610b17838383610ff0565b505050565b610b2d81610b28610979565b611215565b50565b6000610b3c83836106be565b610c175760016005600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610bb4610979565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610c1c565b600090505b92915050565b6000610c2e83836106be565b15610d0a5760006005600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610ca7610979565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050610d0f565b600090505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d875760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610d7e9190611740565b60405180910390fd5b610d9360008383610ff0565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e095760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610e009190611740565b60405180910390fd5b610e1582600083610ff0565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610e8b5760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610e829190611740565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610efd5760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610ef49190611740565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610fea578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610fe191906114bb565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611042578060026000828254611036919061178a565b92505081905550611115565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156110ce578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016110c593929190611709565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361115e57806002600082825403925050819055506111ab565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161120891906114bb565b60405180910390a3505050565b61121f82826106be565b6112625780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016112599291906117be565b60405180910390fd5b5050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6112a08161126b565b81146112ab57600080fd5b50565b6000813590506112bd81611297565b92915050565b6000602082840312156112d9576112d8611266565b5b60006112e7848285016112ae565b91505092915050565b60008115159050919050565b611305816112f0565b82525050565b600060208201905061132060008301846112fc565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611360578082015181840152602081019050611345565b60008484015250505050565b6000601f19601f8301169050919050565b600061138882611326565b6113928185611331565b93506113a2818560208601611342565b6113ab8161136c565b840191505092915050565b600060208201905081810360008301526113d0818461137d565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611403826113d8565b9050919050565b611413816113f8565b811461141e57600080fd5b50565b6000813590506114308161140a565b92915050565b6000819050919050565b61144981611436565b811461145457600080fd5b50565b60008135905061146681611440565b92915050565b6000806040838503121561148357611482611266565b5b600061149185828601611421565b92505060206114a285828601611457565b9150509250929050565b6114b581611436565b82525050565b60006020820190506114d060008301846114ac565b92915050565b6000806000606084860312156114ef576114ee611266565b5b60006114fd86828701611421565b935050602061150e86828701611421565b925050604061151f86828701611457565b9150509250925092565b6000819050919050565b61153c81611529565b811461154757600080fd5b50565b60008135905061155981611533565b92915050565b60006020828403121561157557611574611266565b5b60006115838482850161154a565b91505092915050565b61159581611529565b82525050565b60006020820190506115b0600083018461158c565b92915050565b600080604083850312156115cd576115cc611266565b5b60006115db8582860161154a565b92505060206115ec85828601611421565b9150509250929050565b600060ff82169050919050565b61160c816115f6565b82525050565b60006020820190506116276000830184611603565b92915050565b60006020828403121561164357611642611266565b5b600061165184828501611421565b91505092915050565b6000806040838503121561167157611670611266565b5b600061167f85828601611421565b925050602061169085828601611421565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806116e157607f821691505b6020821081036116f4576116f361169a565b5b50919050565b611703816113f8565b82525050565b600060608201905061171e60008301866116fa565b61172b60208301856114ac565b61173860408301846114ac565b949350505050565b600060208201905061175560008301846116fa565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061179582611436565b91506117a083611436565b92508282019050808211156117b8576117b761175b565b5b92915050565b60006040820190506117d360008301856116fa565b6117e0602083018461158c565b939250505056fea264697066735822122092a8f614b0a6d2633cf217fb119b4fea9cd9a3de458707f676ec450c95087be364736f6c63430008140033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
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
        readonly inputs: readonly [];
        readonly name: "BURN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly name: "MINTER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
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
    static createInterface(): HUSTTokenInterface;
    static connect(address: string, runner?: ContractRunner | null): HUSTToken;
}
export {};
//# sourceMappingURL=HUSTToken__factory.d.ts.map