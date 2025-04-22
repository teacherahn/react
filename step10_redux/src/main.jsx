
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

import reduxStore from './components/step01_redux/reduxStore.js'
//import store from './components/step02_thunk/store.js'
//import store from './components/step03_RTK_query/store.js'

// import { PersistGate } from 'redux-persist/integration/react';
// import { store , persistor } from './components/step04_redux_persist/store.js'



//import { store , persistor } from './components/step06_auth_process_RTK_query/store.js'
// import 파트에 맞게 사용해라.

createRoot(document.getElementById('root')).render(
  // step 1,2,3) basic + thunk + RTK Query
  <Provider store={reduxStore}>
    {/* step 4) redux-persist*/}
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>
 


// auth process
// {<Provider store={store}>
// <PersistGate loading={null} persistor={persistor}>
//   <App />
// </PersistGate>
// </Provider> }

)
