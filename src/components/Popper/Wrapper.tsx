import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

type WrapperPropsType = {
    children: ReactNode;
    className?: string;
};
const cx = classNames.bind(styles);

function Wrapper({ children, className }: WrapperPropsType) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;
