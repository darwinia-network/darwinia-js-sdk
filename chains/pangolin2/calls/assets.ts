/**
 * This is the doc comment for pallet evm calls
 *
 * @module pangolin2/assets/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getAssets = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Issue a new class of fungible assets from a public origin.
         * 
         * This new asset class has no assets initially and its owner is the origin.
         * 
         * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
         * 
         * Funds of sender are reserved by `AssetDeposit`.
         * 
         * Parameters:
         * - `id`: The identifier of the new asset. This must not be currently in use to identify
         * an existing asset.
         * - `admin`: The admin of this class of assets. The admin is the initial address of each
         * member of the asset class's admin team.
         * - `min_balance`: The minimum balance of this new asset that any single account must
         * have. If an account's balance is reduced below this, then it collapses to zero.
         * 
         * Emits `Created` event when successful.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _admin [U8; 20]
         * @param {unknown} _min_balance U128
         */
        create: async (signer: ethers.Signer, _id: unknown, _admin: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'create', false, {
                id: _id,
                admin: _admin,
                min_balance: _min_balance,
	    });
        },

        /**
	 * Similar to {@link: create}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        createH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'create', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCreateCall: (_id: unknown, _admin: unknown, _min_balance: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'create', {
                id: _id,
                admin: _admin,
                min_balance: _min_balance,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildCreateCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCreateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'create', argsBytes)
        },

        /**
         * Issue a new class of fungible assets from a privileged origin.
         * 
         * This new asset class has no assets initially.
         * 
         * The origin must conform to `ForceOrigin`.
         * 
         * Unlike `create`, no funds are reserved.
         * 
         * - `id`: The identifier of the new asset. This must not be currently in use to identify
         * an existing asset.
         * - `owner`: The owner of this class of assets. The owner has full superuser permissions
         * over this asset, but may later change and configure the permissions using
         * `transfer_ownership` and `set_team`.
         * - `min_balance`: The minimum balance of this new asset that any single account must
         * have. If an account's balance is reduced below this, then it collapses to zero.
         * 
         * Emits `ForceCreated` event when successful.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _is_sufficient Bool
         * @param {unknown} _min_balance Compact<U128>
         */
        forceCreate: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _is_sufficient: unknown, _min_balance: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCreate', false, {
                id: _id,
                owner: _owner,
                is_sufficient: _is_sufficient,
                min_balance: _min_balance,
	    });
        },

        /**
	 * Similar to {@link: forceCreate}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        forceCreateH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCreate', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceCreateCall: (_id: unknown, _owner: unknown, _is_sufficient: unknown, _min_balance: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceCreate', {
                id: _id,
                owner: _owner,
                is_sufficient: _is_sufficient,
                min_balance: _min_balance,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildForceCreateCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceCreateCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceCreate', argsBytes)
        },

        /**
         * Destroy a class of fungible assets.
         * 
         * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
         * owner of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be destroyed. This must identify an existing
         * asset.
         * 
         * Emits `Destroyed` event when successful.
         * 
         * NOTE: It can be helpful to first freeze an asset before destroying it so that you
         * can provide accurate witness information and prevent users from manipulating state
         * in a way that can make it harder to destroy.
         * 
         * Weight: `O(c + p + a)` where:
         * - `c = (witness.accounts - witness.sufficients)`
         * - `s = witness.sufficients`
         * - `a = witness.approvals`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _witness {accounts: Compact<U32>, sufficients: Compact<U32>, approvals: Compact<U32>}
         */
        destroy: async (signer: ethers.Signer, _id: unknown, _witness: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroy', false, {
                id: _id,
                witness: _witness,
	    });
        },

        /**
	 * Similar to {@link: destroy}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        destroyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'destroy', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildDestroyCall: (_id: unknown, _witness: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'destroy', {
                id: _id,
                witness: _witness,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildDestroyCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildDestroyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'destroy', argsBytes)
        },

        /**
         * Mint assets of a particular class.
         * 
         * The origin must be Signed and the sender must be the Issuer of the asset `id`.
         * 
         * - `id`: The identifier of the asset to have some amount minted.
         * - `beneficiary`: The account to be credited with the minted assets.
         * - `amount`: The amount of the asset to be minted.
         * 
         * Emits `Issued` event when successful.
         * 
         * Weight: `O(1)`
         * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _beneficiary [U8; 20]
         * @param {unknown} _amount Compact<U128>
         */
        mint: async (signer: ethers.Signer, _id: unknown, _beneficiary: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'mint', false, {
                id: _id,
                beneficiary: _beneficiary,
                amount: _amount,
	    });
        },

        /**
	 * Similar to {@link: mint}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        mintH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'mint', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildMintCall: (_id: unknown, _beneficiary: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'mint', {
                id: _id,
                beneficiary: _beneficiary,
                amount: _amount,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildMintCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildMintCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'mint', argsBytes)
        },

        /**
         * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
         * 
         * Origin must be Signed and the sender should be the Manager of the asset `id`.
         * 
         * Bails with `NoAccount` if the `who` is already dead.
         * 
         * - `id`: The identifier of the asset to have some amount burned.
         * - `who`: The account to be debited from.
         * - `amount`: The maximum amount by which `who`'s balance should be reduced.
         * 
         * Emits `Burned` with the actual amount burned. If this takes the balance to below the
         * minimum for the asset, then the amount burned is increased to take it to zero.
         * 
         * Weight: `O(1)`
         * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         * @param {unknown} _amount Compact<U128>
         */
        burn: async (signer: ethers.Signer, _id: unknown, _who: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'burn', false, {
                id: _id,
                who: _who,
                amount: _amount,
	    });
        },

        /**
	 * Similar to {@link: burn}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        burnH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'burn', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildBurnCall: (_id: unknown, _who: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'burn', {
                id: _id,
                who: _who,
                amount: _amount,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildBurnCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildBurnCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'burn', argsBytes)
        },

        /**
         * Move some assets from the sender account to another.
         * 
         * Origin must be Signed.
         * 
         * - `id`: The identifier of the asset to have some amount transferred.
         * - `target`: The account to be credited.
         * - `amount`: The amount by which the sender's balance of assets should be reduced and
         * `target`'s balance increased. The amount actually transferred may be slightly greater in
         * the case that the transfer would otherwise take the sender balance above zero but below
         * the minimum balance. Must be greater than zero.
         * 
         * Emits `Transferred` with the actual amount transferred. If this takes the source balance
         * to below the minimum for the asset, then the amount transferred is increased to take it
         * to zero.
         * 
         * Weight: `O(1)`
         * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         * `target`.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _amount Compact<U128>
         */
        transfer: async (signer: ethers.Signer, _id: unknown, _target: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transfer', false, {
                id: _id,
                target: _target,
                amount: _amount,
	    });
        },

        /**
	 * Similar to {@link: transfer}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        transferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transfer', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferCall: (_id: unknown, _target: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transfer', {
                id: _id,
                target: _target,
                amount: _amount,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTransferCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'transfer', argsBytes)
        },

        /**
         * Move some assets from the sender account to another, keeping the sender account alive.
         * 
         * Origin must be Signed.
         * 
         * - `id`: The identifier of the asset to have some amount transferred.
         * - `target`: The account to be credited.
         * - `amount`: The amount by which the sender's balance of assets should be reduced and
         * `target`'s balance increased. The amount actually transferred may be slightly greater in
         * the case that the transfer would otherwise take the sender balance above zero but below
         * the minimum balance. Must be greater than zero.
         * 
         * Emits `Transferred` with the actual amount transferred. If this takes the source balance
         * to below the minimum for the asset, then the amount transferred is increased to take it
         * to zero.
         * 
         * Weight: `O(1)`
         * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         * `target`.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _target [U8; 20]
         * @param {unknown} _amount Compact<U128>
         */
        transferKeepAlive: async (signer: ethers.Signer, _id: unknown, _target: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferKeepAlive', false, {
                id: _id,
                target: _target,
                amount: _amount,
	    });
        },

        /**
	 * Similar to {@link: transferKeepAlive}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        transferKeepAliveH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferKeepAlive', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferKeepAliveCall: (_id: unknown, _target: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferKeepAlive', {
                id: _id,
                target: _target,
                amount: _amount,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTransferKeepAliveCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferKeepAliveCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'transferKeepAlive', argsBytes)
        },

        /**
         * Move some assets from one account to another.
         * 
         * Origin must be Signed and the sender should be the Admin of the asset `id`.
         * 
         * - `id`: The identifier of the asset to have some amount transferred.
         * - `source`: The account to be debited.
         * - `dest`: The account to be credited.
         * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
         * `dest`'s balance increased. The amount actually transferred may be slightly greater in
         * the case that the transfer would otherwise take the `source` balance above zero but
         * below the minimum balance. Must be greater than zero.
         * 
         * Emits `Transferred` with the actual amount transferred. If this takes the source balance
         * to below the minimum for the asset, then the amount transferred is increased to take it
         * to zero.
         * 
         * Weight: `O(1)`
         * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
         * `dest`.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _source [U8; 20]
         * @param {unknown} _dest [U8; 20]
         * @param {unknown} _amount Compact<U128>
         */
        forceTransfer: async (signer: ethers.Signer, _id: unknown, _source: unknown, _dest: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceTransfer', false, {
                id: _id,
                source: _source,
                dest: _dest,
                amount: _amount,
	    });
        },

        /**
	 * Similar to {@link: forceTransfer}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        forceTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceTransfer', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceTransferCall: (_id: unknown, _source: unknown, _dest: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceTransfer', {
                id: _id,
                source: _source,
                dest: _dest,
                amount: _amount,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildForceTransferCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceTransfer', argsBytes)
        },

        /**
         * Disallow further unprivileged transfers from an account.
         * 
         * Origin must be Signed and the sender should be the Freezer of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be frozen.
         * - `who`: The account to be frozen.
         * 
         * Emits `Frozen`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         */
        freeze: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freeze', false, {
                id: _id,
                who: _who,
	    });
        },

        /**
	 * Similar to {@link: freeze}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        freezeH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freeze', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildFreezeCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'freeze', {
                id: _id,
                who: _who,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildFreezeCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildFreezeCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'freeze', argsBytes)
        },

        /**
         * Allow unprivileged transfers from an account again.
         * 
         * Origin must be Signed and the sender should be the Admin of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be frozen.
         * - `who`: The account to be unfrozen.
         * 
         * Emits `Thawed`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _who [U8; 20]
         */
        thaw: async (signer: ethers.Signer, _id: unknown, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thaw', false, {
                id: _id,
                who: _who,
	    });
        },

        /**
	 * Similar to {@link: thaw}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        thawH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thaw', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildThawCall: (_id: unknown, _who: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'thaw', {
                id: _id,
                who: _who,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildThawCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildThawCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'thaw', argsBytes)
        },

        /**
         * Disallow further unprivileged transfers for the asset class.
         * 
         * Origin must be Signed and the sender should be the Freezer of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be frozen.
         * 
         * Emits `Frozen`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         */
        freezeAsset: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freezeAsset', false, {
                id: _id,
	    });
        },

        /**
	 * Similar to {@link: freezeAsset}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        freezeAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'freezeAsset', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildFreezeAssetCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'freezeAsset', {
                id: _id,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildFreezeAssetCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildFreezeAssetCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'freezeAsset', argsBytes)
        },

        /**
         * Allow unprivileged transfers for the asset again.
         * 
         * Origin must be Signed and the sender should be the Admin of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be thawed.
         * 
         * Emits `Thawed`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         */
        thawAsset: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thawAsset', false, {
                id: _id,
	    });
        },

        /**
	 * Similar to {@link: thawAsset}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        thawAssetH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'thawAsset', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildThawAssetCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'thawAsset', {
                id: _id,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildThawAssetCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildThawAssetCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'thawAsset', argsBytes)
        },

        /**
         * Change the Owner of an asset.
         * 
         * Origin must be Signed and the sender should be the Owner of the asset `id`.
         * 
         * - `id`: The identifier of the asset.
         * - `owner`: The new Owner of this asset.
         * 
         * Emits `OwnerChanged`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         */
        transferOwnership: async (signer: ethers.Signer, _id: unknown, _owner: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferOwnership', false, {
                id: _id,
                owner: _owner,
	    });
        },

        /**
	 * Similar to {@link: transferOwnership}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        transferOwnershipH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferOwnership', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferOwnershipCall: (_id: unknown, _owner: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferOwnership', {
                id: _id,
                owner: _owner,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTransferOwnershipCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferOwnershipCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'transferOwnership', argsBytes)
        },

        /**
         * Change the Issuer, Admin and Freezer of an asset.
         * 
         * Origin must be Signed and the sender should be the Owner of the asset `id`.
         * 
         * - `id`: The identifier of the asset to be frozen.
         * - `issuer`: The new Issuer of this asset.
         * - `admin`: The new Admin of this asset.
         * - `freezer`: The new Freezer of this asset.
         * 
         * Emits `TeamChanged`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _issuer [U8; 20]
         * @param {unknown} _admin [U8; 20]
         * @param {unknown} _freezer [U8; 20]
         */
        setTeam: async (signer: ethers.Signer, _id: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setTeam', false, {
                id: _id,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
	    });
        },

        /**
	 * Similar to {@link: setTeam}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setTeamH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setTeam', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetTeamCall: (_id: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'setTeam', {
                id: _id,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSetTeamCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetTeamCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'setTeam', argsBytes)
        },

        /**
         * Set the metadata for an asset.
         * 
         * Origin must be Signed and the sender should be the Owner of the asset `id`.
         * 
         * Funds of sender are reserved according to the formula:
         * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
         * account any already reserved funds.
         * 
         * - `id`: The identifier of the asset to update.
         * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         * - `decimals`: The number of decimals this asset uses to represent one unit.
         * 
         * Emits `MetadataSet`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _name Vec<U8>
         * @param {unknown} _symbol Vec<U8>
         * @param {unknown} _decimals U8
         */
        setMetadata: async (signer: ethers.Signer, _id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMetadata', false, {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
	    });
        },

        /**
	 * Similar to {@link: setMetadata}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        setMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'setMetadata', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetMetadataCall: (_id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'setMetadata', {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildSetMetadataCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildSetMetadataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'setMetadata', argsBytes)
        },

        /**
         * Clear the metadata for an asset.
         * 
         * Origin must be Signed and the sender should be the Owner of the asset `id`.
         * 
         * Any deposit is freed for the asset owner.
         * 
         * - `id`: The identifier of the asset to clear.
         * 
         * Emits `MetadataCleared`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         */
        clearMetadata: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'clearMetadata', false, {
                id: _id,
	    });
        },

        /**
	 * Similar to {@link: clearMetadata}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        clearMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'clearMetadata', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildClearMetadataCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'clearMetadata', {
                id: _id,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildClearMetadataCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildClearMetadataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'clearMetadata', argsBytes)
        },

        /**
         * Force the metadata for an asset to some value.
         * 
         * Origin must be ForceOrigin.
         * 
         * Any deposit is left alone.
         * 
         * - `id`: The identifier of the asset to update.
         * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         * - `decimals`: The number of decimals this asset uses to represent one unit.
         * 
         * Emits `MetadataSet`.
         * 
         * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _name Vec<U8>
         * @param {unknown} _symbol Vec<U8>
         * @param {unknown} _decimals U8
         * @param {unknown} _is_frozen Bool
         */
        forceSetMetadata: async (signer: ethers.Signer, _id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown, _is_frozen: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceSetMetadata', false, {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
                is_frozen: _is_frozen,
	    });
        },

        /**
	 * Similar to {@link: forceSetMetadata}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        forceSetMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceSetMetadata', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceSetMetadataCall: (_id: unknown, _name: unknown, _symbol: unknown, _decimals: unknown, _is_frozen: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceSetMetadata', {
                id: _id,
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
                is_frozen: _is_frozen,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildForceSetMetadataCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceSetMetadataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceSetMetadata', argsBytes)
        },

        /**
         * Clear the metadata for an asset.
         * 
         * Origin must be ForceOrigin.
         * 
         * Any deposit is returned.
         * 
         * - `id`: The identifier of the asset to clear.
         * 
         * Emits `MetadataCleared`.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         */
        forceClearMetadata: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceClearMetadata', false, {
                id: _id,
	    });
        },

        /**
	 * Similar to {@link: forceClearMetadata}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        forceClearMetadataH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceClearMetadata', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceClearMetadataCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceClearMetadata', {
                id: _id,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildForceClearMetadataCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceClearMetadataCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceClearMetadata', argsBytes)
        },

        /**
         * Alter the attributes of a given asset.
         * 
         * Origin must be `ForceOrigin`.
         * 
         * - `id`: The identifier of the asset.
         * - `owner`: The new Owner of this asset.
         * - `issuer`: The new Issuer of this asset.
         * - `admin`: The new Admin of this asset.
         * - `freezer`: The new Freezer of this asset.
         * - `min_balance`: The minimum balance of this new asset that any single account must
         * have. If an account's balance is reduced below this, then it collapses to zero.
         * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
         * value to account for the state bloat associated with its balance storage. If set to
         * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
         * an ED in the Balances pallet or whatever else is used to control user-account state
         * growth).
         * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
         * instructions.
         * 
         * Emits `AssetStatusChanged` with the identity of the asset.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _issuer [U8; 20]
         * @param {unknown} _admin [U8; 20]
         * @param {unknown} _freezer [U8; 20]
         * @param {unknown} _min_balance Compact<U128>
         * @param {unknown} _is_sufficient Bool
         * @param {unknown} _is_frozen Bool
         */
        forceAssetStatus: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown, _min_balance: unknown, _is_sufficient: unknown, _is_frozen: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceAssetStatus', false, {
                id: _id,
                owner: _owner,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
                min_balance: _min_balance,
                is_sufficient: _is_sufficient,
                is_frozen: _is_frozen,
	    });
        },

        /**
	 * Similar to {@link: forceAssetStatus}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        forceAssetStatusH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceAssetStatus', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceAssetStatusCall: (_id: unknown, _owner: unknown, _issuer: unknown, _admin: unknown, _freezer: unknown, _min_balance: unknown, _is_sufficient: unknown, _is_frozen: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceAssetStatus', {
                id: _id,
                owner: _owner,
                issuer: _issuer,
                admin: _admin,
                freezer: _freezer,
                min_balance: _min_balance,
                is_sufficient: _is_sufficient,
                is_frozen: _is_frozen,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildForceAssetStatusCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceAssetStatusCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceAssetStatus', argsBytes)
        },

        /**
         * Approve an amount of asset for transfer by a delegated third-party account.
         * 
         * Origin must be Signed.
         * 
         * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
         * for the purpose of holding the approval. If some non-zero amount of assets is already
         * approved from signing account to `delegate`, then it is topped up or unreserved to
         * meet the right value.
         * 
         * NOTE: The signing account does not need to own `amount` of assets at the point of
         * making this call.
         * 
         * - `id`: The identifier of the asset.
         * - `delegate`: The account to delegate permission to transfer asset.
         * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
         * already an approval in place, then this acts additively.
         * 
         * Emits `ApprovedTransfer` on success.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _delegate [U8; 20]
         * @param {unknown} _amount Compact<U128>
         */
        approveTransfer: async (signer: ethers.Signer, _id: unknown, _delegate: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'approveTransfer', false, {
                id: _id,
                delegate: _delegate,
                amount: _amount,
	    });
        },

        /**
	 * Similar to {@link: approveTransfer}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        approveTransferH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'approveTransfer', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildApproveTransferCall: (_id: unknown, _delegate: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'approveTransfer', {
                id: _id,
                delegate: _delegate,
                amount: _amount,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildApproveTransferCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildApproveTransferCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'approveTransfer', argsBytes)
        },

        /**
         * Cancel all of some asset approved for delegated transfer by a third-party account.
         * 
         * Origin must be Signed and there must be an approval in place between signer and
         * `delegate`.
         * 
         * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         * 
         * - `id`: The identifier of the asset.
         * - `delegate`: The account delegated permission to transfer asset.
         * 
         * Emits `ApprovalCancelled` on success.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _delegate [U8; 20]
         */
        cancelApproval: async (signer: ethers.Signer, _id: unknown, _delegate: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'cancelApproval', false, {
                id: _id,
                delegate: _delegate,
	    });
        },

        /**
	 * Similar to {@link: cancelApproval}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        cancelApprovalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'cancelApproval', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCancelApprovalCall: (_id: unknown, _delegate: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'cancelApproval', {
                id: _id,
                delegate: _delegate,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildCancelApprovalCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildCancelApprovalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'cancelApproval', argsBytes)
        },

        /**
         * Cancel all of some asset approved for delegated transfer by a third-party account.
         * 
         * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
         * account of the asset `id`.
         * 
         * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         * 
         * - `id`: The identifier of the asset.
         * - `delegate`: The account delegated permission to transfer asset.
         * 
         * Emits `ApprovalCancelled` on success.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _delegate [U8; 20]
         */
        forceCancelApproval: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _delegate: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCancelApproval', false, {
                id: _id,
                owner: _owner,
                delegate: _delegate,
	    });
        },

        /**
	 * Similar to {@link: forceCancelApproval}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        forceCancelApprovalH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'forceCancelApproval', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceCancelApprovalCall: (_id: unknown, _owner: unknown, _delegate: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'forceCancelApproval', {
                id: _id,
                owner: _owner,
                delegate: _delegate,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildForceCancelApprovalCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildForceCancelApprovalCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'forceCancelApproval', argsBytes)
        },

        /**
         * Transfer some asset balance from a previously delegated account to some third-party
         * account.
         * 
         * Origin must be Signed and there must be an approval in place by the `owner` to the
         * signer.
         * 
         * If the entire amount approved for transfer is transferred, then any deposit previously
         * reserved by `approve_transfer` is unreserved.
         * 
         * - `id`: The identifier of the asset.
         * - `owner`: The account which previously approved for a transfer of at least `amount` and
         * from which the asset balance will be withdrawn.
         * - `destination`: The account to which the asset balance of `amount` will be transferred.
         * - `amount`: The amount of assets to transfer.
         * 
         * Emits `TransferredApproved` on success.
         * 
         * Weight: `O(1)`
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _owner [U8; 20]
         * @param {unknown} _destination [U8; 20]
         * @param {unknown} _amount Compact<U128>
         */
        transferApproved: async (signer: ethers.Signer, _id: unknown, _owner: unknown, _destination: unknown, _amount: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferApproved', false, {
                id: _id,
                owner: _owner,
                destination: _destination,
                amount: _amount,
	    });
        },

        /**
	 * Similar to {@link: transferApproved}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        transferApprovedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'transferApproved', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferApprovedCall: (_id: unknown, _owner: unknown, _destination: unknown, _amount: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'transferApproved', {
                id: _id,
                owner: _owner,
                destination: _destination,
                amount: _amount,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTransferApprovedCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTransferApprovedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'transferApproved', argsBytes)
        },

        /**
         * Create an asset account for non-provider assets.
         * 
         * A deposit will be taken from the signer account.
         * 
         * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
         *   to be taken.
         * - `id`: The identifier of the asset for the account to be created.
         * 
         * Emits `Touched` event when successful.
         *
         * @param {unknown} _id Compact<U64>
         */
        touch: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touch', false, {
                id: _id,
	    });
        },

        /**
	 * Similar to {@link: touch}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        touchH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'touch', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTouchCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'touch', {
                id: _id,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildTouchCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildTouchCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'touch', argsBytes)
        },

        /**
         * Return the deposit (if any) of an asset account.
         * 
         * The origin must be Signed.
         * 
         * - `id`: The identifier of the asset for the account to be created.
         * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
         * 
         * Emits `Refunded` event when successful.
         *
         * @param {unknown} _id Compact<U64>
         * @param {unknown} _allow_burn Bool
         */
        refund: async (signer: ethers.Signer, _id: unknown, _allow_burn: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refund', false, {
                id: _id,
                allow_burn: _allow_burn,
	    });
        },

        /**
	 * Similar to {@link: refund}, but with scale encoded args.
	 *
	 * @param {BytesLike} argsBytes the args bytes
	 */
        refundH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Assets', 'refund', true, argsBytes);
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 *
	 * @returns {CallAsParam} 
	 */
        buildRefundCall: (_id: unknown, _allow_burn: unknown) => {
            return buildRuntimeCall(metadata, 'Assets', 'refund', {
                id: _id,
                allow_burn: _allow_burn,
            });
        },

        /**
	 * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
	 * Similar to buildRefundCall, but with scale encoded args.
	 *
	 * @returns {CallAsParam} 
	 */
        buildRefundCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Assets', 'refund', argsBytes)
        },

    }
}
