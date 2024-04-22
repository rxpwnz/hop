/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common.js";

export interface MockPolygonMessengerWrapperInterface extends utils.Interface {
  functions: {
    "SEND_MESSAGE_EVENT_SIG()": FunctionFragment;
    "checkpointManager()": FunctionFragment;
    "fxChildTunnel()": FunctionFragment;
    "fxRoot()": FunctionFragment;
    "l1BridgeAddress()": FunctionFragment;
    "processMessageFromChild(bytes)": FunctionFragment;
    "processedExits(bytes32)": FunctionFragment;
    "receiveMessage(bytes)": FunctionFragment;
    "sendCrossDomainMessage(bytes)": FunctionFragment;
    "setFxChildTunnel(address)": FunctionFragment;
    "verifySender(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "SEND_MESSAGE_EVENT_SIG"
      | "checkpointManager"
      | "fxChildTunnel"
      | "fxRoot"
      | "l1BridgeAddress"
      | "processMessageFromChild"
      | "processedExits"
      | "receiveMessage"
      | "sendCrossDomainMessage"
      | "setFxChildTunnel"
      | "verifySender"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "SEND_MESSAGE_EVENT_SIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkpointManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fxChildTunnel",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fxRoot", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "l1BridgeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "processMessageFromChild",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "processedExits",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveMessage",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendCrossDomainMessage",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxChildTunnel",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySender",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "SEND_MESSAGE_EVENT_SIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkpointManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fxChildTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fxRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l1BridgeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processMessageFromChild",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processedExits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendCrossDomainMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFxChildTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifySender",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockPolygonMessengerWrapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockPolygonMessengerWrapperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<[string]>;

    checkpointManager(overrides?: CallOverrides): Promise<[string]>;

    fxChildTunnel(overrides?: CallOverrides): Promise<[string]>;

    fxRoot(overrides?: CallOverrides): Promise<[string]>;

    l1BridgeAddress(overrides?: CallOverrides): Promise<[string]>;

    processMessageFromChild(
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    processedExits(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    receiveMessage(
      inputData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendCrossDomainMessage(
      _calldata: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFxChildTunnel(
      _fxChildTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifySender(
      l1BridgeCaller: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

  checkpointManager(overrides?: CallOverrides): Promise<string>;

  fxChildTunnel(overrides?: CallOverrides): Promise<string>;

  fxRoot(overrides?: CallOverrides): Promise<string>;

  l1BridgeAddress(overrides?: CallOverrides): Promise<string>;

  processMessageFromChild(
    message: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  processedExits(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  receiveMessage(
    inputData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendCrossDomainMessage(
    _calldata: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFxChildTunnel(
    _fxChildTunnel: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifySender(
    l1BridgeCaller: PromiseOrValue<string>,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

    checkpointManager(overrides?: CallOverrides): Promise<string>;

    fxChildTunnel(overrides?: CallOverrides): Promise<string>;

    fxRoot(overrides?: CallOverrides): Promise<string>;

    l1BridgeAddress(overrides?: CallOverrides): Promise<string>;

    processMessageFromChild(
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    processedExits(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiveMessage(
      inputData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendCrossDomainMessage(
      _calldata: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxChildTunnel(
      _fxChildTunnel: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifySender(
      l1BridgeCaller: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<BigNumber>;

    checkpointManager(overrides?: CallOverrides): Promise<BigNumber>;

    fxChildTunnel(overrides?: CallOverrides): Promise<BigNumber>;

    fxRoot(overrides?: CallOverrides): Promise<BigNumber>;

    l1BridgeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    processMessageFromChild(
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    processedExits(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveMessage(
      inputData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendCrossDomainMessage(
      _calldata: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFxChildTunnel(
      _fxChildTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifySender(
      l1BridgeCaller: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    SEND_MESSAGE_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkpointManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxChildTunnel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l1BridgeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processMessageFromChild(
      message: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    processedExits(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveMessage(
      inputData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendCrossDomainMessage(
      _calldata: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFxChildTunnel(
      _fxChildTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifySender(
      l1BridgeCaller: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
