import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

type MenuItemPropsType = {
    data: any;
    onClick: () => void;
};

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }: MenuItemPropsType) {
    const classes = cx('menu-item', {
        separate: data?.separate,
    });
    return (
        <Button className={classes} leftIcon={data?.icon} to={data?.to} onClick={onClick}>
            {data?.title}
        </Button>
    );
}

export default MenuItem;
