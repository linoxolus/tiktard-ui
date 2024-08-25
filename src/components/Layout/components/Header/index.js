import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import {
    faEllipsisVertical,
    faMagnifyingGlass,
    faSpinner,
    faTimesCircle,
    faCircleQuestion,
    faEarthAmerica,
    faHouseUser,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Creator tools',
        icon: <FontAwesomeIcon icon={faHouseUser} />,
        to: '',
    },
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        to: '',
        children: {
            title: 'Language',
            type: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'fi',
                    title: 'Suomi',
                },
                {
                    code: 'no',
                    title: 'Norsk',
                },
                {
                    code: 'se',
                    title: 'Svenska',
                },
                {
                    code: 'dk',
                    title: 'Dansk',
                },
                {
                    code: 'ch',
                    title: 'Schweizerdeutsch',
                },
                {
                    code: 'nl',
                    title: 'Nederlands',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/feedback',
    },
    {
        title: 'Dark Mode',
        icon: <FontAwesomeIcon icon={faMoon} />,
        to: '',
    },
];

function Header() {

    function handleMenu(item, type) {
        switch(type) {
            case 'language':
                break;
            default:
        }
    }

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
                    <Menu items={MENU_ITEMS} onChange={handleMenu}>
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
