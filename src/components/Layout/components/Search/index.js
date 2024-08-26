import {
    faMagnifyingGlass,
    faSpinner,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import 'tippy.js/dist/tippy.css';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        const apiUrl = `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
            searchValue
        )}&type=less`;
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(apiUrl)
            .then((res) => res.json())
            // .then((res) => setSearchResult(res.data));
            .then((res) => {
                if (res.data) {
                    setSearchResult(res.data);
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    return (
        <HeadlessTippy
            render={(attrs) => (
                <div className={cx('search-result')} {...attrs}>
                    <PopperWrapper>
                        <h3 className={cx('search-title')}>Accounts</h3>
                        {searchResult.map((result) => (
                            <AccountItem data={result} key={result.id} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            visible={searchResult.length > 0 && showResult}
            interactive
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('search')}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    spellCheck={false}
                    ref={inputRef}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue.length > 0 && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={(e) => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                )}

                {loading && (
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />
                )}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
