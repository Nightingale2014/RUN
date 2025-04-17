import React from "react";

const regions = [
    '서울대입구', '신촌', '강남', '홍대', '건대', '판교',
    '수원', '인천캠', '부산서면', '대전', '광주', '제주',
];

function RegionTags() {
    return (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
            {regions.map((region, i) => (
                <button
                    key={i}
                    className="bg-gray-200 px-4 py-1 rounded-full hover:bg-orange-200 text-sm"
            >
                {region}
            </button>
            ))}
        </div>
    );
}

export default RegionTags;