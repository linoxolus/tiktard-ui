import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ name, username, image }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Anticom_official_logo.png"
                alt="DMCS"
                loading="lazy"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{name}</span>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx('check')}
                    />
                </p>
                <span className={cx('username')}>@{username}</span>
            </div>
        </div>
    );
}

export default AccountItem;
