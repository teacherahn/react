import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartEx = () => {

  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  return (
    <>
        {/* 사이즈 수정 */}
        <LineChart width={1200} height={500} data={data} 
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid stroke="red" strokeDasharray="3 3" /> {/* 격자선 */} 
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `${value}이렇게나옴`} /> {/* 툴팁(마우스 오버시 나오는 정보창) 수정 */}
          <Legend verticalAlign="top" height={36}/> {/* 범례 위치 */}
          <Line name="data1" type="monotone" dataKey="pv" stroke="#8884d8" />   {/* name으로 범례 수정 */}
          <Line name="data2" type="monotone" dataKey="uv" stroke="#82ca9d" />   
          <Line name="data3" type="monotone" dataKey="amt" stroke="black " /> {/* 추가한 선 */}
        </LineChart>
    </>
  );
}

export default LineChartEx;
