import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item, current.type);
                        }
                    }}
                />
            );
        });
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                visible
                interactive
                placement="bottom-end"
                delay={[null, 650]}
                render={(attrs) => {
                    return (
                        <div className={cx('menu-list')} {...attrs}>
                            <PopperWrapper>
                                {history.length > 1 && (
                                    <Header
                                        title={current.title}
                                        onBack={() => {
                                            setHistory(
                                                history.slice(
                                                    0,
                                                    history.length - 1
                                                )
                                            );
                                        }}
                                    />
                                )}
                                {renderItems()}
                            </PopperWrapper>
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
