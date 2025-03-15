import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './Components/GlobalStyles/GlobalStyles.jsx'
import { Provider } from 'react-redux'
import { store } from '@/store/index.js'
import { ConfigProvider, theme } from "antd"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles>
      <Provider store={store}>
          <App />
      </Provider>
    </GlobalStyles>
  </StrictMode>,
)
