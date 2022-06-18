import { descriptionService } from '../service/description.service';

export const descriptionActions = {
    addDescription,
    getLevel,
    success,
    error,
    clear
};

function addDescription(dec, level) {
    return dispatch => {
        dispatch(request());

        descriptionService.addDescription()
        .then(
            res => {
                dispatch(success({dec, level}));
            },
            error => {
                dispatch(failure({dec, level}));
            }
        );
    };

    function request() { return { type: "REQUEST" } }
    function success(response) { return { type: "SUCCESS", response } }
    function failure(error) { return { type: "FAILURE", error } }
}

function getLevel() {
    return dispatch => {
        dispatch(request());

        descriptionService.getLevel()
        .then(
            res => {
                dispatch(success(res));
            },
            error => {
                dispatch(failure(error));
            }
        );
    };

    function request() { return { type: "GET_REQUEST" } }
    function success(response) { return { type: "GET_SUCCESS", response } }
    function failure(error) { return { type: "GET_FAILURE", error } }
}

function success(message) {
    return { type: "SUCCESS", message };
}

function error(message) {
    return { type: "ERROR", message };
}

function clear() {
    return { type: "CLEAR" };
}