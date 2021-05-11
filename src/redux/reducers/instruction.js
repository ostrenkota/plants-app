const defaultInstructionState = {
    isOpen: false,
    confirmed: false
}


function instruction(state = defaultInstructionState, action) {
    switch (action.type) {
        case 'INSTRUCTION:OPEN': {
            return ({
                ...state,
                isOpen: true
            })
        }
        case 'INSTRUCTION:CLOSE': {
            return ({
                ...state,
                isOpen: false
            })
        }
        case 'INSTRUCTION:CONFIRM': {
            return ({
                ...state,
                confirmed: true
            })
        }
        case 'INSTRUCTION:CLEAR': {
            return ({
                ...state,
                confirmed: false
            })
        }
        default:
            return {...state}
    }
}

export default instruction;
