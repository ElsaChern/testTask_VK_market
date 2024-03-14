import { Provider } from "react-redux"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ThemeProvider, createTheme } from "@mui/material"
import store from "./store/index"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

document.body.style.backgroundColor = darkTheme.palette.background.default

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
)
