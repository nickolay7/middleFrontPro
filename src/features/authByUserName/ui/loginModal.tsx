import { FC } from 'react';
import { Modal } from 'shared/ui/modal';
import { LoginForm } from './loginForm';

interface LoginModalProps {
    isModalOpen: boolean;
    toggleHandler: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        isModalOpen,
        toggleHandler,
    } = props;

    return (
        <Modal isModalOpen={isModalOpen} toggleHandler={toggleHandler}>
            <LoginForm />
        </Modal>
    );
};
