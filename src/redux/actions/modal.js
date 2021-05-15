export const openModal = (id, input) => ({
    type: 'MODAL:OPEN',
    id,
    input
})

export const closeModal = (id, dialogResult) => ({
    type: 'MODAL:CLOSE',
    id,
    dialogResult
})

export const clearModal = () => ({
    type: 'MODAL:CLEAR'
})
