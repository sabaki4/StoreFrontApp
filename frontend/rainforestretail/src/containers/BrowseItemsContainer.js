import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemThumbnail from "../components/ItemThumbnail";


const BrowseItemsContainer = ({ items }) => {
    const categories = Array.from(new Set(items.map(item => item.category)));
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortByPrice, setSortByPrice] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleSortByPriceChange = (event) => {
        setSortByPrice(event.target.value);
    };

    const filteredItems = items.filter(item => {
        if (selectedCategory !== 'All' && item.category !== selectedCategory) {
            return false;
        }
        if (minPrice && parseInt(item.unitPrice) < parseInt(minPrice)) {
            return false;
        }
        if (maxPrice && parseInt(item.unitPrice) > parseInt(maxPrice)) {
            return false;
        }
        return true;
    }).sort((a, b) => {
        if (sortByPrice === 'asc') {
            return parseInt(a.unitPrice) - parseInt(b.unitPrice);
        } else if (sortByPrice === 'desc') {
            return parseInt(b.unitPrice) - parseInt(a.unitPrice);
        }
        return 0;
    });

    return (
        <div className='BrowseItem'>
            <select
                className="filter-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
            >
                <option value="All">All Categories</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>

            <input
                className="filter-input"
                type="text"
                placeholder="Min Price"
                value={minPrice}
                onChange={handleMinPriceChange}
            />
            <input
                className="filter-input"
                type="text"
                placeholder="Max Price"
                value={maxPrice}
                onChange={handleMaxPriceChange}
            />
            <select
                className="filter-dropdown"
                value={sortByPrice}
                onChange={handleSortByPriceChange}
            >
                <option value="">Sort By Price</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>

            <ul className="browse-items">
                {filteredItems.map(item => (
                    <li key={item.id}>
                        <Link to={`/items/${item.id}`}><ItemThumbnail item={item} /></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseItemsContainer;