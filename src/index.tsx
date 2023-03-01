import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/theme';
import App from './app/App';
import 'shared/config/i18n';
import { ErrorBoundary } from './shared/errorBoundary';
import { StoreProvider } from './app/providers/storeProvider';

import 'app/styles/index.scss';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
