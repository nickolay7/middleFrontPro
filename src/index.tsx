import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/theme';
import App from './app/App';

import 'shared/config/i18n';
import { ErrorBoundary } from './shared/errorBoundary';

import 'app/styles/index.scss';
import { StoreProvider } from './app/providers/storeProvider/storeProvider';

render(
    <StoreProvider>
        <ThemeProvider>
            <BrowserRouter>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </BrowserRouter>
        </ThemeProvider>
    </StoreProvider>,
    document.getElementById('root'),
);
