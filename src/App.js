
import React from 'react'
import {Provider} from 'react-redux'

import {store} from 'store'

import {TestForm} from 'TestForm'

export const App = () => (
  <Provider store={store}>
    <TestForm />
  </Provider>
)
