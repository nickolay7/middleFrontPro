import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { pathsConfig } from './config';

const AppRoutes = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>{t('Загрузка...')}</div>}>
            <Routes>
                {
                    pathsConfig.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
