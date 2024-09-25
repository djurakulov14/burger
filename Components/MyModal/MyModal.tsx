
import cl from './MyModal.module.scss';

interface ModalProps {
	children: React.ReactNode;
    visible: Boolean,
    setVisible: Function,
}   

const MyModal: React.FC<ModalProps> = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;