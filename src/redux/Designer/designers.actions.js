import designersTypes from './designers.types';

export const addDesignersStart = designersData => ({
    type:designersTypes.ADD_NEW_DESIGNER_START,
    payload:designersData
});


export const fetchDesignersStart = () => ({
    
    type:designersTypes.FETCH_DESIGNERS_START
    
})

export const setDesigners = designers => ({
    type:designersTypes.SET_DESIGNERS,
    payload: designers
})

export const deleteDesignerStart = designerID => ({
    type:designersTypes.DELETE_DESIGNER_START,
    payload:designerID
})

export const fetchDesignerStart = designerName => ({
    type:designersTypes.FETCH_DESIGNER_START,
    payload:designerName
})

export const setDesigner = designer => ({
    type:designersTypes.SET_DESIGNER,
    payload:designer
})
