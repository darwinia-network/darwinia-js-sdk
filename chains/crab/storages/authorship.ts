import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet evm storages
 *
 * @module crab/authorship/storages
 */
export const getAuthorship = (getStorage: GetStorage) => {
    return {

        /**
         * Uncles
         *
         * @returns {Promise<string | null>} Vec<Enum<{0/InclusionHeight: U32, 1/Uncle: ([U8; 32], Enum<{0/None: , 1/Some: [U8; 32]}>)}>>
         */
        uncles: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'Uncles');
        },

        /**
         * Author of current block.
         *
         * @returns {Promise<string | null>} AccountId32: [U8; 32]
         */
        author: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'Author');
        },

        /**
         * Whether uncles were already set in this block.
         *
         * @returns {Promise<string | null>} Bool
         */
        didSetUncles: async (): Promise<string | null> => {
            return await getStorage('Authorship', 'DidSetUncles');
        },
    };
};
