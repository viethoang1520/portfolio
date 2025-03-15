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
        <ConfigProvider theme={{algorithm: 'dark'}}>
          <App />
        </ConfigProvider>
      </Provider>
    </GlobalStyles>
  </StrictMode>,
)
