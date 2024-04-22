/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Mock_L1_PolygonMessenger,
  Mock_L1_PolygonMessengerInterface,
} from "../Mock_L1_PolygonMessenger.js";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "syncState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Mock_L1_PolygonMessenger__factory {
  static readonly abi = _abi;
  static createInterface(): Mock_L1_PolygonMessengerInterface {
    return new utils.Interface(_abi) as Mock_L1_PolygonMessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Mock_L1_PolygonMessenger {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Mock_L1_PolygonMessenger;
  }
}
