/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IStoreEphemeral,
  IStoreEphemeralInterface,
} from "../../../src/IStore.sol/IStoreEphemeral";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "StoreEphemeralRecord",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "table",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "key",
        type: "bytes32[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "emitEphemeralRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IStoreEphemeral__factory {
  static readonly abi = _abi;
  static createInterface(): IStoreEphemeralInterface {
    return new utils.Interface(_abi) as IStoreEphemeralInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStoreEphemeral {
    return new Contract(address, _abi, signerOrProvider) as IStoreEphemeral;
  }
}