
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 예제7 : useEffect로 데이터 갱신 및 폴링(polling) 구현
function LiveData() {
  const [data, setData] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // 일정 간격으로 비동기 데이터를 갱신하여 새로운 데이터를 표시하는 예제입니다.
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching live data:", error);
      }
    };

    fetchData();
    const id = setInterval(fetchData, 5000); // useEffect 내에서 setInterval을 설정해 일정 간격(5초)마다 데이터를 새로 가져옵니다.
    setIntervalId(id);

    return () => clearInterval(id); // 컴포넌트가 언마운트될 때 clearInterval을 호출해 타이머를 정리합니다.
  }, []);

  return (
    <div>
      <h2>Live Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default LiveData;