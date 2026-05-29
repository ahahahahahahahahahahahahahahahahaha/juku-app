'use client'

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
  { name: '山田 太郎', grade: '中3', hensachi: 67, risk: '高' },
  { name: '佐藤 翔', grade: '中2', hensachi: 59, risk: '中' },
  { name: '高橋 悠', grade: '中1', hensachi: 52, risk: '低' },
  { name: '鈴木 陸', grade: '高1', hensachi: 71, risk: '低' },
  { name: '田中 蓮', grade: '中3', hensachi: 63, risk: '中' },
  { name: '伊藤 優奈', grade: '高2', hensachi: 74, risk: '低' },
  { name: '渡辺 海', grade: '中2', hensachi: 48, risk: '高' },
  { name: '小林 陽菜', grade: '中1', hensachi: 56, risk: '中' },
  { name: '加藤 蒼', grade: '高3', hensachi: 68, risk: '低' },
  { name: '吉田 美咲', grade: '中3', hensachi: 61, risk: '中' },

  { name: '松本 翼', grade: '高1', hensachi: 65, risk: '低' },
  { name: '井上 結衣', grade: '中2', hensachi: 53, risk: '中' },
  { name: '木村 陽', grade: '中3', hensachi: 46, risk: '高' },
  { name: '中村 翔太', grade: '高2', hensachi: 72, risk: '低' },
  { name: '林 美月', grade: '中1', hensachi: 57, risk: '中' },
  { name: '清水 大翔', grade: '高3', hensachi: 69, risk: '低' },
  { name: '山口 彩乃', grade: '中2', hensachi: 51, risk: '中' },
  { name: '森 悠人', grade: '中3', hensachi: 43, risk: '高' },
  { name: '池田 さくら', grade: '高1', hensachi: 75, risk: '低' },
  { name: '橋本 悠真', grade: '中1', hensachi: 54, risk: '中' },

  { name: '阿部 美優', grade: '中2', hensachi: 62, risk: '低' },
  { name: '石川 陽斗', grade: '高2', hensachi: 58, risk: '中' },
  { name: '前田 凛', grade: '中3', hensachi: 49, risk: '高' },
  { name: '藤田 翔', grade: '高1', hensachi: 66, risk: '低' },
  { name: '岡田 結菜', grade: '中1', hensachi: 55, risk: '中' },
  { name: '長谷川 蓮', grade: '中2', hensachi: 44, risk: '高' },
  { name: '村上 心', grade: '高3', hensachi: 73, risk: '低' },
  { name: '近藤 美羽', grade: '中3', hensachi: 60, risk: '中' },
  { name: '石井 蒼空', grade: '高2', hensachi: 64, risk: '低' },
  { name: '斎藤 花', grade: '中1', hensachi: 50, risk: '中' },
]

export default function Home() {
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

  {students.map((student, index) => (

    <tr
      key={index}
      className="border-b text-sm md:text-base hover:bg-gray-50"
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

    </main>
  )
}