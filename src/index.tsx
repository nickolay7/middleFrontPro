import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {ThemeProvider} from "./theme/themeProvider";
import App from "./App";

render(
    <ThemeProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
    ,
    document.getElementById('root')
);
