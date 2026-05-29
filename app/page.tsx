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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold mb-6">
        塾管理ダッシュボード
      </h1>

      {/* 上部カード */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500">在籍生徒数</p>
          <h2 className="text-4xl font-bold mt-2">142</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500">要注意生徒</p>
          <h2 className="text-4xl font-bold text-red-500 mt-2">
            8
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500">未提出宿題</p>
          <h2 className="text-4xl font-bold text-orange-500 mt-2">
            12
          </h2>
        </div>

      </div>

      {/* 生徒一覧 */}
      <div className="bg-white rounded-2xl p-6 shadow mb-6">

        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">
            生徒一覧
          </h2>

          <input
            className="border rounded-xl px-4 py-2"
            placeholder="生徒検索"
          />
        </div>

        <table className="w-full">

          <thead>
            <tr className="text-left border-b">
              <th className="py-3">名前</th>
              <th>学年</th>
              <th>偏差値</th>
              <th>危険度</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-4">山田 太郎</td>
              <td>中3</td>
              <td>67</td>
              <td>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                  高
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-4">佐藤 翔</td>
              <td>中2</td>
              <td>59</td>
              <td>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  中
                </span>
              </td>
            </tr>

          </tbody>
        </table>

      </div>

      {/* 生徒詳細 */}
      <div className="grid grid-cols-2 gap-6">

        {/* グラフ */}
        <div className="bg-white rounded-2xl p-6 shadow">

          <h2 className="text-2xl font-bold mb-4">
            成績推移
          </h2>

          <div className="h-72">

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
        <div className="bg-white rounded-2xl p-6 shadow">

          <h2 className="text-2xl font-bold mb-4">
            AI学習分析
          </h2>

          <div className="space-y-4">

            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="font-semibold">
                数学
              </p>

              <p className="text-gray-700 mt-2">
                関数は理解できていますが、
                図形証明に苦手傾向があります。
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-xl">
              <p className="font-semibold">
                注意
              </p>

              <p className="text-gray-700 mt-2">
                宿題提出率が2週間低下しています。
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <p className="font-semibold">
                推奨アクション
              </p>

              <p className="text-gray-700 mt-2">
                面談実施を推奨します。
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  )
}