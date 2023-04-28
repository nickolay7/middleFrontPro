import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/app/providers/theme';
import App from './app/App';
import '@/shared/config/i18n';
import { ErrorBoundary } from './shared/errorBoundary';
import { StoreProvider } from './app/providers/storeProvider';

import '@/app/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
export { ElementTheme } from './shared/types/ui';
export { ArticleType } from '@/shared/types/articleTypes';
