import firebase from '../../firebase.js';
import axios from 'axios';

export function fetchState() {
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

export function toggleLoader(flag) {
    return {
        type: 'LOADER_TOGGLE',
        data: flag
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

export function fetchImages() {
    return dispatch => {
        dispatch(toggleLoader(true));
        const itemsRef = firebase.database().ref(`items/mfFNwNp9Tpbj4HgrYV1gOASI1JP2`);
        itemsRef.on('value', function(snapshot) {
            let links = [];
            if(snapshot.val()) {
                links = snapshot.val().map(item=>item.title);
                links = links.map(item=>item.split('/')[3]);
            }
            getImages(dispatch, links);
        });


    }
}

async function getImages(dispatch, links) {
    let config = {
        headers: {
            'Authorization': 'Client-ID 4d7cddffe47c0f7'
        }
    }
    let Images = [];
    for(let link of links) {
        Images.push(await axios.get(`https://api.imgur.com/3/image/${link}`,
            config
        ));
    }
    Images = Images.map(item => item.data.data);
    console.log(Images);
    dispatch(toggleLoader(false));
    dispatch({
        type: 'IMAGES_SET',
        data: Images
    });
}
