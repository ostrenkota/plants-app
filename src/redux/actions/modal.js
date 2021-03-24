export const openModal = id => ({
    type: 'MODAL:OPEN',
     id
})

export const closeModal = (id, dialogResult) => ({
    type: 'MODAL:CLOSE',
    id,
    dialogResult
})

export const clearModal = () => ({
    type: 'MODAL:CLEAR'
})
