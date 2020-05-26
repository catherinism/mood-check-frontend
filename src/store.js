import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import moodsReducer from './reducers/moodsReducer';
import formsReducer from './reducers/formsReducer'


const reducers = combineReducers({
    moodsReducer,
    formsReducer
})

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
  applyMiddleware(...middleware)
  )
)
        

