import React from "react";

function SearchBar() {
    return (
        <div className="flex justify-center mb-6">
            <input
                type="text"
                placeholder="스터디 키워드를 입력하세요"
                className="border px-4 py-2 w-2/3 rounded-1-md focus:outline-none"
                />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600">
                검색
            </button>
        </div>
    );
}

export default SearchBar;