import { GetStorage } from "../../../src/storage";

/**
 * This is the doc comment for pallet `AssetLimit`'s storages.
 * 
 * `AssetLimit`'s calls: {@link: module:koi/assetLimit/calls}
 *
 * @module koi/assetLimit/storages
 */
export const getAssetLimit = (getStorage: GetStorage) => {
    return {

        /**
         * Stores the asset limit for foreign assets.
         *
         * @param {unknown} param0 AssetType: Enum<{0/Xcm: {parents: U8, interior: Enum<{0/Here: , 1/X1: Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, 2/X2: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 3/X3: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 4/X4: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 5/X5: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 6/X6: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 7/X7: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>), 8/X8: (Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>, Enum<{0/Parachain, 1/AccountId32, 2/AccountIndex64, 3/AccountKey20, 4/PalletInstance, 5/GeneralIndex, 6/GeneralKey, 7/OnlyChild, 8/Plurality, 9/GlobalConsensus}>)}>}}>
         * @returns {Promise<string | null>} U128
         */
        foreignAssetLimit: async (param0: unknown): Promise<string | null> => {
            return await getStorage('AssetLimit', 'ForeignAssetLimit', param0);
        },
    };
};
