/**
 * This is the doc comment for pallet evm calls
 *
 * @module pangoro/pangolinFeeMarket/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getPangolinFeeMarket = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Any accounts can enroll to be a relayer by lock collateral. The relay fee is optional,
         * the default value is MinimumRelayFee in runtime. (Update market needed)
         * Note: One account can enroll only once.
         *
         * @param {unknown} _lock_collateral U128
         * @param {unknown} _relay_fee Enum<{0/None: , 1/Some: U128}>
         */
        enrollAndLockCollateral: async (signer: ethers.Signer, _lock_collateral: unknown, _relay_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'enrollAndLockCollateral', false, {
                lock_collateral: _lock_collateral,
                relay_fee: _relay_fee,
	    });
        },

        /**
	 * Similar to {@link: enrollAndLockCollateral}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        enrollAndLockCollateralH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'enrollAndLockCollateral', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildEnrollAndLockCollateralCall: (_lock_collateral: unknown, _relay_fee: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinFeeMarket', 'enrollAndLockCollateral', {
                lock_collateral: _lock_collateral,
                relay_fee: _relay_fee,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildEnrollAndLockCollateralCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildEnrollAndLockCollateralCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PangolinFeeMarket', 'enrollAndLockCollateral', argsBytes)
        },

        /**
         * Update locked collateral for enrolled relayer, only supporting lock more. (Update market
         * needed)
         *
         * @param {unknown} _new_collateral U128
         */
        updateLockedCollateral: async (signer: ethers.Signer, _new_collateral: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'updateLockedCollateral', false, {
                new_collateral: _new_collateral,
	    });
        },

        /**
	 * Similar to {@link: updateLockedCollateral}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        updateLockedCollateralH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'updateLockedCollateral', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateLockedCollateralCall: (_new_collateral: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinFeeMarket', 'updateLockedCollateral', {
                new_collateral: _new_collateral,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildUpdateLockedCollateralCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateLockedCollateralCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PangolinFeeMarket', 'updateLockedCollateral', argsBytes)
        },

        /**
         * Update relay fee for enrolled relayer. (Update market needed)
         *
         * @param {unknown} _new_fee U128
         */
        updateRelayFee: async (signer: ethers.Signer, _new_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'updateRelayFee', false, {
                new_fee: _new_fee,
	    });
        },

        /**
	 * Similar to {@link: updateRelayFee}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        updateRelayFeeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'updateRelayFee', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateRelayFeeCall: (_new_fee: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinFeeMarket', 'updateRelayFee', {
                new_fee: _new_fee,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildUpdateRelayFeeCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildUpdateRelayFeeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PangolinFeeMarket', 'updateRelayFee', argsBytes)
        },

        /**
         * Cancel enrolled relayer(Update market needed)
         *
         */
        cancelEnrollment: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'cancelEnrollment', false, {
	    });
        },

        /**
	 * Similar to {@link: cancelEnrollment}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        cancelEnrollmentH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'cancelEnrollment', true);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCancelEnrollmentCall: () => {
            return buildRuntimeCall(metadata, 'PangolinFeeMarket', 'cancelEnrollment', {
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildCancelEnrollmentCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCancelEnrollmentCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PangolinFeeMarket', 'cancelEnrollment', argsBytes)
        },

        /**
         *
         * @param {unknown} _slash_protect U128
         */
        setSlashProtect: async (signer: ethers.Signer, _slash_protect: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'setSlashProtect', false, {
                slash_protect: _slash_protect,
	    });
        },

        /**
	 * Similar to {@link: setSlashProtect}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setSlashProtectH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'setSlashProtect', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetSlashProtectCall: (_slash_protect: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinFeeMarket', 'setSlashProtect', {
                slash_protect: _slash_protect,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSetSlashProtectCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetSlashProtectCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PangolinFeeMarket', 'setSlashProtect', argsBytes)
        },

        /**
         *
         * @param {unknown} _number U32
         */
        setAssignedRelayersNumber: async (signer: ethers.Signer, _number: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'setAssignedRelayersNumber', false, {
                number: _number,
	    });
        },

        /**
	 * Similar to {@link: setAssignedRelayersNumber}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setAssignedRelayersNumberH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinFeeMarket', 'setAssignedRelayersNumber', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetAssignedRelayersNumberCall: (_number: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinFeeMarket', 'setAssignedRelayersNumber', {
                number: _number,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSetAssignedRelayersNumberCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetAssignedRelayersNumberCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'PangolinFeeMarket', 'setAssignedRelayersNumber', argsBytes)
        },

    }
}
