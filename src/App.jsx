import React from "react";

function App() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gray-50">
            <h1 className="text-4xl font-bold mb-8">스터디로그</h1>

            <div className="flex w-full max-w-md mb-6">
                <input
                    type="text"
                    placeholder="스터디 키워드를 입력하세요"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primaryHover transition">
                    검색
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {["서울대입구", "신촌", "강남", "홍대", "건대", "판교", "수원", "인천캠", "부산서면", "대전", "광주", "제주"].map((region) => (
                    <button
                        key={region}
                        className="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-primary hover:text-white transition"
                    >
                        {region}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default App;
