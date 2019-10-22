import firebase from '../../firebase.js';

export function fetchState(dispatch) {
    return dispatch => {
        const itemsRef = firebase.database().ref(`items/mfFNwNp9Tpbj4HgrYV1gOASI1JP2`);
        itemsRef.on('value', function(snapshot) {
            dispatch({
                type: 'STATE_UPDATE',
                data: snapshot.val() || []
            });
        });


    }
}

export function updateState(data, uid) {
    return dispatch => {
        const itemsRef = firebase.database().ref(`items/${uid}`);
        itemsRef.set(data);
        return {
            type: 'STATE_UPDATE3333',
            data
        }
    }
}
