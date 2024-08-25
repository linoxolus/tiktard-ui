import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAmerica,
    faGear,
    faHouseUser,
    faMoon,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

const LANGUAGE = {
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
};

const USER_MENU = [
    {
        title: 'View profile',
        icon: <FontAwesomeIcon icon={faUser} />,
        to: '/@dmcs',
    },
    {
        title: 'Get Coins',
        icon: <FontAwesomeIcon icon={faCoins} />,
        to: '/coin',
    },
    {
        title: 'Creator tools',
        icon: <FontAwesomeIcon icon={faHouseUser} />,
        to: '',
    },
    {
        title: 'Settings',
        icon: <FontAwesomeIcon icon={faGear} />,
        to: '/setting',
    },
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        to: '',
        children: LANGUAGE,
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
    {
        title: 'Log Out',
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        to: '',
        separate: true,
    },
];

const MORE_MENU = [
    {
        title: 'Creator tools',
        icon: <FontAwesomeIcon icon={faHouseUser} />,
        to: '',
    },
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        to: '',
        children: LANGUAGE,
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

export { USER_MENU, MORE_MENU };
