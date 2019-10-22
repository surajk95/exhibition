
const defaultImgurState = {
    links: [],
    isLoadingLinks: false,
    images: []
}

const ImgurReducer = (state = defaultImgurState, action) => {
    switch(action.type) {
        case 'IMAGES_SET': {
            return {...state, images: action.data}
        }
        case 'STATE_UPDATE': {
            return {...state, links: action.data, isLoadingLinks: false}
        }
        default: return state;
    }
}

export default ImgurReducer;