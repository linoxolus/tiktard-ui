import {
    faEllipsisVertical,
    faMessage,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';

import 'tippy.js/dist/tippy.css';
import { MORE_MENU, USER_MENU } from '~/API/mocks';
import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';

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

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <images.logo.ReactComponent />
                </div>
                
                <Search/>

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
                                <Image
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
