import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/theme';
import App from './app/App';

import 'shared/config/i18n';
import { ErrorBoundary } from './shared/errorBoundary';

render(
    <ThemeProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root'),
);
