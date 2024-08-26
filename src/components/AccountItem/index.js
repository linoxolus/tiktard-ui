import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    if (!data.full_name || data.full_name === '') {
        data.full_name = data.nickname;
    }
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt="DMCS"
                loading="lazy"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx('check')}
                        />
                    )}
                </p>
                <span className={cx('username')}>@{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
