
import {createStore, compose} from 'redux'
import {combineForms} from 'react-redux-form'

// Use Redux DevTools Extension if available and not in production.
const composeEnhancers = ((process.env.NODE_ENV !== 'production') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const login = {
  username: '',
  password: ''
}

const forms = combineForms({
  login
})

export const store = createStore(forms, composeEnhancers())
