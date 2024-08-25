import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import {
    faEllipsisVertical,
    faMagnifyingGlass,
    faSpinner,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    setTimeout(() => {
        setSearchResult([]);
    }, 0);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <images.logo.ReactComponent />
                </div>
                <Tippy
                    render={(attrs) => (
                        <div className={cx('search-result')} {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Accounts</h3>
                                <AccountItem
                                    name={'Nguyen Gay Lo'}
                                    username={'nguyengaylo119'}
                                />
                                <AccountItem
                                    name={'Tran Thui Dai'}
                                    username={'tranthaiduiyt997'}
                                />
                                <AccountItem
                                    name={'Trinh Bu Cu'}
                                    username={'trinhbucu384'}
                                />
                            </PopperWrapper>
                        </div>
                    )}
                    visible={searchResult.length > 0}
                    interactive
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="Search"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button href="/db" primary small>
                        Log In
                    </Button>
                    <Menu>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
