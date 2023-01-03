import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getPangoroFeeMarket = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: U128
         * @param param1: Enum<{"0/None", "1/Some"}>
	 */
        enrollAndLockCollateral: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangoroFeeMarket', 'enrollAndLockCollateral', false, param0, param1);
        },

        /**
         * @param param0: U128
	 */
        updateLockedCollateral: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangoroFeeMarket', 'updateLockedCollateral', false, param0);
        },

        /**
         * @param param0: U128
	 */
        updateRelayFee: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangoroFeeMarket', 'updateRelayFee', false, param0);
        },

        /**
	 */
        cancelEnrollment: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangoroFeeMarket', 'cancelEnrollment', false);
        },

        /**
         * @param param0: U128
	 */
        setSlashProtect: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangoroFeeMarket', 'setSlashProtect', false, param0);
        },

        /**
         * @param param0: U32
	 */
        setAssignedRelayersNumber: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangoroFeeMarket', 'setAssignedRelayersNumber', false, param0);
        },


    }
}
