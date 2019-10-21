
const defaultImgurState = {
    links: [],
}

const ImgurReducer = (state=defaultImgurState, action) => {
    switch(action.type) {
        case 'STATE_UPDATE': {
            return {...state, links: action.data}
        }
        default: return state;
    }
}

export default ImgurReducer;