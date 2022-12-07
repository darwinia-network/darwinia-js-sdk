import {GetStorage} from "../../storage";

export default {
    agenda: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Scheduler', 'Agenda', param0);
    },
    lookup: async (getStorage: GetStorage, param0: unknown): Promise<string | null> => {
        return await getStorage('Scheduler', 'Lookup', param0);
    },
};