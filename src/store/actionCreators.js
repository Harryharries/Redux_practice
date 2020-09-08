import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction=(value)=>({
    type:ADD_ITEM,
    value
})

export const deleteItemAction=(value)=>({
    type:DELETE_ITEM,
    value
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5f5070eceb182d5f62995ed8/example/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}