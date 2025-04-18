import React from "react";

function SearchBar() {
    return (
        <div className="flex items-center justify-center mb-6">
            <input
                type="text"
                placeholder="스터디 키워드를 입력하세요"
                className="border border-gray-300 rounded-l-full px-6 py-2 w-72 focus:outline-none shadow-sm"
            />
            <button className="bg-primary hover:bg-primaryHover text-white px-6 py-2 rounded-r-full shadow-sm transition">
                검색
            </button>
        </div>
    );
}

export default SearchBar;
