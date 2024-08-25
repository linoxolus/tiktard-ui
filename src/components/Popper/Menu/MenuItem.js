import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button
            leftIcon={data.icon}
            to={data.to}
            href={data.href}
            className={cx('menu-item')}
            text
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
