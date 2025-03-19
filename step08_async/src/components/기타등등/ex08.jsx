import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 예제 8: useEffect로 조건부 데이터 Fetching
function FetchOnButtonClick() {
  const [data, setData] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  // useEffect로 조건부 데이터 Fetching
  useEffect(() => {
    if (!fetchData) return; // fetchData 상태가 true로 변경될 때 useEffect가 실행되어 API 요청이 보내집니다.

    const getData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // 요청이 완료되면 fetchData 상태를 false로 되돌려 한 번 클릭할 때만 데이터가 가져와지도록 합니다.
        setFetchData(false);
      }
    };

    getData();
  }, [fetchData]);

  return (
    <div>
      {/*특정 버튼을 클릭할 때만 API 요청을 보내 데이터를 가져오는 예제입니다. */}
      <button onClick={() => setFetchData(true)}>Fetch Data</button> 
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchOnButtonClick;