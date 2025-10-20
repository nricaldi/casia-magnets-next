"use client"

import styles from "./search-bar.module.css"
import { LuSearch } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import React, { useState, ChangeEvent } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const handleCancelButton = () => {
    setQuery('');
  };

  return (
    <div className={styles.searchBarContainer}>

      <div className={styles.searchBar}>
        <LuSearch />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleQueryChange}
        />

        <button
          className={`${styles.cancelButton} ${ query ? styles.enabled : ''}`}
          onClick={handleCancelButton}>
          <LuX className={styles.cancelIcon}/>
        </button>
      </div>

    </div>
  );
}
