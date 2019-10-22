import firebase from '../../firebase.js';

export function fetchState(dispatch) {
    return dispatch => {
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', function(snapshot) {
            dispatch({
                type: 'STATE_UPDATE',
                data: snapshot.val() || []
            });
        });


    }
}

export function updateState(data) {
    return dispatch => {
        const itemsRef = firebase.database().ref('items');
        itemsRef.set(data);
        return {
            type: 'STATE_UPDATE3333',
            data
        }
    }
}
