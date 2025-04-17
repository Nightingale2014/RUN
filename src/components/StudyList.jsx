import React from "react";

const studies = [
    {
        title: 'React 스터디 모집합니다!',
        description: '서울대입구 | 매주 토요일 오전 10시 | 초급자 환영',
    },
    {
        title: '코테 대비 알고리즘 스터디',
        description: '강남 | 주2회 | 백준 플래티넘 목표',
    },
    {
        title: 'UX/UI 디자인 스터디',
        description: '신촌 | 매주 수요일 저녁 7시 | 실습 중심',
    },
];

function StudyList() {
    return (
        <div className="space-y-4">
            {studies.map((study, i) => (
                <div key={i} className="border p-4 rounded shadow hover:bg-orange-50">
                    <h2 className="text-lg font-bold mb-1">{study.title}</h2>
                    <p className="text-sm text-gray-600">{study.description}</p>
                </div>
            ))}
        </div>
    );
}

export default StudyList;