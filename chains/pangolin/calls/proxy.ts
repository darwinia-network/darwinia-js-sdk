/**
 * This is the doc comment for pallet `Proxy`'s calls. 
 * 
 * `Proxy`'s storages: {@link: module:pangolin/proxy/storages}
 *
 * @module pangolin/proxy/calls
 */
import { buildRuntimeCall, Dispatch, decodeCall } from "../../../index";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";

export const getProxy = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Dispatch the given `call` from an account that the sender is authorised for through
         * `add_proxy`.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `real`: The account that the proxy will make a call on behalf of.
         * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
         * - `call`: The call to be made by the `real` account.
         *
         * @param {unknown} _real [U8; 20]
         * @param {unknown} _force_proxy_type Enum<{0/None: , 1/Some: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>}>
         * @param {unknown} _call Enum<{0/System: Enum<{0/remark: {remark: Vec<U8>}, 1/set_heap_pages: {pages: U64}, 2/set_code: {code: Vec<U8>}, 3/set_code_without_checks: {code: Vec<U8>}, 4/set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, 5/kill_storage: {keys: Vec<Vec<U8>>}, 6/kill_prefix: {prefix: Vec<U8>, subkeys: U32}, 7/remark_with_event: {remark: Vec<U8>}}>, 1/ParachainSystem: Enum<{0/set_validation_data: {data: {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}}, 1/sudo_send_upward_message: {message: Vec<U8>}, 2/authorize_upgrade: {code_hash: [U8; 32], check_version: Bool}, 3/enact_authorized_upgrade: {code: Vec<U8>}}>, 2/Timestamp: Enum<{0/set: {now: Compact<U64>}}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{0/transfer_allow_death: {dest: [U8; 20], value: Compact<U128>}, 1/set_balance_deprecated: {who: [U8; 20], new_free: Compact<U128>, old_reserved: Compact<U128>}, 2/force_transfer: {source: [U8; 20], dest: [U8; 20], value: Compact<U128>}, 3/transfer_keep_alive: {dest: [U8; 20], value: Compact<U128>}, 4/transfer_all: {dest: [U8; 20], keep_alive: Bool}, 5/force_unreserve: {who: [U8; 20], amount: U128}, 6/upgrade_accounts: {who: Vec<[U8; 20]>}, 7/transfer: {dest: [U8; 20], value: Compact<U128>}, 8/force_set_balance: {who: [U8; 20], new_free: Compact<U128>}}>, 7/Assets: Enum<{0/create: {id: Compact<U64>, admin: [U8; 20], min_balance: U128}, 1/force_create: {id: Compact<U64>, owner: [U8; 20], is_sufficient: Bool, min_balance: Compact<U128>}, 2/start_destroy: {id: Compact<U64>}, 3/destroy_accounts: {id: Compact<U64>}, 4/destroy_approvals: {id: Compact<U64>}, 5/finish_destroy: {id: Compact<U64>}, 6/mint: {id: Compact<U64>, beneficiary: [U8; 20], amount: Compact<U128>}, 7/burn: {id: Compact<U64>, who: [U8; 20], amount: Compact<U128>}, 8/transfer: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 9/transfer_keep_alive: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 10/force_transfer: {id: Compact<U64>, source: [U8; 20], dest: [U8; 20], amount: Compact<U128>}, 11/freeze: {id: Compact<U64>, who: [U8; 20]}, 12/thaw: {id: Compact<U64>, who: [U8; 20]}, 13/freeze_asset: {id: Compact<U64>}, 14/thaw_asset: {id: Compact<U64>}, 15/transfer_ownership: {id: Compact<U64>, owner: [U8; 20]}, 16/set_team: {id: Compact<U64>, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, 17/set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8}, 18/clear_metadata: {id: Compact<U64>}, 19/force_set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, 20/force_clear_metadata: {id: Compact<U64>}, 21/force_asset_status: {id: Compact<U64>, owner: [U8; 20], issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20], min_balance: Compact<U128>, is_sufficient: Bool, is_frozen: Bool}, 22/approve_transfer: {id: Compact<U64>, delegate: [U8; 20], amount: Compact<U128>}, 23/cancel_approval: {id: Compact<U64>, delegate: [U8; 20]}, 24/force_cancel_approval: {id: Compact<U64>, owner: [U8; 20], delegate: [U8; 20]}, 25/transfer_approved: {id: Compact<U64>, owner: [U8; 20], destination: [U8; 20], amount: Compact<U128>}, 26/touch: {id: Compact<U64>}, 27/refund: {id: Compact<U64>, allow_burn: Bool}, 28/set_min_balance: {id: Compact<U64>, min_balance: U128}, 29/touch_other: {id: Compact<U64>, who: [U8; 20]}, 30/refund_other: {id: Compact<U64>, who: [U8; 20]}, 31/block: {id: Compact<U64>, who: [U8; 20]}}>, 9/Deposit: Enum<{0/lock: {amount: U128, months: U8}, 1/claim: , 2/claim_with_penalty: {id: U16}}>, 10/AccountMigration: Enum<{0/migrate: {from: [U8; 32], to: [U8; 20], signature: [U8; 64]}, 1/migrate_multisig: {submitter: [U8; 32], others: Vec<[U8; 32]>, threshold: U16, to: [U8; 20], signature: [U8; 64], new_multisig_params: Enum<{0/None, 1/Some}>}, 2/complete_multisig_migration: {multisig: [U8; 32], submitter: [U8; 32], signature: [U8; 64]}}>, 12/DarwiniaStaking: Enum<{0/stake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 1/unstake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 2/restake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 3/claim: , 4/collect: {commission: U32}, 5/nominate: {target: [U8; 20]}, 6/chill: , 7/set_collator_count: {count: U32}}>, 13/Session: Enum<{0/set_keys: {keys: {aura: [U8; 32]}, proof: Vec<U8>}, 1/purge_keys: }>, 16/MessageGadget: Enum<{0/set_commitment_contract: {commitment_contract: [U8; 20]}}>, 17/EcdsaAuthority: Enum<{0/add_authority: {new: [U8; 20]}, 1/remove_authority: {old: [U8; 20]}, 2/swap_authority: {old: [U8; 20], new: [U8; 20]}, 3/submit_authorities_change_signature: {signature: [U8; 65]}, 4/submit_new_message_root_signature: {signature: [U8; 65]}}>, 18/Democracy: Enum<{0/propose: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>, value: Compact<U128>}, 1/second: {proposal: Compact<U32>}, 2/vote: {ref_index: Compact<U32>, vote: Enum<{0/Standard, 1/Split}>}, 3/emergency_cancel: {ref_index: U32}, 4/external_propose: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 5/external_propose_majority: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 6/external_propose_default: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 7/fast_track: {proposal_hash: [U8; 32], voting_period: U32, delay: U32}, 8/veto_external: {proposal_hash: [U8; 32]}, 9/cancel_referendum: {ref_index: Compact<U32>}, 10/delegate: {to: [U8; 20], conviction: Enum<{0/None, 1/Locked1x, 2/Locked2x, 3/Locked3x, 4/Locked4x, 5/Locked5x, 6/Locked6x}>, balance: U128}, 11/undelegate: , 12/clear_public_proposals: , 13/unlock: {target: [U8; 20]}, 14/remove_vote: {index: U32}, 15/remove_other_vote: {target: [U8; 20], index: U32}, 16/blacklist: {proposal_hash: [U8; 32], maybe_ref_index: Enum<{0/None, 1/Some}>}, 17/cancel_proposal: {prop_index: Compact<U32>}, 18/set_metadata: {owner: Enum<{0/External, 1/Proposal, 2/Referendum}>, maybe_hash: Enum<{0/None, 1/Some}>}}>, 19/Council: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}, 6/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: {ref_time: Compact<U64>, proof_size: Compact<U64>}, length_bound: Compact<U32>}}>, 20/TechnicalCommittee: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}, 6/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: {ref_time: Compact<U64>, proof_size: Compact<U64>}, length_bound: Compact<U32>}}>, 21/PhragmenElection: Enum<{0/vote: {votes: Vec<[U8; 20]>, value: Compact<U128>}, 1/remove_voter: , 2/submit_candidacy: {candidate_count: Compact<U32>}, 3/renounce_candidacy: {renouncing: Enum<{0/Member, 1/RunnerUp, 2/Candidate}>}, 4/remove_member: {who: [U8; 20], slash_bond: Bool, rerun_election: Bool}, 5/clean_defunct_voters: {num_voters: U32, num_defunct: U32}}>, 22/TechnicalMembership: Enum<{0/add_member: {who: [U8; 20]}, 1/remove_member: {who: [U8; 20]}, 2/swap_member: {remove: [U8; 20], add: [U8; 20]}, 3/reset_members: {members: Vec<[U8; 20]>}, 4/change_key: {new: [U8; 20]}, 5/set_prime: {who: [U8; 20]}, 6/clear_prime: }>, 23/Treasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: [U8; 20]}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}, 3/spend: {amount: Compact<U128>, beneficiary: [U8; 20]}, 4/remove_approval: {proposal_id: Compact<U32>}}>, 24/Tips: Enum<{0/report_awesome: {reason: Vec<U8>, who: [U8; 20]}, 1/retract_tip: {hash: [U8; 32]}, 2/tip_new: {reason: Vec<U8>, who: [U8; 20], tip_value: Compact<U128>}, 3/tip: {hash: [U8; 32], tip_value: Compact<U128>}, 4/close_tip: {hash: [U8; 32]}, 5/slash_tip: {hash: [U8; 32]}}>, 25/Sudo: Enum<{0/sudo: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 1/sudo_unchecked_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 2/set_key: {new: [U8; 20]}, 3/sudo_as: {who: [U8; 20], call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}}>, 26/Utility: Enum<{0/batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>>}, 1/as_derivative: {index: U16, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 2/batch_all: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>>}, 3/dispatch_as: {as_origin: Enum<{0/system, 19/Council, 20/TechnicalCommittee, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 36/Ethereum, 38/MessageTransact, 8/Void}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 4/force_batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>>}, 5/with_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 27/Identity: Enum<{0/add_registrar: {account: [U8; 20]}, 1/set_identity: {info: {additional: Vec<(Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>, display: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, legal: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, web: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, riot: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, email: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, pgp_fingerprint: Enum<{0/None, 1/Some}>, image: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, twitter: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}}, 2/set_subs: {subs: Vec<([U8; 20], Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>}, 3/clear_identity: , 4/request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, 5/cancel_request: {reg_index: U32}, 6/set_fee: {index: Compact<U32>, fee: Compact<U128>}, 7/set_account_id: {index: Compact<U32>, new: [U8; 20]}, 8/set_fields: {index: Compact<U32>, fields: U64}, 9/provide_judgement: {reg_index: Compact<U32>, target: [U8; 20], judgement: Enum<{0/Unknown, 1/FeePaid, 2/Reasonable, 3/KnownGood, 4/OutOfDate, 5/LowQuality, 6/Erroneous}>, identity: [U8; 32]}, 10/kill_identity: {target: [U8; 20]}, 11/add_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 12/rename_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 13/remove_sub: {sub: [U8; 20]}, 14/quit_sub: }>, 28/Scheduler: Enum<{0/schedule: {when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 1/cancel: {when: U32, index: U32}, 2/schedule_named: {id: [U8; 32], when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 3/cancel_named: {id: [U8; 32]}, 4/schedule_after: {after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 5/schedule_named_after: {id: [U8; 32], after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}}>, 29/Preimage: Enum<{0/note_preimage: {bytes: Vec<U8>}, 1/unnote_preimage: {hash: [U8; 32]}, 2/request_preimage: {hash: [U8; 32]}, 3/unrequest_preimage: {hash: [U8; 32]}}>, 30/Proxy: Enum<{0/proxy: {real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 1/add_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32}, 2/remove_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32}, 3/remove_proxies: , 4/create_pure: {proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32, index: U16}, 5/kill_pure: {spawner: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, 6/announce: {real: [U8; 20], call_hash: [U8; 32]}, 7/remove_announcement: {real: [U8; 20], call_hash: [U8; 32]}, 8/reject_announcement: {delegate: [U8; 20], call_hash: [U8; 32]}, 9/proxy_announced: {delegate: [U8; 20], real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}}>, 32/XcmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 1/suspend_xcm_execution: , 2/resume_xcm_execution: , 3/update_suspend_threshold: {new: U32}, 4/update_drop_threshold: {new: U32}, 5/update_resume_threshold: {new: U32}, 6/update_threshold_weight: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 7/update_weight_restrict_decay: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 8/update_xcmp_max_individual_weight: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 33/PolkadotXcm: Enum<{0/send: {dest: Enum<{1/V2, 3/V3}>, message: Enum<{2/V2, 3/V3}>}, 1/teleport_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32}, 2/reserve_transfer_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32}, 3/execute: {message: Enum<{2/V2, 3/V3}>, max_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 4/force_xcm_version: {location: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, xcm_version: U32}, 5/force_default_xcm_version: {maybe_xcm_version: Enum<{0/None, 1/Some}>}, 6/force_subscribe_version_notify: {location: Enum<{1/V2, 3/V3}>}, 7/force_unsubscribe_version_notify: {location: Enum<{1/V2, 3/V3}>}, 8/limited_reserve_transfer_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 9/limited_teleport_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 10/force_suspension: {suspended: Bool}}>, 34/CumulusXcm: Enum<{}>, 44/EthereumXcm: Enum<{0/transact: {xcm_transaction: Enum<{0/V1, 1/V2}>}, 1/transact_through_proxy: {transact_as: [U8; 20], xcm_transaction: Enum<{0/V1, 1/V2}>}, 2/suspend_ethereum_xcm_execution: , 3/resume_ethereum_xcm_execution: }>, 35/DmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 45/AssetManager: Enum<{0/register_foreign_asset: {asset: Enum<{0/Xcm}>, metadata: {name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, min_amount: U128, is_sufficient: Bool}, 1/set_asset_units_per_second: {asset_type: Enum<{0/Xcm}>, units_per_second: U128, num_assets_weight_hint: U32}, 2/change_existing_asset_type: {asset_id: U64, new_asset_type: Enum<{0/Xcm}>, num_assets_weight_hint: U32}, 3/remove_supported_asset: {asset_type: Enum<{0/Xcm}>, num_assets_weight_hint: U32}, 4/remove_existing_asset_type: {asset_id: U64, num_assets_weight_hint: U32}, 5/register_local_asset: {creator: [U8; 20], owner: [U8; 20], is_sufficient: Bool, min_balance: U128}, 6/destroy_foreign_asset: {asset_id: U64, num_assets_weight_hint: U32}, 7/destroy_local_asset: {asset_id: U64}}>, 46/XTokens: Enum<{0/transfer: {currency_id: Enum<{0/SelfReserve, 1/ForeignAsset}>, amount: U128, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 1/transfer_multiasset: {asset: Enum<{1/V2, 3/V3}>, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 2/transfer_with_fee: {currency_id: Enum<{0/SelfReserve, 1/ForeignAsset}>, amount: U128, fee: U128, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 3/transfer_multiasset_with_fee: {asset: Enum<{1/V2, 3/V3}>, fee: Enum<{1/V2, 3/V3}>, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 4/transfer_multicurrencies: {currencies: Vec<(Enum<{0/SelfReserve, 1/ForeignAsset}>, U128)>, fee_item: U32, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 5/transfer_multiassets: {assets: Enum<{1/V2, 3/V3}>, fee_item: U32, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}}>, 47/AssetLimit: Enum<{0/set_foreign_asset_limit: {asset_type: Enum<{0/Xcm}>, units_limit: U128}}>, 36/Ethereum: Enum<{0/transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 37/EVM: Enum<{0/withdraw: {address: [U8; 20], value: U128}, 1/call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 2/create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 3/create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, 38/MessageTransact: Enum<{0/message_transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 39/BridgeMoonbaseGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, operating_mode: Enum<{0/Normal, 1/Halted}>}}, 2/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 3/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/Halted}>}}>, 40/BridgeMoonbaseParachain: Enum<{0/submit_parachain_heads: {at_relay_block: (U32, [U8; 32]), parachains: Vec<(U32, [U8; 32])>, parachain_heads_proof: Vec<Vec<U8>>}, 1/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 2/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/Halted}>}}>, 41/BridgePangoroMessages: Enum<{0/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 1/set_operating_mode: {operating_mode: Enum<{0/Basic, 1/RejectingOutboundMessages}>}, 2/update_pallet_parameter: {parameter: ()}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, origin: Enum<{0/SourceRoot, 1/TargetAccount, 2/SourceAccount}>, dispatch_fee_payment: Enum<{0/AtSourceChain, 1/AtTargetChain}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 20], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64, last_delivered_nonce: U64}}}>, 42/BridgePangoroDispatch: Enum<{}>, 43/PangoroFeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{0/None, 1/Some}>}, 1/increase_locked_collateral: {new_collateral: U128}, 2/decrease_locked_collateral: {new_collateral: U128}, 3/update_relay_fee: {new_fee: U128}, 4/cancel_enrollment: , 5/set_slash_protect: {slash_protect: U128}, 6/set_assigned_relayers_number: {number: U32}}>}>
         * @instance
         */
        proxy: async (signer: ethers.Signer, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'proxy', false, {
                real: _real,
                force_proxy_type: _force_proxy_type,
                call: _call,
           });
        },

        /**
         * Similar to {@link: pangolin/proxy/calls/proxy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        proxyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'proxy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildProxyCall: (_real: unknown, _force_proxy_type: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'proxy', {
                real: _real,
                force_proxy_type: _force_proxy_type,
                call: _call,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildProxyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildProxyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'proxy', argsBytes)
        },

        /**
         * Register a proxy account for the sender that is able to make calls on its behalf.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `proxy`: The account that the `caller` would like to make a proxy.
         * - `proxy_type`: The permissions allowed for this proxy account.
         * - `delay`: The announcement period required of the initial proxy. Will generally be
         * zero.
         *
         * @param {unknown} _delegate [U8; 20]
         * @param {unknown} _proxy_type Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>
         * @param {unknown} _delay U32
         * @instance
         */
        addProxy: async (signer: ethers.Signer, _delegate: unknown, _proxy_type: unknown, _delay: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'addProxy', false, {
                delegate: _delegate,
                proxy_type: _proxy_type,
                delay: _delay,
           });
        },

        /**
         * Similar to {@link: pangolin/proxy/calls/addProxy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        addProxyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'addProxy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAddProxyCall: (_delegate: unknown, _proxy_type: unknown, _delay: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'addProxy', {
                delegate: _delegate,
                proxy_type: _proxy_type,
                delay: _delay,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAddProxyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildAddProxyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'addProxy', argsBytes)
        },

        /**
         * Unregister a proxy account for the sender.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `proxy`: The account that the `caller` would like to remove as a proxy.
         * - `proxy_type`: The permissions currently enabled for the removed proxy account.
         *
         * @param {unknown} _delegate [U8; 20]
         * @param {unknown} _proxy_type Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>
         * @param {unknown} _delay U32
         * @instance
         */
        removeProxy: async (signer: ethers.Signer, _delegate: unknown, _proxy_type: unknown, _delay: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'removeProxy', false, {
                delegate: _delegate,
                proxy_type: _proxy_type,
                delay: _delay,
           });
        },

        /**
         * Similar to {@link: pangolin/proxy/calls/removeProxy}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeProxyH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'removeProxy', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveProxyCall: (_delegate: unknown, _proxy_type: unknown, _delay: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'removeProxy', {
                delegate: _delegate,
                proxy_type: _proxy_type,
                delay: _delay,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveProxyCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveProxyCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'removeProxy', argsBytes)
        },

        /**
         * Unregister all proxy accounts for the sender.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * WARNING: This may be called on accounts created by `pure`, however if done, then
         * the unreserved fees will be inaccessible. **All access to this account will be lost.**
         *
         * @instance
         */
        removeProxies: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'removeProxies', false, {
           });
        },

        /**
         * Similar to {@link: pangolin/proxy/calls/removeProxies}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeProxiesH: async (signer: ethers.Signer): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'removeProxies', true);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveProxiesCall: () => {
            return buildRuntimeCall(metadata, 'Proxy', 'removeProxies', {
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveProxiesCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveProxiesCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'removeProxies', argsBytes)
        },

        /**
         * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
         * initialize it with a proxy of `proxy_type` for `origin` sender.
         * 
         * Requires a `Signed` origin.
         * 
         * - `proxy_type`: The type of the proxy that the sender will be registered as over the
         * new account. This will almost always be the most permissive `ProxyType` possible to
         * allow for maximum flexibility.
         * - `index`: A disambiguation index, in case this is called multiple times in the same
         * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
         * want to use `0`.
         * - `delay`: The announcement period required of the initial proxy. Will generally be
         * zero.
         * 
         * Fails with `Duplicate` if this has already been called in this transaction, from the
         * same sender, with the same parameters.
         * 
         * Fails if there are insufficient funds to pay for deposit.
         *
         * @param {unknown} _proxy_type Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>
         * @param {unknown} _delay U32
         * @param {unknown} _index U16
         * @instance
         */
        createPure: async (signer: ethers.Signer, _proxy_type: unknown, _delay: unknown, _index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'createPure', false, {
                proxy_type: _proxy_type,
                delay: _delay,
                index: _index,
           });
        },

        /**
         * Similar to {@link: pangolin/proxy/calls/createPure}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        createPureH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'createPure', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildCreatePureCall: (_proxy_type: unknown, _delay: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'createPure', {
                proxy_type: _proxy_type,
                delay: _delay,
                index: _index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildCreatePureCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildCreatePureCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'createPure', argsBytes)
        },

        /**
         * Removes a previously spawned pure proxy.
         * 
         * WARNING: **All access to this account will be lost.** Any funds held in it will be
         * inaccessible.
         * 
         * Requires a `Signed` origin, and the sender account must have been created by a call to
         * `pure` with corresponding parameters.
         * 
         * - `spawner`: The account that originally called `pure` to create this account.
         * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
         * - `proxy_type`: The proxy type originally passed to `pure`.
         * - `height`: The height of the chain when the call to `pure` was processed.
         * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
         * 
         * Fails with `NoPermission` in case the caller is not a previously created pure
         * account whose `pure` call has corresponding parameters.
         *
         * @param {unknown} _spawner [U8; 20]
         * @param {unknown} _proxy_type Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>
         * @param {unknown} _index U16
         * @param {unknown} _height Compact<U32>
         * @param {unknown} _ext_index Compact<U32>
         * @instance
         */
        killPure: async (signer: ethers.Signer, _spawner: unknown, _proxy_type: unknown, _index: unknown, _height: unknown, _ext_index: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'killPure', false, {
                spawner: _spawner,
                proxy_type: _proxy_type,
                index: _index,
                height: _height,
                ext_index: _ext_index,
           });
        },

        /**
         * Similar to {@link: pangolin/proxy/calls/killPure}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        killPureH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'killPure', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildKillPureCall: (_spawner: unknown, _proxy_type: unknown, _index: unknown, _height: unknown, _ext_index: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'killPure', {
                spawner: _spawner,
                proxy_type: _proxy_type,
                index: _index,
                height: _height,
                ext_index: _ext_index,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildKillPureCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildKillPureCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'killPure', argsBytes)
        },

        /**
         * Publish the hash of a proxy-call that will be made in the future.
         * 
         * This must be called some number of blocks before the corresponding `proxy` is attempted
         * if the delay associated with the proxy relationship is greater than zero.
         * 
         * No more than `MaxPending` announcements may be made at any one time.
         * 
         * This will take a deposit of `AnnouncementDepositFactor` as well as
         * `AnnouncementDepositBase` if there are no other pending announcements.
         * 
         * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
         * 
         * Parameters:
         * - `real`: The account that the proxy will make a call on behalf of.
         * - `call_hash`: The hash of the call to be made by the `real` account.
         *
         * @param {unknown} _real [U8; 20]
         * @param {unknown} _call_hash [U8; 32]
         * @instance
         */
        announce: async (signer: ethers.Signer, _real: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'announce', false, {
                real: _real,
                call_hash: _call_hash,
           });
        },

        /**
         * Similar to {@link: pangolin/proxy/calls/announce}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        announceH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'announce', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildAnnounceCall: (_real: unknown, _call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'announce', {
                real: _real,
                call_hash: _call_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildAnnounceCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildAnnounceCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'announce', argsBytes)
        },

        /**
         * Remove a given announcement.
         * 
         * May be called by a proxy account to remove a call they previously announced and return
         * the deposit.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `real`: The account that the proxy will make a call on behalf of.
         * - `call_hash`: The hash of the call to be made by the `real` account.
         *
         * @param {unknown} _real [U8; 20]
         * @param {unknown} _call_hash [U8; 32]
         * @instance
         */
        removeAnnouncement: async (signer: ethers.Signer, _real: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'removeAnnouncement', false, {
                real: _real,
                call_hash: _call_hash,
           });
        },

        /**
         * Similar to {@link: pangolin/proxy/calls/removeAnnouncement}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        removeAnnouncementH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'removeAnnouncement', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveAnnouncementCall: (_real: unknown, _call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'removeAnnouncement', {
                real: _real,
                call_hash: _call_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRemoveAnnouncementCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRemoveAnnouncementCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'removeAnnouncement', argsBytes)
        },

        /**
         * Remove the given announcement of a delegate.
         * 
         * May be called by a target (proxied) account to remove a call that one of their delegates
         * (`delegate`) has announced they want to execute. The deposit is returned.
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `delegate`: The account that previously announced the call.
         * - `call_hash`: The hash of the call to be made.
         *
         * @param {unknown} _delegate [U8; 20]
         * @param {unknown} _call_hash [U8; 32]
         * @instance
         */
        rejectAnnouncement: async (signer: ethers.Signer, _delegate: unknown, _call_hash: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'rejectAnnouncement', false, {
                delegate: _delegate,
                call_hash: _call_hash,
           });
        },

        /**
         * Similar to {@link: pangolin/proxy/calls/rejectAnnouncement}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        rejectAnnouncementH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'rejectAnnouncement', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildRejectAnnouncementCall: (_delegate: unknown, _call_hash: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'rejectAnnouncement', {
                delegate: _delegate,
                call_hash: _call_hash,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildRejectAnnouncementCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildRejectAnnouncementCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'rejectAnnouncement', argsBytes)
        },

        /**
         * Dispatch the given `call` from an account that the sender is authorized for through
         * `add_proxy`.
         * 
         * Removes any corresponding announcement(s).
         * 
         * The dispatch origin for this call must be _Signed_.
         * 
         * Parameters:
         * - `real`: The account that the proxy will make a call on behalf of.
         * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
         * - `call`: The call to be made by the `real` account.
         *
         * @param {unknown} _delegate [U8; 20]
         * @param {unknown} _real [U8; 20]
         * @param {unknown} _force_proxy_type Enum<{0/None: , 1/Some: Enum<{0/Any: , 1/NonTransfer: , 2/Governance: , 3/Staking: , 4/IdentityJudgement: , 5/CancelProxy: , 6/EcdsaBridge: }>}>
         * @param {unknown} _call Enum<{0/System: Enum<{0/remark: {remark: Vec<U8>}, 1/set_heap_pages: {pages: U64}, 2/set_code: {code: Vec<U8>}, 3/set_code_without_checks: {code: Vec<U8>}, 4/set_storage: {items: Vec<(Vec<U8>, Vec<U8>)>}, 5/kill_storage: {keys: Vec<Vec<U8>>}, 6/kill_prefix: {prefix: Vec<U8>, subkeys: U32}, 7/remark_with_event: {remark: Vec<U8>}}>, 1/ParachainSystem: Enum<{0/set_validation_data: {data: {validation_data: {parent_head: Vec<U8>, relay_parent_number: U32, relay_parent_storage_root: [U8; 32], max_pov_size: U32}, relay_chain_state: {trie_nodes: Vec<Vec<U8>>}, downward_messages: Vec<{sent_at: U32, msg: Vec<U8>}>, horizontal_messages: Vec<(U32, Vec<{sent_at: U32, data: Vec<U8>}>)>}}, 1/sudo_send_upward_message: {message: Vec<U8>}, 2/authorize_upgrade: {code_hash: [U8; 32], check_version: Bool}, 3/enact_authorized_upgrade: {code: Vec<U8>}}>, 2/Timestamp: Enum<{0/set: {now: Compact<U64>}}>, 3/ParachainInfo: Enum<{}>, 5/Balances: Enum<{0/transfer_allow_death: {dest: [U8; 20], value: Compact<U128>}, 1/set_balance_deprecated: {who: [U8; 20], new_free: Compact<U128>, old_reserved: Compact<U128>}, 2/force_transfer: {source: [U8; 20], dest: [U8; 20], value: Compact<U128>}, 3/transfer_keep_alive: {dest: [U8; 20], value: Compact<U128>}, 4/transfer_all: {dest: [U8; 20], keep_alive: Bool}, 5/force_unreserve: {who: [U8; 20], amount: U128}, 6/upgrade_accounts: {who: Vec<[U8; 20]>}, 7/transfer: {dest: [U8; 20], value: Compact<U128>}, 8/force_set_balance: {who: [U8; 20], new_free: Compact<U128>}}>, 7/Assets: Enum<{0/create: {id: Compact<U64>, admin: [U8; 20], min_balance: U128}, 1/force_create: {id: Compact<U64>, owner: [U8; 20], is_sufficient: Bool, min_balance: Compact<U128>}, 2/start_destroy: {id: Compact<U64>}, 3/destroy_accounts: {id: Compact<U64>}, 4/destroy_approvals: {id: Compact<U64>}, 5/finish_destroy: {id: Compact<U64>}, 6/mint: {id: Compact<U64>, beneficiary: [U8; 20], amount: Compact<U128>}, 7/burn: {id: Compact<U64>, who: [U8; 20], amount: Compact<U128>}, 8/transfer: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 9/transfer_keep_alive: {id: Compact<U64>, target: [U8; 20], amount: Compact<U128>}, 10/force_transfer: {id: Compact<U64>, source: [U8; 20], dest: [U8; 20], amount: Compact<U128>}, 11/freeze: {id: Compact<U64>, who: [U8; 20]}, 12/thaw: {id: Compact<U64>, who: [U8; 20]}, 13/freeze_asset: {id: Compact<U64>}, 14/thaw_asset: {id: Compact<U64>}, 15/transfer_ownership: {id: Compact<U64>, owner: [U8; 20]}, 16/set_team: {id: Compact<U64>, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, 17/set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8}, 18/clear_metadata: {id: Compact<U64>}, 19/force_set_metadata: {id: Compact<U64>, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, 20/force_clear_metadata: {id: Compact<U64>}, 21/force_asset_status: {id: Compact<U64>, owner: [U8; 20], issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20], min_balance: Compact<U128>, is_sufficient: Bool, is_frozen: Bool}, 22/approve_transfer: {id: Compact<U64>, delegate: [U8; 20], amount: Compact<U128>}, 23/cancel_approval: {id: Compact<U64>, delegate: [U8; 20]}, 24/force_cancel_approval: {id: Compact<U64>, owner: [U8; 20], delegate: [U8; 20]}, 25/transfer_approved: {id: Compact<U64>, owner: [U8; 20], destination: [U8; 20], amount: Compact<U128>}, 26/touch: {id: Compact<U64>}, 27/refund: {id: Compact<U64>, allow_burn: Bool}, 28/set_min_balance: {id: Compact<U64>, min_balance: U128}, 29/touch_other: {id: Compact<U64>, who: [U8; 20]}, 30/refund_other: {id: Compact<U64>, who: [U8; 20]}, 31/block: {id: Compact<U64>, who: [U8; 20]}}>, 9/Deposit: Enum<{0/lock: {amount: U128, months: U8}, 1/claim: , 2/claim_with_penalty: {id: U16}}>, 10/AccountMigration: Enum<{0/migrate: {from: [U8; 32], to: [U8; 20], signature: [U8; 64]}, 1/migrate_multisig: {submitter: [U8; 32], others: Vec<[U8; 32]>, threshold: U16, to: [U8; 20], signature: [U8; 64], new_multisig_params: Enum<{0/None, 1/Some}>}, 2/complete_multisig_migration: {multisig: [U8; 32], submitter: [U8; 32], signature: [U8; 64]}}>, 12/DarwiniaStaking: Enum<{0/stake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 1/unstake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 2/restake: {ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 3/claim: , 4/collect: {commission: U32}, 5/nominate: {target: [U8; 20]}, 6/chill: , 7/set_collator_count: {count: U32}}>, 13/Session: Enum<{0/set_keys: {keys: {aura: [U8; 32]}, proof: Vec<U8>}, 1/purge_keys: }>, 16/MessageGadget: Enum<{0/set_commitment_contract: {commitment_contract: [U8; 20]}}>, 17/EcdsaAuthority: Enum<{0/add_authority: {new: [U8; 20]}, 1/remove_authority: {old: [U8; 20]}, 2/swap_authority: {old: [U8; 20], new: [U8; 20]}, 3/submit_authorities_change_signature: {signature: [U8; 65]}, 4/submit_new_message_root_signature: {signature: [U8; 65]}}>, 18/Democracy: Enum<{0/propose: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>, value: Compact<U128>}, 1/second: {proposal: Compact<U32>}, 2/vote: {ref_index: Compact<U32>, vote: Enum<{0/Standard, 1/Split}>}, 3/emergency_cancel: {ref_index: U32}, 4/external_propose: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 5/external_propose_majority: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 6/external_propose_default: {proposal: Enum<{0/Legacy, 1/Inline, 2/Lookup}>}, 7/fast_track: {proposal_hash: [U8; 32], voting_period: U32, delay: U32}, 8/veto_external: {proposal_hash: [U8; 32]}, 9/cancel_referendum: {ref_index: Compact<U32>}, 10/delegate: {to: [U8; 20], conviction: Enum<{0/None, 1/Locked1x, 2/Locked2x, 3/Locked3x, 4/Locked4x, 5/Locked5x, 6/Locked6x}>, balance: U128}, 11/undelegate: , 12/clear_public_proposals: , 13/unlock: {target: [U8; 20]}, 14/remove_vote: {index: U32}, 15/remove_other_vote: {target: [U8; 20], index: U32}, 16/blacklist: {proposal_hash: [U8; 32], maybe_ref_index: Enum<{0/None, 1/Some}>}, 17/cancel_proposal: {prop_index: Compact<U32>}, 18/set_metadata: {owner: Enum<{0/External, 1/Proposal, 2/Referendum}>, maybe_hash: Enum<{0/None, 1/Some}>}}>, 19/Council: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}, 6/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: {ref_time: Compact<U64>, proof_size: Compact<U64>}, length_bound: Compact<U32>}}>, 20/TechnicalCommittee: Enum<{0/set_members: {new_members: Vec<[U8; 20]>, prime: Enum<{0/None, 1/Some}>, old_count: U32}, 1/execute: {proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, length_bound: Compact<U32>}, 2/propose: {threshold: Compact<U32>, proposal: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, length_bound: Compact<U32>}, 3/vote: {proposal: [U8; 32], index: Compact<U32>, approve: Bool}, 5/disapprove_proposal: {proposal_hash: [U8; 32]}, 6/close: {proposal_hash: [U8; 32], index: Compact<U32>, proposal_weight_bound: {ref_time: Compact<U64>, proof_size: Compact<U64>}, length_bound: Compact<U32>}}>, 21/PhragmenElection: Enum<{0/vote: {votes: Vec<[U8; 20]>, value: Compact<U128>}, 1/remove_voter: , 2/submit_candidacy: {candidate_count: Compact<U32>}, 3/renounce_candidacy: {renouncing: Enum<{0/Member, 1/RunnerUp, 2/Candidate}>}, 4/remove_member: {who: [U8; 20], slash_bond: Bool, rerun_election: Bool}, 5/clean_defunct_voters: {num_voters: U32, num_defunct: U32}}>, 22/TechnicalMembership: Enum<{0/add_member: {who: [U8; 20]}, 1/remove_member: {who: [U8; 20]}, 2/swap_member: {remove: [U8; 20], add: [U8; 20]}, 3/reset_members: {members: Vec<[U8; 20]>}, 4/change_key: {new: [U8; 20]}, 5/set_prime: {who: [U8; 20]}, 6/clear_prime: }>, 23/Treasury: Enum<{0/propose_spend: {value: Compact<U128>, beneficiary: [U8; 20]}, 1/reject_proposal: {proposal_id: Compact<U32>}, 2/approve_proposal: {proposal_id: Compact<U32>}, 3/spend: {amount: Compact<U128>, beneficiary: [U8; 20]}, 4/remove_approval: {proposal_id: Compact<U32>}}>, 24/Tips: Enum<{0/report_awesome: {reason: Vec<U8>, who: [U8; 20]}, 1/retract_tip: {hash: [U8; 32]}, 2/tip_new: {reason: Vec<U8>, who: [U8; 20], tip_value: Compact<U128>}, 3/tip: {hash: [U8; 32], tip_value: Compact<U128>}, 4/close_tip: {hash: [U8; 32]}, 5/slash_tip: {hash: [U8; 32]}}>, 25/Sudo: Enum<{0/sudo: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 1/sudo_unchecked_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 2/set_key: {new: [U8; 20]}, 3/sudo_as: {who: [U8; 20], call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}}>, 26/Utility: Enum<{0/batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>>}, 1/as_derivative: {index: U16, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 2/batch_all: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>>}, 3/dispatch_as: {as_origin: Enum<{0/system, 19/Council, 20/TechnicalCommittee, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 36/Ethereum, 38/MessageTransact, 8/Void}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 4/force_batch: {calls: Vec<Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>>}, 5/with_weight: {call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 27/Identity: Enum<{0/add_registrar: {account: [U8; 20]}, 1/set_identity: {info: {additional: Vec<(Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>, display: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, legal: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, web: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, riot: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, email: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, pgp_fingerprint: Enum<{0/None, 1/Some}>, image: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>, twitter: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}}, 2/set_subs: {subs: Vec<([U8; 20], Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>)>}, 3/clear_identity: , 4/request_judgement: {reg_index: Compact<U32>, max_fee: Compact<U128>}, 5/cancel_request: {reg_index: U32}, 6/set_fee: {index: Compact<U32>, fee: Compact<U128>}, 7/set_account_id: {index: Compact<U32>, new: [U8; 20]}, 8/set_fields: {index: Compact<U32>, fields: U64}, 9/provide_judgement: {reg_index: Compact<U32>, target: [U8; 20], judgement: Enum<{0/Unknown, 1/FeePaid, 2/Reasonable, 3/KnownGood, 4/OutOfDate, 5/LowQuality, 6/Erroneous}>, identity: [U8; 32]}, 10/kill_identity: {target: [U8; 20]}, 11/add_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 12/rename_sub: {sub: [U8; 20], data: Enum<{0/None, 1/Raw0, 2/Raw1, 3/Raw2, 4/Raw3, 5/Raw4, 6/Raw5, 7/Raw6, 8/Raw7, 9/Raw8, 10/Raw9, 11/Raw10, 12/Raw11, 13/Raw12, 14/Raw13, 15/Raw14, 16/Raw15, 17/Raw16, 18/Raw17, 19/Raw18, 20/Raw19, 21/Raw20, 22/Raw21, 23/Raw22, 24/Raw23, 25/Raw24, 26/Raw25, 27/Raw26, 28/Raw27, 29/Raw28, 30/Raw29, 31/Raw30, 32/Raw31, 33/Raw32, 34/BlakeTwo256, 35/Sha256, 36/Keccak256, 37/ShaThree256}>}, 13/remove_sub: {sub: [U8; 20]}, 14/quit_sub: }>, 28/Scheduler: Enum<{0/schedule: {when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 1/cancel: {when: U32, index: U32}, 2/schedule_named: {id: [U8; 32], when: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 3/cancel_named: {id: [U8; 32]}, 4/schedule_after: {after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 5/schedule_named_after: {id: [U8; 32], after: U32, maybe_periodic: Enum<{0/None, 1/Some}>, priority: U8, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}}>, 29/Preimage: Enum<{0/note_preimage: {bytes: Vec<U8>}, 1/unnote_preimage: {hash: [U8; 32]}, 2/request_preimage: {hash: [U8; 32]}, 3/unrequest_preimage: {hash: [U8; 32]}}>, 30/Proxy: Enum<{0/proxy: {real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}, 1/add_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32}, 2/remove_proxy: {delegate: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32}, 3/remove_proxies: , 4/create_pure: {proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, delay: U32, index: U16}, 5/kill_pure: {spawner: [U8; 20], proxy_type: Enum<{0/Any, 1/NonTransfer, 2/Governance, 3/Staking, 4/IdentityJudgement, 5/CancelProxy, 6/EcdsaBridge}>, index: U16, height: Compact<U32>, ext_index: Compact<U32>}, 6/announce: {real: [U8; 20], call_hash: [U8; 32]}, 7/remove_announcement: {real: [U8; 20], call_hash: [U8; 32]}, 8/reject_announcement: {delegate: [U8; 20], call_hash: [U8; 32]}, 9/proxy_announced: {delegate: [U8; 20], real: [U8; 20], force_proxy_type: Enum<{0/None, 1/Some}>, call: Enum<{0/System, 1/ParachainSystem, 2/Timestamp, 3/ParachainInfo, 5/Balances, 7/Assets, 9/Deposit, 10/AccountMigration, 12/DarwiniaStaking, 13/Session, 16/MessageGadget, 17/EcdsaAuthority, 18/Democracy, 19/Council, 20/TechnicalCommittee, 21/PhragmenElection, 22/TechnicalMembership, 23/Treasury, 24/Tips, 25/Sudo, 26/Utility, 27/Identity, 28/Scheduler, 29/Preimage, 30/Proxy, 32/XcmpQueue, 33/PolkadotXcm, 34/CumulusXcm, 44/EthereumXcm, 35/DmpQueue, 45/AssetManager, 46/XTokens, 47/AssetLimit, 36/Ethereum, 37/EVM, 38/MessageTransact, 39/BridgeMoonbaseGrandpa, 40/BridgeMoonbaseParachain, 41/BridgePangoroMessages, 42/BridgePangoroDispatch, 43/PangoroFeeMarket}>}}>, 32/XcmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 1/suspend_xcm_execution: , 2/resume_xcm_execution: , 3/update_suspend_threshold: {new: U32}, 4/update_drop_threshold: {new: U32}, 5/update_resume_threshold: {new: U32}, 6/update_threshold_weight: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 7/update_weight_restrict_decay: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 8/update_xcmp_max_individual_weight: {new: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 33/PolkadotXcm: Enum<{0/send: {dest: Enum<{1/V2, 3/V3}>, message: Enum<{2/V2, 3/V3}>}, 1/teleport_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32}, 2/reserve_transfer_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32}, 3/execute: {message: Enum<{2/V2, 3/V3}>, max_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 4/force_xcm_version: {location: {parents: U8, interior: Enum<{0/Here, 1/X1, 2/X2, 3/X3, 4/X4, 5/X5, 6/X6, 7/X7, 8/X8}>}, xcm_version: U32}, 5/force_default_xcm_version: {maybe_xcm_version: Enum<{0/None, 1/Some}>}, 6/force_subscribe_version_notify: {location: Enum<{1/V2, 3/V3}>}, 7/force_unsubscribe_version_notify: {location: Enum<{1/V2, 3/V3}>}, 8/limited_reserve_transfer_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 9/limited_teleport_assets: {dest: Enum<{1/V2, 3/V3}>, beneficiary: Enum<{1/V2, 3/V3}>, assets: Enum<{1/V2, 3/V3}>, fee_asset_item: U32, weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 10/force_suspension: {suspended: Bool}}>, 34/CumulusXcm: Enum<{}>, 44/EthereumXcm: Enum<{0/transact: {xcm_transaction: Enum<{0/V1, 1/V2}>}, 1/transact_through_proxy: {transact_as: [U8; 20], xcm_transaction: Enum<{0/V1, 1/V2}>}, 2/suspend_ethereum_xcm_execution: , 3/resume_ethereum_xcm_execution: }>, 35/DmpQueue: Enum<{0/service_overweight: {index: U64, weight_limit: {ref_time: Compact<U64>, proof_size: Compact<U64>}}}>, 45/AssetManager: Enum<{0/register_foreign_asset: {asset: Enum<{0/Xcm}>, metadata: {name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, min_amount: U128, is_sufficient: Bool}, 1/set_asset_units_per_second: {asset_type: Enum<{0/Xcm}>, units_per_second: U128, num_assets_weight_hint: U32}, 2/change_existing_asset_type: {asset_id: U64, new_asset_type: Enum<{0/Xcm}>, num_assets_weight_hint: U32}, 3/remove_supported_asset: {asset_type: Enum<{0/Xcm}>, num_assets_weight_hint: U32}, 4/remove_existing_asset_type: {asset_id: U64, num_assets_weight_hint: U32}, 5/register_local_asset: {creator: [U8; 20], owner: [U8; 20], is_sufficient: Bool, min_balance: U128}, 6/destroy_foreign_asset: {asset_id: U64, num_assets_weight_hint: U32}, 7/destroy_local_asset: {asset_id: U64}}>, 46/XTokens: Enum<{0/transfer: {currency_id: Enum<{0/SelfReserve, 1/ForeignAsset}>, amount: U128, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 1/transfer_multiasset: {asset: Enum<{1/V2, 3/V3}>, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 2/transfer_with_fee: {currency_id: Enum<{0/SelfReserve, 1/ForeignAsset}>, amount: U128, fee: U128, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 3/transfer_multiasset_with_fee: {asset: Enum<{1/V2, 3/V3}>, fee: Enum<{1/V2, 3/V3}>, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 4/transfer_multicurrencies: {currencies: Vec<(Enum<{0/SelfReserve, 1/ForeignAsset}>, U128)>, fee_item: U32, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}, 5/transfer_multiassets: {assets: Enum<{1/V2, 3/V3}>, fee_item: U32, dest: Enum<{1/V2, 3/V3}>, dest_weight_limit: Enum<{0/Unlimited, 1/Limited}>}}>, 47/AssetLimit: Enum<{0/set_foreign_asset_limit: {asset_type: Enum<{0/Xcm}>, units_limit: U128}}>, 36/Ethereum: Enum<{0/transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 37/EVM: Enum<{0/withdraw: {address: [U8; 20], value: U128}, 1/call: {source: [U8; 20], target: [U8; 20], input: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 2/create: {source: [U8; 20], init: Vec<U8>, value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}, 3/create2: {source: [U8; 20], init: Vec<U8>, salt: [U8; 32], value: [U64; 4], gas_limit: U64, max_fee_per_gas: [U64; 4], max_priority_fee_per_gas: Enum<{0/None, 1/Some}>, nonce: Enum<{0/None, 1/Some}>, access_list: Vec<([U8; 20], Vec<[U8; 32]>)>}}>, 38/MessageTransact: Enum<{0/message_transact: {transaction: Enum<{0/Legacy, 1/EIP2930, 2/EIP1559}>}}>, 39/BridgeMoonbaseGrandpa: Enum<{0/submit_finality_proof: {finality_target: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, justification: {round: U64, commit: {target_hash: [U8; 32], target_number: U32, precommits: Vec<{precommit: {target_hash: [U8; 32], target_number: U32}, signature: [U8; 64], id: [U8; 32]}>}, votes_ancestries: Vec<{parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}>}}, 1/initialize: {init_data: {header: {parent_hash: [U8; 32], number: Compact<U32>, state_root: [U8; 32], extrinsics_root: [U8; 32], digest: {logs: Vec<Enum<{6/PreRuntime, 4/Consensus, 5/Seal, 0/Other, 8/RuntimeEnvironmentUpdated}>>}}, authority_list: Vec<([U8; 32], U64)>, set_id: U64, operating_mode: Enum<{0/Normal, 1/Halted}>}}, 2/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 3/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/Halted}>}}>, 40/BridgeMoonbaseParachain: Enum<{0/submit_parachain_heads: {at_relay_block: (U32, [U8; 32]), parachains: Vec<(U32, [U8; 32])>, parachain_heads_proof: Vec<Vec<U8>>}, 1/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 2/set_operating_mode: {operating_mode: Enum<{0/Normal, 1/Halted}>}}>, 41/BridgePangoroMessages: Enum<{0/set_owner: {new_owner: Enum<{0/None, 1/Some}>}, 1/set_operating_mode: {operating_mode: Enum<{0/Basic, 1/RejectingOutboundMessages}>}, 2/update_pallet_parameter: {parameter: ()}, 3/send_message: {lane_id: [U8; 4], payload: {spec_version: U32, weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}, origin: Enum<{0/SourceRoot, 1/TargetAccount, 2/SourceAccount}>, dispatch_fee_payment: Enum<{0/AtSourceChain, 1/AtTargetChain}>, call: Vec<U8>}, delivery_and_dispatch_fee: U128}, 5/receive_messages_proof: {relayer_id_at_bridged_chain: [U8; 20], proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4], nonces_start: U64, nonces_end: U64}, messages_count: U32, dispatch_weight: {ref_time: Compact<U64>, proof_size: Compact<U64>}}, 6/receive_messages_delivery_proof: {proof: {bridged_header_hash: [U8; 32], storage_proof: Vec<Vec<U8>>, lane: [U8; 4]}, relayers_state: {unrewarded_relayer_entries: U64, messages_in_oldest_entry: U64, total_messages: U64, last_delivered_nonce: U64}}}>, 42/BridgePangoroDispatch: Enum<{}>, 43/PangoroFeeMarket: Enum<{0/enroll_and_lock_collateral: {lock_collateral: U128, relay_fee: Enum<{0/None, 1/Some}>}, 1/increase_locked_collateral: {new_collateral: U128}, 2/decrease_locked_collateral: {new_collateral: U128}, 3/update_relay_fee: {new_fee: U128}, 4/cancel_enrollment: , 5/set_slash_protect: {slash_protect: U128}, 6/set_assigned_relayers_number: {number: U32}}>}>
         * @instance
         */
        proxyAnnounced: async (signer: ethers.Signer, _delegate: unknown, _real: unknown, _force_proxy_type: unknown, _call: unknown): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', false, {
                delegate: _delegate,
                real: _real,
                force_proxy_type: _force_proxy_type,
                call: _call,
           });
        },

        /**
         * Similar to {@link: pangolin/proxy/calls/proxyAnnounced}, but with scale encoded args.
         *
         * @param {BytesLike} argsBytes the args bytes
         * @instance
         */
        proxyAnnouncedH: async (signer: ethers.Signer, argsBytes: BytesLike): Promise<ethers.providers.TransactionResponse> => {
            return await dispatch(signer, 'Proxy', 'proxyAnnounced', true, argsBytes);
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         *
         * @returns {CallAsParam} 
         */
        buildProxyAnnouncedCall: (_delegate: unknown, _real: unknown, _force_proxy_type: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Proxy', 'proxyAnnounced', {
                delegate: _delegate,
                real: _real,
                force_proxy_type: _force_proxy_type,
                call: _call,
            });
        },

        /**
         * Build a call object to be used as a call param in other functions, such as `utilities.batchAll`.
         * Similar to buildProxyAnnouncedCall, but with scale encoded args.
         *
         * @returns {CallAsParam} 
         */
        buildProxyAnnouncedCallH: (argsBytes: BytesLike) => {
            return decodeCall(metadata, 'Proxy', 'proxyAnnounced', argsBytes)
        },

    }
}

