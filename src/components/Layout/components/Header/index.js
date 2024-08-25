import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faMagnifyingGlass,
    faSpinner,
    faTimesCircle,
    faPaperPlane,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { USER_MENU, MORE_MENU } from '~/API/mocks';

const cx = classNames.bind(styles);

function Header() {
    function handleMenu(item, type) {
        switch (type) {
            case 'language':
                break;
            default:
        }
    }

    const currentUser = true;

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
                <HeadlessTippy
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
                </HeadlessTippy>
                <div className={cx('actions', { space: currentUser })}>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button href="/db" primary small>
                                Log In
                            </Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? USER_MENU : MORE_MENU}
                        onChange={handleMenu}
                    >
                        {currentUser ? (
                            <div className={cx('avatar')}>
                                <img
                                    src="https://lh5.googleusercontent.com/-VXpgmQggQQM/AAAAAAAAAAI/AAAAAAAABA8/G4nyXM62kXQ/photo.jpg className={cx('action-btn')}"
                                    alt="Nguyen Quang A"
                                />
                            </div>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
