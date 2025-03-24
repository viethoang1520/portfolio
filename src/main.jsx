import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './components/GlobalStyles/GlobalStyles.jsx'
import { Provider } from 'react-redux'
import { store } from '@/store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles>
      <Provider store={store}>
          <App />
      </Provider>
    </GlobalStyles>
  </StrictMode>,
)
