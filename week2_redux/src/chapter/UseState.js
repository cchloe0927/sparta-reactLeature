// src/App.js

import { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  //일반 사용법
  return (
    <div>
      {/* 일반 함수인 경우 -> 버튼을 누르면 onClick안에 있는 함수가 batch로 처리됨  */}
      {/* 즉, 명령어를 세번 내리지만 리액트에서는 최종적으로 한번만 실행함  */}
      {/* 버튼을 누르면 1씩 플러스된다. */}
      <div>{number}</div>
      <button
        onClick={() => {
          setNumber(number + 1); // 첫번째 줄
          setNumber(number + 1); // 두번쨰 줄
          setNumber(number + 1); // 세번째 줄
        }}
      >
        버튼
      </button>
    </div>
  );
};

// 함수형 업데이트 방식
//   return (
//     <div>
//       {/* 명령을 모아서 순차적으로 각각 한 번씩 실행시킨다. */}
//       {/* 버튼을 누르면 3씩 플러스 된다. */}
//       <div>{number}</div>
//       <button
//         onClick={() => {
//           setNumber((previousState) => previousState + 1);
//           setNumber((previousState) => previousState + 1);
//           setNumber((previousState) => previousState + 1);
//         }}
//       >
//         버튼
//       </button>
//     </div>
//   );
// };

export default App;
