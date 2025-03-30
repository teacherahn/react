import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';
//import store from './components/step01_redux/store.js'
//import store from './components/step02_thunk/store.js'


//import { store , persistor } from './components/step04_redux_persist/store.js'
import { store , persistor } from './components/step06_auth_process_RTK_query/store.js'
// import 파트에 맞게 사용해라.
createRoot(document.getElementById('root')).render(
  // basic + thunk + RTK Query
  // <Provider store={store}>
  //   <App />
  // </Provider>
 
  //redux-persist
//  <Provider store={store}>
//   <PersistGate loading={null} persistor={persistor}>
//   <App />
//   </PersistGate>
// </Provider>


// auth process
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
  <App />
</PersistGate>
</Provider>

)
