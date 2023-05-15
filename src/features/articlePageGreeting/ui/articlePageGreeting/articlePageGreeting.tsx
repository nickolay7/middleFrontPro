import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Modal } from '@/shared/ui/modal';
import { Text } from '@/shared/ui/text';
import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { jsonSettingsSelector, setUserJsonSettings } from '@/entities/user';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isModalOpen, setModalOpen] = useState(false);
    const jsonSettings = useAppSelector(jsonSettingsSelector);
    const dispatch = useAppDispatch();
    const onClose = useCallback(() => {
        setModalOpen(false);
    }, []);

    useEffect(() => {
        if (!jsonSettings.wasArticlePageOpened) {
            setModalOpen(true);
            dispatch(setUserJsonSettings({ wasArticlePageOpened: true }));
        }
    }, [dispatch, jsonSettings.wasArticlePageOpened]);

    return (
        <div>
            <Modal lazy isModalOpen={isModalOpen} toggleHandler={onClose}>
                <Text title={t('Добро пожаловать на страницу со статьями!')} />
            </Modal>
        </div>
    );
});
