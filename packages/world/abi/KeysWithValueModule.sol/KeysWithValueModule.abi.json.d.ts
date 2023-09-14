declare const abi: [
  {
    inputs: [
      {
        internalType: "uint256";
        name: "length";
        type: "uint256";
      }
    ];
    name: "FieldLayoutLib_InvalidLength";
    type: "error";
  },
  {
    inputs: [];
    name: "FieldLayoutLib_StaticLengthDoesNotFitInAWord";
    type: "error";
  },
  {
    inputs: [];
    name: "FieldLayoutLib_StaticLengthIsZero";
    type: "error";
  },
  {
    inputs: [];
    name: "NonRootInstallNotSupported";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "string";
        name: "resourceSelector";
        type: "string";
      }
    ];
    name: "RequiredModuleNotFound";
    type: "error";
  },
  {
    inputs: [];
    name: "RootInstallModeNotSupported";
    type: "error";
  },
  {
    inputs: [
      {
        internalType: "uint256";
        name: "length";
        type: "uint256";
      }
    ];
    name: "SchemaLib_InvalidLength";
    type: "error";
  },
  {
    inputs: [];
    name: "SchemaLib_StaticTypeAfterDynamicType";
    type: "error";
  },
  {
    inputs: [];
    name: "_msgSender";
    outputs: [
      {
        internalType: "address";
        name: "sender";
        type: "address";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [];
    name: "_msgValue";
    outputs: [
      {
        internalType: "uint256";
        name: "value";
        type: "uint256";
      }
    ];
    stateMutability: "pure";
    type: "function";
  },
  {
    inputs: [];
    name: "_world";
    outputs: [
      {
        internalType: "address";
        name: "";
        type: "address";
      }
    ];
    stateMutability: "view";
    type: "function";
  },
  {
    inputs: [];
    name: "getName";
    outputs: [
      {
        internalType: "bytes16";
        name: "";
        type: "bytes16";
      }
    ];
    stateMutability: "pure";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes";
        name: "";
        type: "bytes";
      }
    ];
    name: "install";
    outputs: [];
    stateMutability: "pure";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes";
        name: "args";
        type: "bytes";
      }
    ];
    name: "installRoot";
    outputs: [];
    stateMutability: "nonpayable";
    type: "function";
  },
  {
    inputs: [
      {
        internalType: "bytes4";
        name: "interfaceId";
        type: "bytes4";
      }
    ];
    name: "supportsInterface";
    outputs: [
      {
        internalType: "bool";
        name: "";
        type: "bool";
      }
    ];
    stateMutability: "pure";
    type: "function";
  }
];
export default abi;