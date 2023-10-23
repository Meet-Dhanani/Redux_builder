import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_PROGRESS } from '../redux-saga/product/action/action'

const Demo = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.productReducer)
    console.log(data)

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS })
    }, [])
    return (
        <>

        </>
    )
}

export default Demo