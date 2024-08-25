import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAmerica,
    faHouseUser,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

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

const renderItems = () => {
    return MENU_ITEMS.map((item, index) => {
        return <MenuItem data={item} key={index} />;
    });
};

function Menu({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                placement="bottom-end"
                delay={[null, 650]}
                render={(attrs) => {
                    return (
                        <div className={cx('menu-list')} {...attrs}>
                            <PopperWrapper>{renderItems()}</PopperWrapper>
                        </div>
                    );
                }}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
