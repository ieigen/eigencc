/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IEthERC20Bridge,
  IEthERC20BridgeInterface,
} from "../IEthERC20Bridge";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "seqNum",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l1Address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "l2Address",
        type: "address",
      },
    ],
    name: "ActivateCustomToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "seqNum",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l1Address",
        type: "address",
      },
    ],
    name: "DeployToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "seqNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "DepositToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "initialDestination",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "exitNum",
        type: "uint256",
      },
    ],
    name: "WithdrawExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "exitNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "madeExternalCall",
        type: "bool",
      },
    ],
    name: "WithdrawRedirected",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
    ],
    name: "calculateL2TokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasPriceBid",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "callHookData",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "seqNum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositCalldataLength",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "callHookData",
        type: "bytes",
      },
    ],
    name: "getDepositCalldata",
    outputs: [
      {
        internalType: "bool",
        name: "isDeployed",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "depositCalldata",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
    ],
    name: "hasTriedDeploy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "l2CustomTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasPriceBid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "refundAddress",
        type: "address",
      },
    ],
    name: "registerCustomL2Token",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initialDestination",
        type: "address",
      },
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exitNum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "transferExitAndCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "exitNum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "initialDestination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFromL2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IEthERC20Bridge__factory {
  static readonly abi = _abi;
  static createInterface(): IEthERC20BridgeInterface {
    return new utils.Interface(_abi) as IEthERC20BridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEthERC20Bridge {
    return new Contract(address, _abi, signerOrProvider) as IEthERC20Bridge;
  }
}
