import once from 'lodash/once';

import SnackbarStore from './SnackbarStore';
import ViewModeStore from './ViewModeStore';
import AuthStore from "./AuthStore";

const SNACKBARSTORE = 'SnackbarStore';
const VIEWMODESTORE = 'ViewModeStore';
const AUTHSTORE = 'AuthStore';

export const STORE_KEYS = {
    SNACKBARSTORE,
    VIEWMODESTORE,
    AUTHSTORE,
};

export default once(() => {
    const snackbarStore = SnackbarStore();
    const viewModeStore = ViewModeStore();
    const authStore = AuthStore();

    return {
        [STORE_KEYS.SNACKBARSTORE]: snackbarStore,
        [STORE_KEYS.VIEWMODESTORE]: viewModeStore,
        [STORE_KEYS.AUTHSTORE]: authStore,
    };
});
