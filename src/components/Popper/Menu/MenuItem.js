import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, ...props }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            leftIcon={data.icon}
            to={data.to}
            href={data.href}
            className={classes}
            onClick={onClick}
            text
            {...props}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
