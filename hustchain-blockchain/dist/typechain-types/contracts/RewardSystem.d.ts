import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface RewardSystemInterface extends Interface {
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE" | "MAX_REWARD" | "MIN_DEPOSIT" | "depositTokens" | "getRoleAdmin" | "grantRole" | "hasRole" | "hustToken" | "renounceRole" | "revokeRole" | "rewardStudent" | "rewardTeacher" | "supportsInterface" | "usdtToken" | "withdrawTokens" | "wrappedHustToken"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "StudentRewarded" | "TeacherRewarded" | "TokensDeposited" | "TokensWithdrawn"): EventFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_REWARD", values?: undefined): string;
    encodeFunctionData(functionFragment: "MIN_DEPOSIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositTokens", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hustToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "rewardStudent", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewardTeacher", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "usdtToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawTokens", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "wrappedHustToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_REWARD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MIN_DEPOSIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hustToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardStudent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardTeacher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdtToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrappedHustToken", data: BytesLike): Result;
}
export declare namespace RoleAdminChangedEvent {
    type InputTuple = [
        role: BytesLike,
        previousAdminRole: BytesLike,
        newAdminRole: BytesLike
    ];
    type OutputTuple = [
        role: string,
        previousAdminRole: string,
        newAdminRole: string
    ];
    interface OutputObject {
        role: string;
        previousAdminRole: string;
        newAdminRole: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleGrantedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleRevokedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace StudentRewardedEvent {
    type InputTuple = [
        student: AddressLike,
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ];
    type OutputTuple = [
        student: string,
        hustAmount: bigint,
        usdtAmount: bigint
    ];
    interface OutputObject {
        student: string;
        hustAmount: bigint;
        usdtAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TeacherRewardedEvent {
    type InputTuple = [
        teacher: AddressLike,
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ];
    type OutputTuple = [
        teacher: string,
        hustAmount: bigint,
        usdtAmount: bigint
    ];
    interface OutputObject {
        teacher: string;
        hustAmount: bigint;
        usdtAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokensDepositedEvent {
    type InputTuple = [
        depositor: AddressLike,
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ];
    type OutputTuple = [
        depositor: string,
        hustAmount: bigint,
        usdtAmount: bigint
    ];
    interface OutputObject {
        depositor: string;
        hustAmount: bigint;
        usdtAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TokensWithdrawnEvent {
    type InputTuple = [
        admin: AddressLike,
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ];
    type OutputTuple = [
        admin: string,
        hustAmount: bigint,
        usdtAmount: bigint
    ];
    interface OutputObject {
        admin: string;
        hustAmount: bigint;
        usdtAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface RewardSystem extends BaseContract {
    connect(runner?: ContractRunner | null): RewardSystem;
    waitForDeployment(): Promise<this>;
    interface: RewardSystemInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    MAX_REWARD: TypedContractMethod<[], [bigint], "view">;
    MIN_DEPOSIT: TypedContractMethod<[], [bigint], "view">;
    depositTokens: TypedContractMethod<[
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    grantRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    hasRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    hustToken: TypedContractMethod<[], [string], "view">;
    renounceRole: TypedContractMethod<[
        role: BytesLike,
        callerConfirmation: AddressLike
    ], [
        void
    ], "nonpayable">;
    revokeRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    rewardStudent: TypedContractMethod<[
        student: AddressLike,
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    rewardTeacher: TypedContractMethod<[
        teacher: AddressLike,
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    usdtToken: TypedContractMethod<[], [string], "view">;
    withdrawTokens: TypedContractMethod<[
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    wrappedHustToken: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MAX_REWARD"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "MIN_DEPOSIT"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "depositTokens"): TypedContractMethod<[
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "grantRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "hustToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "renounceRole"): TypedContractMethod<[
        role: BytesLike,
        callerConfirmation: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "revokeRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "rewardStudent"): TypedContractMethod<[
        student: AddressLike,
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "rewardTeacher"): TypedContractMethod<[
        teacher: AddressLike,
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "usdtToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdrawTokens"): TypedContractMethod<[
        hustAmount: BigNumberish,
        usdtAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "wrappedHustToken"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "StudentRewarded"): TypedContractEvent<StudentRewardedEvent.InputTuple, StudentRewardedEvent.OutputTuple, StudentRewardedEvent.OutputObject>;
    getEvent(key: "TeacherRewarded"): TypedContractEvent<TeacherRewardedEvent.InputTuple, TeacherRewardedEvent.OutputTuple, TeacherRewardedEvent.OutputObject>;
    getEvent(key: "TokensDeposited"): TypedContractEvent<TokensDepositedEvent.InputTuple, TokensDepositedEvent.OutputTuple, TokensDepositedEvent.OutputObject>;
    getEvent(key: "TokensWithdrawn"): TypedContractEvent<TokensWithdrawnEvent.InputTuple, TokensWithdrawnEvent.OutputTuple, TokensWithdrawnEvent.OutputObject>;
    filters: {
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "StudentRewarded(address,uint256,uint256)": TypedContractEvent<StudentRewardedEvent.InputTuple, StudentRewardedEvent.OutputTuple, StudentRewardedEvent.OutputObject>;
        StudentRewarded: TypedContractEvent<StudentRewardedEvent.InputTuple, StudentRewardedEvent.OutputTuple, StudentRewardedEvent.OutputObject>;
        "TeacherRewarded(address,uint256,uint256)": TypedContractEvent<TeacherRewardedEvent.InputTuple, TeacherRewardedEvent.OutputTuple, TeacherRewardedEvent.OutputObject>;
        TeacherRewarded: TypedContractEvent<TeacherRewardedEvent.InputTuple, TeacherRewardedEvent.OutputTuple, TeacherRewardedEvent.OutputObject>;
        "TokensDeposited(address,uint256,uint256)": TypedContractEvent<TokensDepositedEvent.InputTuple, TokensDepositedEvent.OutputTuple, TokensDepositedEvent.OutputObject>;
        TokensDeposited: TypedContractEvent<TokensDepositedEvent.InputTuple, TokensDepositedEvent.OutputTuple, TokensDepositedEvent.OutputObject>;
        "TokensWithdrawn(address,uint256,uint256)": TypedContractEvent<TokensWithdrawnEvent.InputTuple, TokensWithdrawnEvent.OutputTuple, TokensWithdrawnEvent.OutputObject>;
        TokensWithdrawn: TypedContractEvent<TokensWithdrawnEvent.InputTuple, TokensWithdrawnEvent.OutputTuple, TokensWithdrawnEvent.OutputObject>;
    };
}
//# sourceMappingURL=RewardSystem.d.ts.map