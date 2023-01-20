/**
 * This is the doc comment for pallet evm calls
 *
 * @module darwinia/ecdsaAuthority/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getEcdsaAuthority = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Add a authority and trigger `on_authorities_change`.
         * 
         * Not allow to call while authorities is changing.
         * This will insert new authority into the index 0 of authorities.
         *
         * @param {unknown} _new [U8; 20]
         */
        addAuthority: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'addAuthority', false, {
                new: _new,
	    });
        },

        /**
	 * Similar to {@link: addAuthority}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        addAuthorityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'addAuthority', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildAddAuthorityCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'addAuthority', {
                new: _new,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildAddAuthorityCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildAddAuthorityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'addAuthority', argsBytes)
        },

        /**
         * Remove a authority and trigger `on_authorities_change`.
         * 
         * Not allow to call while authorities is changing.
         *
         * @param {unknown} _old [U8; 20]
         */
        removeAuthority: async (signer: ethers.Signer, _old: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'removeAuthority', false, {
                old: _old,
	    });
        },

        /**
	 * Similar to {@link: removeAuthority}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        removeAuthorityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'removeAuthority', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildRemoveAuthorityCall: (_old: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'removeAuthority', {
                old: _old,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildRemoveAuthorityCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildRemoveAuthorityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'removeAuthority', argsBytes)
        },

        /**
         * Swap the old authority with the new authority and trigger `on_authorities_change`.
         * 
         * Not allow to call while authorities is changing.
         *
         * @param {unknown} _old [U8; 20]
         * @param {unknown} _new [U8; 20]
         */
        swapAuthority: async (signer: ethers.Signer, _old: unknown, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'swapAuthority', false, {
                old: _old,
                new: _new,
	    });
        },

        /**
	 * Similar to {@link: swapAuthority}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        swapAuthorityH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'swapAuthority', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSwapAuthorityCall: (_old: unknown, _new: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'swapAuthority', {
                old: _old,
                new: _new,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSwapAuthorityCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSwapAuthorityCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'swapAuthority', argsBytes)
        },

        /**
         * Submit the authorities change signature.
         * 
         * Free to submit the first-correct signature.
         *
         * @param {unknown} _address [U8; 20]
         * @param {unknown} _signature [U8; 65]
         */
        submitAuthoritiesChangeSignature: async (signer: ethers.Signer, _address: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', false, {
                address: _address,
                signature: _signature,
	    });
        },

        /**
	 * Similar to {@link: submitAuthoritiesChangeSignature}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        submitAuthoritiesChangeSignatureH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSubmitAuthoritiesChangeSignatureCall: (_address: unknown, _signature: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', {
                address: _address,
                signature: _signature,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSubmitAuthoritiesChangeSignatureCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSubmitAuthoritiesChangeSignatureCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'submitAuthoritiesChangeSignature', argsBytes)
        },

        /**
         * Submit the new message root signature.
         * 
         * Free to submit the first-correct signature.
         *
         * @param {unknown} _address [U8; 20]
         * @param {unknown} _signature [U8; 65]
         */
        submitNewMessageRootSignature: async (signer: ethers.Signer, _address: unknown, _signature: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitNewMessageRootSignature', false, {
                address: _address,
                signature: _signature,
	    });
        },

        /**
	 * Similar to {@link: submitNewMessageRootSignature}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        submitNewMessageRootSignatureH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'EcdsaAuthority', 'submitNewMessageRootSignature', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSubmitNewMessageRootSignatureCall: (_address: unknown, _signature: unknown) => {
            return buildRuntimeCall(metadata, 'EcdsaAuthority', 'submitNewMessageRootSignature', {
                address: _address,
                signature: _signature,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSubmitNewMessageRootSignatureCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSubmitNewMessageRootSignatureCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'EcdsaAuthority', 'submitNewMessageRootSignature', argsBytes)
        },

    }
}
