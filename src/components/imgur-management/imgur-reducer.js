
const defaultImgurState = {
    links: [],
    isLoading: false,
    images: []
}

const ImgurReducer = (state = defaultImgurState, action) => {
    switch(action.type) {
        case 'IMAGES_SET': {
            return {...state, images: action.data}
        }
        case 'LOADER_TOGGLE': {
            return {...state, isLoading: action.data}
        }
        case 'STATE_UPDATE': {
            return {...state, links: action.data, isLoading: false}
        }
        default: return state;
    }
}

export default ImgurReducer;