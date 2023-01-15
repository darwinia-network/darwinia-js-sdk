import { buildRuntimeCall, Dispatch, decodeCall } from "../../../src/call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getBridgeCrabGrandpa = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Verify a target header is finalized according to the given finality proof.
         * 
         * It will use the underlying storage pallet to fetch information about the current
         * authorities and best finalized header in order to verify that the header is finalized.
         * 
         * If successful in verification, it will write the target header to the underlying storage
         * pallet.
         *
         * @param _finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}
         * @param _justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}>}
         */
        submitFinalityProof: async (signer: ethers.Signer, _finality_target: unknown, _justification: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabGrandpa', 'submitFinalityProof', false, _finality_target, _justification);
        },

        submitFinalityProofH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabGrandpa', 'submitFinalityProof', true, data);
        },

        buildSubmitFinalityProofCall: (_finality_target: unknown, _justification: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabGrandpa', 'submitFinalityProof', {
                finality_target: _finality_target,
                justification: _justification,
            });
        },

        buildSubmitFinalityProofCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabGrandpa', 'submitFinalityProof', argsBytes)
        },

        /**
         * Bootstrap the bridge pallet with an initial header and authority set from which to sync.
         * 
         * The initial configuration provided does not need to be the genesis header of the bridged
         * chain, it can be any arbitrary header. You can also provide the next scheduled set
         * change if it is already know.
         * 
         * This function is only allowed to be called from a trusted origin and writes to storage
         * with practically no checks in terms of the validity of the data. It is important that
         * you ensure that valid data is being passed in.
         *
         * @param _init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, is_halted: Bool}
         */
        initialize: async (signer: ethers.Signer, _init_data: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabGrandpa', 'initialize', false, _init_data);
        },

        initializeH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabGrandpa', 'initialize', true, data);
        },

        buildInitializeCall: (_init_data: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabGrandpa', 'initialize', {
                init_data: _init_data,
            });
        },

        buildInitializeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabGrandpa', 'initialize', argsBytes)
        },

        /**
         * Change `PalletOwner`.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param _new_owner: Enum<{0/None: , 1/Some: [U8; 32]}>
         */
        setOwner: async (signer: ethers.Signer, _new_owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabGrandpa', 'setOwner', false, _new_owner);
        },

        setOwnerH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabGrandpa', 'setOwner', true, data);
        },

        buildSetOwnerCall: (_new_owner: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabGrandpa', 'setOwner', {
                new_owner: _new_owner,
            });
        },

        buildSetOwnerCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabGrandpa', 'setOwner', argsBytes)
        },

        /**
         * Halt or resume all pallet operations.
         * 
         * May only be called either by root, or by `PalletOwner`.
         *
         * @param _operational: Bool
         */
        setOperational: async (signer: ethers.Signer, _operational: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabGrandpa', 'setOperational', false, _operational);
        },

        setOperationalH: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeCrabGrandpa', 'setOperational', true, data);
        },

        buildSetOperationalCall: (_operational: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeCrabGrandpa', 'setOperational', {
                operational: _operational,
            });
        },

        buildSetOperationalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'BridgeCrabGrandpa', 'setOperational', argsBytes)
        },

    }
}
