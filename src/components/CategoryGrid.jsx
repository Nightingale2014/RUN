import React from "react";

const categories = [
    { emoji: '📚', label: '스터디 모집' },
    { emoji: '💻', label: '온라인 스터디' },
    { emoji: '🏫', label: '오프라인 모임' },
    { emoji: '📌', label: '스터디룸 공유' },
    { emoji: '💬', label: '자유 커뮤니티' },
    { emoji: '📊', label: '자료/후기' },
];

function CategoryGrid() {
    return (
        <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
            {categories.map((cat, i) => (
                <div
                    key={i}
                    className="bg-gray-100 flex flex-col justify-center items-center p-6 rounded-2xl shadow-md hover:bg-primary hover:text-white transition"
                >
                    <div className="text-3xl">{cat.emoji}</div>
                    <div className="mt-2 font-semibold text-sm">{cat.label}</div>
                </div>
                ))}
            </div>
    );
}

export default CategoryGrid