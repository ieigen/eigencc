/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ArbTokenBridge,
  ArbTokenBridgeInterface,
} from "../ArbTokenBridge";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "l1Address",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2Address",
        type: "address",
      },
    ],
    name: "CustomTokenRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callHookData",
        type: "bytes",
      },
    ],
    name: "MintAndCallTriggered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "l1Address",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2Address",
        type: "address",
      },
    ],
    name: "TokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "l1Address",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenMigrated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "l1Address",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2Address",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "usedCallHook",
        type: "bool",
      },
    ],
    name: "TokenMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawalId",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "exitNum",
        type: "uint256",
      },
    ],
    name: "WithdrawToken",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "l1ERC20",
        type: "address",
      },
    ],
    name: "calculateL2ERC20TokenAddress",
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
        name: "l1ERC20",
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
        name: "",
        type: "address",
      },
    ],
    name: "customL2Token",
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
        name: "l1Address",
        type: "address",
      },
      {
        internalType: "address",
        name: "l2Address",
        type: "address",
      },
    ],
    name: "customTokenRegistered",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ethTokenBridge",
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
    inputs: [],
    name: "getBeacon",
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
        name: "_ethTokenBridge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_templateERC20",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "l1Token",
        type: "address",
      },
    ],
    name: "isCustomToken",
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
        name: "l1ERC20",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
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
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IArbToken",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintAndCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "l1ERC20",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "deployData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "callHookData",
        type: "bytes",
      },
    ],
    name: "mintFromL1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "templateERC20",
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
        name: "l1ERC20",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
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
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613167806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000e25760003560e01c8063998ea6261162000099578063c75e15ca116200006f578063c75e15ca14620005aa578063da0c8cd21462000631578063daef42fc14620006b8578063db70cf6e146200070457620000e2565b8063998ea62614620004705780639de96c5c14620004bc578063a7e28d48146200052357620000e2565b80630b620b8114620000e75780632d6b3a6b146200018c57806334fcff0c14620001d8578063485cc95514620002695780634a33080f14620002d0578063804bf3eb1462000411575b600080fd5b6200017660048036036080811015620000ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506200082f565b6040518082815260200191505060405180910390f35b62000196620009da565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6200026760048036036080811015620001f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505062000a04565b005b620002ce600480360360408110156200028157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062000d2b565b005b6200040f600480360360c0811015620002e857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156200037057600080fd5b8201836020820111156200038357600080fd5b80359060200191846001830284011164010000000083111715620003a657600080fd5b909192939192939080359060200190640100000000811115620003c857600080fd5b820183602082011115620003db57600080fd5b80359060200191846001830284011164010000000083111715620003fe57600080fd5b909192939192939050505062000f4d565b005b62000456600480360360208110156200042957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050620018cb565b604051808215151515815260200191505060405180910390f35b6200047a62001962565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6200052160048036036040811015620004d457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062001988565b005b62000568600480360360208110156200053b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062001b27565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b620005ef60048036036020811015620005c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062001b62565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b62000676600480360360208110156200064957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062001b9d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b620006c262001bd0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6200082d600480360360a08110156200071c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190640100000000811115620007a457600080fd5b820183602082011115620007b757600080fd5b80359060200191846001830284011164010000000083111715620007da57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505062001bf6565b005b6000806200083d8662001b27565b9050620008608173ffffffffffffffffffffffffffffffffffffffff1662001f4b565b6200089b57620008708662001b62565b9050620008938173ffffffffffffffffffffffffffffffffffffffff1662001f4b565b6200089a57fe5b5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161462000921576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180620030a46031913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166374f4f54786856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015620009a957600080fd5b505af1158015620009be573d6000803e3d6000fd5b50505050620009cf86858562001f5e565b915050949350505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b62000a0f84620018cb565b62000a66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180620030536029913960400191505060405180910390fd5b62000a718462001b62565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161462000af6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180620030d56032913960400191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166374f4f54784836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801562000b7e57600080fd5b505af115801562000b93573d6000803e3d6000fd5b50505050600062000ba48562001b27565b905062000bc78173ffffffffffffffffffffffffffffffffffffffff1662001f4b565b62000c1e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806200307c6028913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16638c2a993e84846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801562000ca657600080fd5b505af115801562000cbb573d6000803e3d6000fd5b505050508273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f39a54d7a71ca31798e3d96be34be0322c214765144b2b52e142d763c6c7b86b4846040518082815260200191505060405180910390a35050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000dcf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4c3120706169722063616e27742062652061646472657373203000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161462000e94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f616c726561647920696e6974000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060200162000f289062002643565b6020820181038252601f19601f82011660405250805190602001206002819055505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161462001011576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4f4e4c595f4554485f504149520000000000000000000000000000000000000081525060200191505060405180910390fd5b60006200101e8962001b27565b9050620010418173ffffffffffffffffffffffffffffffffffffffff1662001f4b565b620013c0576000858590501115620010e4576000620010a58a87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505062002227565b90508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620010dd57fe5b50620013bf565b620010ef89620018cb565b15620013a957620011008962001b62565b9050620011238173ffffffffffffffffffffffffffffffffffffffff1662001f4b565b620013a357606060405160200180806020018281038252601b8152602001807f54656d706f72617279204d69677261746561626c6520546f6b656e00000000008152506020019150506040516020818303038152906040526040516020018080602001828103825260038152602001807f544d5400000000000000000000000000000000000000000000000000000000008152506020019150506040516020818303038152906040526012604051602001808260ff1660ff16815260200191505060405160208183030381529060405260405160200180806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156200124057808201518184015260208101905062001223565b50505050905090810190601f1680156200126e5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015620012a95780820151818401526020810190506200128c565b50505050905090810190601f168015620012d75780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101562001312578082015181840152602081019050620012f5565b50505050905090810190601f168015620013405780820380516001836020036101000a031916815260200191505b50965050505050505060405160208183030381529060405290506000620013688b8362002227565b90508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620013a057fe5b50505b620013be565b620013b689898862001f5e565b5050620018c1565b5b5b600081905060008484905011156200174b5760003073ffffffffffffffffffffffffffffffffffffffff1663db70cf6e838a8d8d8a8a6040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050975050505050505050600060405180830381600087803b158015620014f857600080fd5b505af19250505080156200150a575060015b620015cf578173ffffffffffffffffffffffffffffffffffffffff16638c2a993e8b8a6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156200159757600080fd5b505af1925050508015620015a9575060015b620015c557620015bb8b8b8a62001f5e565b50505050620018c1565b60009050620015d4565b600190505b80620015e15789620015e3565b885b73ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167ff0da87d6e758643ce4fd6c31a9fb9ce64b7288ac33e94c2bef66db69a18763298e8c6001604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182151515158152602001935050505060405180910390a48873ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff167fe934ad33409d1a25da34f3e31354e20013f314d227c3d53952d3e130ece06011838b89896040518085151515158152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060405180910390a350620018be565b8073ffffffffffffffffffffffffffffffffffffffff16638c2a993e89896040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015620017d357600080fd5b505af1925050508015620017e5575060015b6200180057620017f78a8a8962001f5e565b505050620018c1565b8773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167ff0da87d6e758643ce4fd6c31a9fb9ce64b7288ac33e94c2bef66db69a18763298d8b6000604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182151515158152602001935050505060405180910390a45b50505b5050505050505050565b60008073ffffffffffffffffffffffffffffffffffffffff166000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161462001a4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4f4e4c595f4554485f504149520000000000000000000000000000000000000081525060200191505060405180910390fd5b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fb49c352f15c140b29f8d25a3b6a611ece53afb8bdbe65ecd185d87b26960317860405160405180910390a35050565b600062001b5b82600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1630600254620023fd565b9050919050565b600062001b9682600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1630600254620024ba565b9050919050565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161462001c98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c660081525060200191505060405180910390fd5b62001cb98273ffffffffffffffffffffffffffffffffffffffff1662001f4b565b62001d2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f44657374696e6174696f6e206d757374206265206120636f6e7472616374000081525060200191505060405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff16638c2a993e83866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801562001db457600080fd5b505af115801562001dc9573d6000803e3d6000fd5b5050505060006109c45a039050805a1162001e30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018062003107602b913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff1663a4c0ed36828688866040518563ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101562001ed957808201518184015260208101905062001ebc565b50505050905090810190601f16801562001f075780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b15801562001f2957600080fd5b5087f115801562001f3e573d6000803e3d6000fd5b5050505050505050505050565b600080823b905060008111915050919050565b600080606473ffffffffffffffffffffffffffffffffffffffff1663928c169a600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1663e0a345fd60e01b600154898989604051602401808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156200210c578082015181840152602081019050620020ef565b50505050905090810190601f1680156200213a5780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b1580156200215b57600080fd5b505af115801562002170573d6000803e3d6000fd5b505050506040513d60208110156200218757600080fd5b810190808051906020019092919050505090506001600081548092919060010191905055506001548473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167f5f46021d14caa00be09900ec076911cd350172076472afa1697c672b8035c17c8487604051808381526020018281526020019250505060405180910390a4809150509392505050565b6000806200225884600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16620024e3565b90506000816040516200226b9062002643565b8190604051809103906000f59050801580156200228c573d6000803e3d6000fd5b5090508073ffffffffffffffffffffffffffffffffffffffff1663189db7d286866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156200233057808201518184015260208101905062002313565b50505050905090810190601f1680156200235e5780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b1580156200237f57600080fd5b505af115801562002394573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fd5f9bdf12adf29dab0248c349842c3822d53ae2bb4f36352f301630d018c813960405160405180910390a3809250505092915050565b6000806000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620024a05780915050620024b2565b620024ae86868686620024ba565b9150505b949350505050565b600080620024c98686620024e3565b9050620024d88184866200257a565b915050949350505050565b60008282604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014019250505060405160208183030381529060405280519060200120905092915050565b60008060ff60f81b83868660405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018381526020018281526020019450505050506040516020818303038152906040528051906020012090508060001c9150509392505050565b610a0180620026528339019056fe608060405234801561001057600080fd5b503373ffffffffffffffffffffffffffffffffffffffff16632d6b3a6b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561005757600080fd5b505afa15801561006b573d6000803e3d6000fd5b505050506040513d602081101561008157600080fd5b810190808051906020019092919050505060405180602001604052806000815250600160405180807f656970313936372e70726f78792e626561636f6e0000000000000000000000008152506014019050604051809103902060001c0360001b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b1461010c57fe5b61011c828261012360201b60201c565b50506105c9565b610136826102e960201b6100371760201c565b61018b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806109826025913960400191505060405180910390fd5b61021e8273ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101d457600080fd5b505afa1580156101e8573d6000803e3d6000fd5b505050506040513d60208110156101fe57600080fd5b81019080805190602001909291905050506102e960201b6100371760201c565b610273576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806109cd6034913960400191505060405180910390fd5b60007fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b90508281556000825111156102e4576102e26102b96102fc60201b60201c565b836040518060600160405280602181526020016109616021913961039160201b61004a1760201c565b505b505050565b600080823b905060008111915050919050565b600061030c6104cc60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561035157600080fd5b505afa158015610365573d6000803e3d6000fd5b505050506040513d602081101561037b57600080fd5b8101908080519060200190929190505050905090565b60606103a2846102e960201b60201c565b6103f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806109a76026913960400191505060405180910390fd5b600060608573ffffffffffffffffffffffffffffffffffffffff16856040518082805190602001908083835b602083106104465780518252602082019150602081019050602083039250610423565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146104a6576040519150601f19603f3d011682016040523d82523d6000602084013e6104ab565b606091505b50915091506104c18282866104fd60201b60201c565b925050509392505050565b6000807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b9050805491505090565b6060831561050d578290506105c2565b6000835111156105205782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561058757808201518184015260208101905061056c565b50505050905090810190601f1680156105b45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b610389806105d86000396000f3fe6080604052366100135761001161001d565b005b61001b61001d565b005b610025610179565b61003561003061017b565b61020a565b565b600080823b905060008111915050919050565b606061005584610037565b6100aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061032e6026913960400191505060405180910390fd5b600060608573ffffffffffffffffffffffffffffffffffffffff16856040518082805190602001908083835b602083106100f957805182526020820191506020810190506020830392506100d6565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610159576040519150601f19603f3d011682016040523d82523d6000602084013e61015e565b606091505b509150915061016e828286610230565b925050509392505050565b565b60006101856102fc565b73ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101ca57600080fd5b505afa1580156101de573d6000803e3d6000fd5b505050506040513d60208110156101f457600080fd5b8101908080519060200190929190505050905090565b3660008037600080366000845af43d6000803e806000811461022b573d6000f35b3d6000fd5b60608315610240578290506102f5565b6000835111156102535782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156102ba57808201518184015260208101905061029f565b50505050905090810190601f1680156102e75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b6000807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b905080549150509056fe416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374a2646970667358221220eb362f8f2508a75c049188662c1e8383c7ecccd29f296943586bb82f8f4682f264736f6c634300060b0033426561636f6e50726f78793a2066756e6374696f6e2063616c6c206661696c6564426561636f6e50726f78793a20626561636f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374426561636f6e50726f78793a20626561636f6e20696d706c656d656e746174696f6e206973206e6f74206120636f6e74726163744e6565647320746f206861766520637573746f6d20746f6b656e20696d706c656d656e746174696f6e4c3220637573746f6d20746f6b656e206d75737420616c7265616479206265206465706c6f79656457697468647261772063616e206f6e6c79206265207472696767657265642062792065787065637465642073656e6465724d6967726174696f6e2073686f756c642062652063616c6c656420627920657263323020746f6b656e20636f6e74726163744d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f77a2646970667358221220301f2b14f8b09489facf4f9d75a1254f48657f016157f2203d11d9b30d745cce64736f6c634300060b0033";

export class ArbTokenBridge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ArbTokenBridge> {
    return super.deploy(overrides || {}) as Promise<ArbTokenBridge>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ArbTokenBridge {
    return super.attach(address) as ArbTokenBridge;
  }
  connect(signer: Signer): ArbTokenBridge__factory {
    return super.connect(signer) as ArbTokenBridge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArbTokenBridgeInterface {
    return new utils.Interface(_abi) as ArbTokenBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbTokenBridge {
    return new Contract(address, _abi, signerOrProvider) as ArbTokenBridge;
  }
}
