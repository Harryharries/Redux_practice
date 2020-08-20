const defaultState = {
    inputValue:'Write Something',
    list:[
        '123',
        '12334',
        '5235'
    ]
}
export default (state = defaultState,action)=>{
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }

    if(action.type ==='addItem'){
        let newState= JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }

    if(action.type ==='deleteItem'){
        let newState= JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}