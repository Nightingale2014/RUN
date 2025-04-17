import React from "react";

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryGrid from './components/CategoryGrid';
import RegionTags from './components/RegionTags';
import StudyList from './components/StudyList';

function App() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <Header />
            <SearchBar />
            <CategoryGrid />
            <RegionTags />
            <StudyList />
        </div>
    );
}

export default App ;