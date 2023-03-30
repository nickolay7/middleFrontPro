import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/helpers/classNames';
import { Input } from 'shared/ui/input';
import { Button } from 'shared/ui/button';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import cls from './addCommentForm.module.scss';
import { addCommentFormSelector } from '../model/selectors/addCommentFormSelector/addCommentFormSelector';
import { addCommentFormReducer, setComment } from '../model/slices/addCommentFormSlice';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const data = useAppSelector(addCommentFormSelector);
    const dispatch = useAppDispatch();

    const reducers = {
        addCommentForm: addCommentFormReducer,
    };

    useDynamicModuleLoader(reducers, true);

    const onChange = useCallback((text: string) => {
        dispatch(setComment(text));
    }, [dispatch]);

    const sendCommentHandler = useCallback(() => {
        onSendComment(data?.text);
        dispatch(setComment(''));
    }, [dispatch, onSendComment, data?.text]);

    return (
        <div className={classNames(cls.addCommentForm, {}, [className])}>
            <div className={cls.wrap}>
                <Input
                    placeholder={t('Введите комментарий')}
                    // eslint-disable-next-line i18next/no-literal-string
                    name="comment"
                    value={data?.text}
                    onChange={onChange}
                    label={false}
                />
                <Button onClick={sendCommentHandler}>{t('Сохранить')}</Button>
            </div>
        </div>
    );
});

export default AddCommentForm;
