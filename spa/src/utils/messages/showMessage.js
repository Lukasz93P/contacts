import {toast} from 'react-toastify';

export const showMessage = (message, successOrFailure = true) => {
    switch (successOrFailure) {
        case true:
            return toast.success(message, {position: 'top-center'});

        case false:
            return toast.error(message, {position: 'top-center'});
    }
};