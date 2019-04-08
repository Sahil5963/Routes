import {
    MDCSnackbar
} from "@material/snackbar";


export function initializeSnackbar(el) {
    if (el) {
        return new MDCSnackbar(el);
    }
}