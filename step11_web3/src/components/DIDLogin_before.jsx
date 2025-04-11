// // ✅ Web3.js 인증 기반 예제 (React 프론트에서 DID 로그인)
// // - 사용자가 메타마스크로 서명
// // - DID와 VP를 Go 서버로 전송

// // 브라우저(Chrome, Firefox 등)에서 MetaMask 확장 프로그램이 설치
// // npm install web3 axios

// import React, { useState } from 'react';
// import Web3 from 'web3';
// import axios from 'axios';

// const DIDLogin = () => {
//   const [address, setAddress] = useState('');
//   const [status, setStatus] = useState('');

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       const web3 = new Web3(window.ethereum);
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const accounts = await web3.eth.getAccounts();
//       setAddress(accounts[0]);
//       setStatus('지갑 연결됨: ' + accounts[0]);
//     } else {
//       setStatus('MetaMask를 설치해주세요.');
//     }
//   };

//   const signAndSendVP = async () => {
//     const web3 = new Web3(window.ethereum);

//     // VP 구조 (예시)
//     const vp = {
//       holder: 'did:ethr:' + address,
//       vcs: [
//         {
//           id: 'urn:uuid:1234',
//           type: ['VerifiableCredential', 'Membership'],
//           issuer: 'did:example:issuer1',
//           credentialSubject: {
//             id: 'did:ethr:' + address,
//             name: '홍길동',
//             membership: 'premium'
//           }
//         }
//       ]
//     };

//     // 문자열로 변환 후 서명
//     const message = JSON.stringify(vp);
//     const signature = await web3.eth.personal.sign(message, address, '');

//     // Go 서버로 VP + 서명 전송
//     try {
//       const res = await axios.post('http://localhost:9090/verify-vp', {
//         vp,
//         proof: signature
//       });
//       setStatus('✅ 서버 응답: ' + res.data.message);
//     } catch (err) {
//       setStatus('❌ 인증 실패: ' + err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>DID 로그인 (Web3.js)</h2>
//       <button onClick={connectWallet}>지갑 연결</button>
//       <button onClick={signAndSendVP}>VC 제출 및 로그인</button>
//       <p>{status}</p>
//     </div>
//   );
// };

// export default DIDLogin;




// import React, { useState } from 'react';
// import Web3 from 'web3';
// import axios from 'axios';

// const DIDLogin = () => {
//   const [address, setAddress] = useState('');
//   const [status, setStatus] = useState('');

//   const connectWallet = async () => {
//     if (!window.ethereum) return setStatus('MetaMask를 설치해주세요.');

//     const web3 = new Web3(window.ethereum);
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const accounts = await web3.eth.getAccounts();
//     setAddress(accounts[0]);
//     setStatus('지갑 연결됨: ' + accounts[0]);
//   };

//   const signAndSendVP = async () => {
//     const web3 = new Web3(window.ethereum);

//     const vp = {
//       holder: 'did:ethr:' + address,
//       vcs: [
//         {
//           id: 'urn:uuid:1234',
//           type: ['VerifiableCredential'],
//           issuer: 'did:example:issuer1',
//           credentialSubject: {
//             id: 'did:ethr:' + address,
//             name: '홍길동',
//             role: 'member'
//           }
//         }
//       ]
//     };

//     const vpString = JSON.stringify(vp);
//     const hash = web3.utils.sha3(vpString);
//     const signature = await web3.eth.personal.sign(hash, address, '');

//     try {
//       const res = await axios.post('http://127.0.0.1:9090/verify-vp', { // Corrected IP address
//         vp,
//         proof: signature
//       }, {
//         headers: { 'Content-Type': 'application/json' }
//       });
//       setStatus('✅ 서버 응답: ' + res.data.message);
//     } catch (err) {
//       console.error(err);
//       setStatus('❌ 인증 실패: ' + err.response?.data?.error || err.message);
//     }
//   };

//   return (
//     <div style={{ fontFamily: 'Arial', padding: '20px' }}>
//       <h2>DID 로그인 (Web3.js)</h2>
//       <button onClick={connectWallet}>🦊 지갑 연결</button>
//       <button onClick={signAndSendVP} disabled={!address} style={{ marginLeft: '10px' }}>
//         🔐 VC 제출 및 로그인
//       </button>
//       <p style={{ marginTop: '20px', color: 'green' }}>{status}</p>
//     </div>
//   );
// };

// export default DIDLogin;