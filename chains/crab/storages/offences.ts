import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `Offences`'s storages.
 * 
 * `Offences`'s calls: {@link: module:crab/offences/calls}
 *
 * @module crab/offences/storages
 */
export const getOffences = (getStorage: GetStorage) => {
    return {

        /**
         * The primary structure that holds all offence records keyed by report identifiers.
         *
         * @param {unknown} param0 H256: [U8; 32]
         * @returns {Promise<string | null>} OffenceDetails: {offender: ([U8; 32], {own_ring_balance: Compact<U128>, own_kton_balance: Compact<U128>, own_power: U32, total_power: U32, others: Vec<{who: [U8; 32], ring_balance: Compact<U128>, kton_balance: Compact<U128>, power: U32}>}), reporters: Vec<[U8; 32]>}
         */
        reports: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Offences', 'Reports', param0);
        },

        /**
         * A vector of reports of the same kind that happened at the same time slot.
         *
         * @param {unknown} param0 [U8; 16]
         * @param {unknown} param1 Vec<U8>
         * @returns {Promise<string | null>} Vec<[U8; 32]>
         */
        concurrentReportsIndex: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Offences', 'ConcurrentReportsIndex', param0, param1);
        },

        /**
         * Enumerates all reports of a kind along with the time they happened.
         *
         * All reports are sorted by the time of offence.
         *
         * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
         * different types are not supported at the moment so we are doing the manual serialization.
         *
         * @param {unknown} param0 [U8; 16]
         * @returns {Promise<string | null>} Vec<U8>
         */
        reportsByKindIndex: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Offences', 'ReportsByKindIndex', param0);
        },
    };
};
