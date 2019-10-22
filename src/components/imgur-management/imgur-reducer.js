
const defaultImgurState = {
    links: [],
    isLoadingLinks: false,
}

const ImgurReducer = (state = defaultImgurState, action) => {
    switch(action.type) {
        // case 'STATE_FETCH': {
        //     return {...state, links: action.data}
        // }
        case 'STATE_UPDATE': {
            return {...state, links: action.data, isLoadingLinks: false}
        }
        default: return state;
    }
}

export default ImgurReducer;