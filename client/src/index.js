import config from "./shared/config" // eslint-disable-line no-unused-vars
import reportWebVitals from './reportWebVitals';
import App from "./core/App";
import "./index.scss"

let app = new App()

// register internal
app.registerInternal()

// register
app.register()

// init
app.init()

reportWebVitals();