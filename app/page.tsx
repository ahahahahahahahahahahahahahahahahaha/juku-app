'use client'
import { useState } from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { test: '1学期中間', score: 58 },
  { test: '1学期期末', score: 64 },
  { test: '2学期中間', score: 71 },
  { test: '2学期期末', score: 78 },
]


const students = [
  {
    name: '山田 太郎',
    grade: '中3',
    hensachi: 67,
    risk: '高',

    scores: [
      { test: '1学期中間', score: 58 },
      { test: '1学期期末', score: 64 },
      { test: '2学期中間', score: 71 },
      { test: '2学期期末', score: 78 },
    ]
  },

  {
    name: '佐藤 翔',
    grade: '中2',
    hensachi: 59,
    risk: '中',

    scores: [
      { test: '1学期中間', score: 52 },
      { test: '1学期期末', score: 55 },
      { test: '2学期中間', score: 57 },
      { test: '2学期期末', score: 59 },
    ]
  },

  {
    name: '高橋 悠',
    grade: '中1',
    hensachi: 52,
    risk: '低',

    scores: [
      { test: '1学期中間', score: 45 },
      { test: '1学期期末', score: 48 },
      { test: '2学期中間', score: 51 },
      { test: '2学期期末', score: 52 },
    ]
  },
]


export default function Home() {
  const [sortType, setSortType] = useState('')
const [selectedStudent, setSelectedStudent] = useState<any>(null)
const sortedStudents = [...students].sort((a, b) => {

  if (sortType === 'hensachi') {
    return b.hensachi - a.hensachi
  }

  if (sortType === 'grade') {

    const order = {
      '中1': 1,
      '中2': 2,
      '中3': 3,
      '高1': 4,
      '高2': 5,
      '高3': 6,
    }

return order[a.grade as keyof typeof order]
  - order[b.grade as keyof typeof order]
  }

  if (sortType === 'risk') {

    const riskOrder = {
      '高': 1,
      '中': 2,
      '低': 3,
    }

  return riskOrder[a.risk as keyof typeof riskOrder]
  - riskOrder[b.risk as keyof typeof riskOrder]
  }

  return 0
})
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* タイトル */}
      <h1 className="text-2xl md:text-4xl font-bold mb-6">
        塾管理ダッシュボード
      </h1>

      {/* 上部カード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500 text-sm">
            在籍生徒数
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            142
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500 text-sm">
            要注意生徒
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-red-500 mt-2">
            8
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500 text-sm">
            未提出宿題
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mt-2">
            12
          </h2>
        </div>

      </div>

      {/* 生徒一覧 */}
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow mb-6 overflow-x-auto">

        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">

          <h2 className="text-xl md:text-2xl font-bold">
            生徒一覧
          </h2>

          <input
            className="border rounded-xl px-4 py-2 w-full md:w-64"
            placeholder="生徒検索"
          />

        </div>
        <div className="flex flex-wrap gap-2 mb-4">

  <button
    onClick={() => setSortType('hensachi')}
    className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm"
  >
    偏差値順
  </button>

  <button
    onClick={() => setSortType('grade')}
    className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm"
  >
    学年順
  </button>

  <button
    onClick={() => setSortType('risk')}
    className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm"
  >
    危険度順
  </button>

  <button
    onClick={() => setSortType('')}
    className="bg-gray-500 text-white px-4 py-2 rounded-xl text-sm"
  >
    リセット
  </button>

</div>

        <table className="w-full min-w-[500px]">

          <thead>
            <tr className="text-left border-b text-sm md:text-base">
              <th className="py-3">名前</th>
              <th>学年</th>
              <th>偏差値</th>
              <th>危険度</th>
            </tr>
          </thead>

<tbody>

{sortedStudents.map((student, index) => (

 <tr
  key={index}
  onClick={() => setSelectedStudent(student)}
  className="border-b text-sm md:text-base hover:bg-blue-50 cursor-pointer transition"
>

      <td className="py-4">
        {student.name}
      </td>

      <td>
        {student.grade}
      </td>

      <td>
        {student.hensachi}
      </td>

      <td>

        <span
          className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold
          ${
            student.risk === '高'
              ? 'bg-red-100 text-red-600'
              : student.risk === '中'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {student.risk}
        </span>

      </td>

    </tr>

  ))}

</tbody>

        </table>

      </div>

      {/* 下部 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* グラフ */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow">

          <h2 className="text-xl md:text-2xl font-bold mb-4">
            成績推移
          </h2>

          <div className="h-64 md:h-72">

            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>

                <XAxis dataKey="test" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#2563eb"
                  strokeWidth={3}
                />

              </LineChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* AI分析 */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow">

          <h2 className="text-xl md:text-2xl font-bold mb-4">
            AI学習分析
          </h2>

          <div className="space-y-4">

            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="font-semibold">
                数学
              </p>

              <p className="text-gray-700 mt-2 text-sm md:text-base">
                関数は理解できていますが、
                図形証明に苦手傾向があります。
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-xl">
              <p className="font-semibold">
                注意
              </p>

              <p className="text-gray-700 mt-2 text-sm md:text-base">
                宿題提出率が2週間低下しています。
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <p className="font-semibold">
                推奨アクション
              </p>

              <p className="text-gray-700 mt-2 text-sm md:text-base">
                面談実施を推奨します。
              </p>
            </div>

          </div>

        </div>

      </div>
{/* 生徒詳細モーダル */}
{selectedStudent && (

  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

    <div className="bg-white w-full max-w-2xl rounded-3xl p-6 shadow-2xl relative">

      {/* 閉じる */}
      <button
        onClick={() => setSelectedStudent(null)}
        className="absolute top-4 right-4 text-gray-500 text-xl"
      >
        ×
      </button>

      {/* 名前 */}
      <h2 className="text-3xl font-bold mb-2">
        {selectedStudent.name}
      </h2>

      <p className="text-gray-500 mb-6">
        {selectedStudent.grade} / 偏差値 {selectedStudent.hensachi}
      </p>

      {/* グラフ */}
      <div className="h-72 mb-6">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={selectedStudent.scores}>

            <XAxis dataKey="test" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#2563eb"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* AI分析 */}
      <div className="space-y-4">

        <div className="bg-blue-50 p-4 rounded-2xl">
          <p className="font-bold mb-2">
            AI分析
          </p>

          <p className="text-gray-700">
            数学の関数分野は安定しています。
            一方、図形証明でミス傾向があります。
          </p>
        </div>

        <div className="bg-red-50 p-4 rounded-2xl">
          <p className="font-bold mb-2">
            要注意ポイント
          </p>

          <p className="text-gray-700">
            宿題提出率が低下しています。
          </p>
        </div>

      </div>

    </div>

  </div>

)}
    </main>
  )
}