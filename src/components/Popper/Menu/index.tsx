import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

type MenuPropsType = {
    children: React.ReactElement;
    items?: any;
    hideOnClick?: boolean;
    onChange?: (item: any) => void;
};

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }: MenuPropsType) {
    const [history, setHistory] = useState([{ data: items }]);
    const current: any = history[history.length - 1];

    const renderItems = () => {
        return current?.data?.map((item: any, index: number) => {
            const isParent = !!item?.children; // !! is convert to boolean
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        isParent ? setHistory((prev) => [...prev, item?.children]) : onChange(item);
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs: any) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current?.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            render={renderResult}
            onHide={handleResetMenu}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            delay={[0, 700]}
            interactive
            offset={[12, 12]}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
