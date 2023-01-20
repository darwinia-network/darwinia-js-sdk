/**
 * This is the doc comment for pallet evm calls
 *
 * @module darwinia/electionProviderMultiPhase/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getElectionProviderMultiPhase = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Submit a solution for the unsigned phase.
         * 
         * The dispatch origin fo this call must be __none__.
         * 
         * This submission is checked on the fly. Moreover, this unsigned solution is only
         * validated when submitted to the pool from the **local** node. Effectively, this means
         * that only active validators can submit this transaction when authoring a block (similar
         * to an inherent).
         * 
         * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
         * panic if the solution submitted by the validator is invalid in any way, effectively
         * putting their authoring reward at risk.
         * 
         * No deposit or reward is associated with this submission.
         *
         * @param {unknown} _raw_solution {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>}, score: [U128; 3], round: U32}
         * @param {unknown} _witness {voters: Compact<U32>, targets: Compact<U32>}
         */
        submitUnsigned: async (signer: ethers.Signer, _raw_solution: unknown, _witness: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'submitUnsigned', false, {
                raw_solution: _raw_solution,
                witness: _witness,
	    });
        },

        /**
	 * Similar to {@link: submitUnsigned}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        submitUnsignedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'submitUnsigned', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSubmitUnsignedCall: (_raw_solution: unknown, _witness: unknown) => {
            return buildRuntimeCall(metadata, 'ElectionProviderMultiPhase', 'submitUnsigned', {
                raw_solution: _raw_solution,
                witness: _witness,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSubmitUnsignedCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSubmitUnsignedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ElectionProviderMultiPhase', 'submitUnsigned', argsBytes)
        },

        /**
         * Set a new value for `MinimumUntrustedScore`.
         * 
         * Dispatch origin must be aligned with `T::ForceOrigin`.
         * 
         * This check can be turned off by setting the value to `None`.
         *
         * @param {unknown} _maybe_next_score Enum<{0/None: , 1/Some: [U128; 3]}>
         */
        setMinimumUntrustedScore: async (signer: ethers.Signer, _maybe_next_score: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'setMinimumUntrustedScore', false, {
                maybe_next_score: _maybe_next_score,
	    });
        },

        /**
	 * Similar to {@link: setMinimumUntrustedScore}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setMinimumUntrustedScoreH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'setMinimumUntrustedScore', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetMinimumUntrustedScoreCall: (_maybe_next_score: unknown) => {
            return buildRuntimeCall(metadata, 'ElectionProviderMultiPhase', 'setMinimumUntrustedScore', {
                maybe_next_score: _maybe_next_score,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSetMinimumUntrustedScoreCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetMinimumUntrustedScoreCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ElectionProviderMultiPhase', 'setMinimumUntrustedScore', argsBytes)
        },

        /**
         * Set a solution in the queue, to be handed out to the client of this pallet in the next
         * call to `ElectionProvider::elect`.
         * 
         * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
         * 
         * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
         * feasibility check itself can in principle cause the election process to fail (due to
         * memory/weight constrains).
         *
         * @param {unknown} _supports Vec<([U8; 32], {total: U128, voters: Vec<([U8; 32], U128)>})>
         */
        setEmergencyElectionResult: async (signer: ethers.Signer, _supports: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'setEmergencyElectionResult', false, {
                supports: _supports,
	    });
        },

        /**
	 * Similar to {@link: setEmergencyElectionResult}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setEmergencyElectionResultH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'setEmergencyElectionResult', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetEmergencyElectionResultCall: (_supports: unknown) => {
            return buildRuntimeCall(metadata, 'ElectionProviderMultiPhase', 'setEmergencyElectionResult', {
                supports: _supports,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSetEmergencyElectionResultCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetEmergencyElectionResultCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ElectionProviderMultiPhase', 'setEmergencyElectionResult', argsBytes)
        },

        /**
         * Submit a solution for the signed phase.
         * 
         * The dispatch origin fo this call must be __signed__.
         * 
         * The solution is potentially queued, based on the claimed score and processed at the end
         * of the signed phase.
         * 
         * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
         * might be rewarded, slashed, or get all or a part of the deposit back.
         * 
         * # <weight>
         * Queue size must be provided as witness data.
         * # </weight>
         *
         * @param {unknown} _raw_solution {solution: {votes1: Vec<(Compact<U32>, Compact<U16>)>, votes2: Vec<(Compact<U32>, (Compact<U16>, Compact<U16>), Compact<U16>)>, votes3: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 2], Compact<U16>)>, votes4: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 3], Compact<U16>)>, votes5: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 4], Compact<U16>)>, votes6: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 5], Compact<U16>)>, votes7: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 6], Compact<U16>)>, votes8: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 7], Compact<U16>)>, votes9: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 8], Compact<U16>)>, votes10: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 9], Compact<U16>)>, votes11: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 10], Compact<U16>)>, votes12: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 11], Compact<U16>)>, votes13: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 12], Compact<U16>)>, votes14: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 13], Compact<U16>)>, votes15: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 14], Compact<U16>)>, votes16: Vec<(Compact<U32>, [(Compact<U16>, Compact<U16>); 15], Compact<U16>)>}, score: [U128; 3], round: U32}
         * @param {unknown} _num_signed_submissions U32
         */
        submit: async (signer: ethers.Signer, _raw_solution: unknown, _num_signed_submissions: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'submit', false, {
                raw_solution: _raw_solution,
                num_signed_submissions: _num_signed_submissions,
	    });
        },

        /**
	 * Similar to {@link: submit}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        submitH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ElectionProviderMultiPhase', 'submit', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSubmitCall: (_raw_solution: unknown, _num_signed_submissions: unknown) => {
            return buildRuntimeCall(metadata, 'ElectionProviderMultiPhase', 'submit', {
                raw_solution: _raw_solution,
                num_signed_submissions: _num_signed_submissions,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSubmitCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSubmitCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'ElectionProviderMultiPhase', 'submit', argsBytes)
        },

    }
}
