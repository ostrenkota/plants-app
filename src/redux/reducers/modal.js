const defaultModalState = {
    id: null,
    isOpen: false,
    dialogResult: undefined,
    input: undefined
}


function modal(state = defaultModalState, action) {
    switch (action.type) {
        case 'MODAL:OPEN': {
            return ({
                ...state,
                id: action.id,
                isOpen: true,
                dialogResult: undefined,
                input: action.input
            })
        }
        case 'MODAL:CLOSE': {
            return ({
                ...state,
                id: action.id,
                isOpen: false,
                dialogResult: action.dialogResult
            })
        }
        case 'MODAL:CLEAR': {
            return ({
                ...state,
                id: null,
                isOpen: false,
                dialogResult: undefined,
                input: undefined
            })
        }
        default:
            return {...state}
    }
}

export default modal;
