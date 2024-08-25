export const Reducer = (state, action) => {
    if (action.type === "darjeeling") {
        return {
            ...state,
            banner: action.payload.banner,
            heading: action.payload.heading,
            name: action.payload.name,
            para: action.payload.para,
            reach: action.payload.reach,
            reachimg: action.payload.reachimg,
            reachtext: action.payload.reachtext,
            reachpara: action.payload.reachpara,
            img1: action.payload.img1,
            img2: action.payload.img2,
            img3: action.payload.img3,
            img4: action.payload.img4,
            img5: action.payload.img5,
            img6: action.payload.img6,
            img7: action.payload.img7,
            img8: action.payload.img8,
            img9: action.payload.img9,
            img10: action.payload.img10
        }
    }
    else if(action.type === "sikkim"){
        return {
            ...state,
            banner: action.payload.banner,
            heading: action.payload.heading,
            name: action.payload.name,
            para: action.payload.para,
            reach: action.payload.reach,
            reachimg: action.payload.reachimg,
            reachtext: action.payload.reachtext,
            reachpara: action.payload.reachpara,
            img1: action.payload.img1,
            img2: action.payload.img2,
            img3: action.payload.img3,
            img4: action.payload.img4,
            img5: action.payload.img5,
            img6: action.payload.img6,
            img7: action.payload.img7,
            img8: action.payload.img8,
            img9: action.payload.img9,
            img10: action.payload.img10
        }

    }
    else if(action.type === "dooars"){
        return {
            ...state,
            banner: action.payload.banner,
            heading: action.payload.heading,
            name: action.payload.name,
            para: action.payload.para,
            reach: action.payload.reach,
            reachimg: action.payload.reachimg,
            reachtext: action.payload.reachtext,
            reachpara: action.payload.reachpara,
            img1: action.payload.img1,
            img2: action.payload.img2,
            img3: action.payload.img3,
            img4: action.payload.img4,
            img5: action.payload.img5,
            img6: action.payload.img6,
            img7: action.payload.img7,
            img8: action.payload.img8,
            img9: action.payload.img9,
            img10: action.payload.img10
        }

    }
    else if(action.type === "bhutan"){
        return {
            ...state,
            banner: action.payload.banner,
            heading: action.payload.heading,
            name: action.payload.name,
            para: action.payload.para,
            reach: action.payload.reach,
            reachimg: action.payload.reachimg,
            reachtext: action.payload.reachtext,
            reachpara: action.payload.reachpara,
            img1: action.payload.img1,
            img2: action.payload.img2,
            img3: action.payload.img3,
            img4: action.payload.img4,
            img5: action.payload.img5,
            img6: action.payload.img6,
            img7: action.payload.img7,
            img8: action.payload.img8,
            img9: action.payload.img9,
            img10: action.payload.img10
        }

    }
    return state

}