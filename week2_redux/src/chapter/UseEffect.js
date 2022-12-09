import React, { useEffect, useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');

  //useEffect: component가 화면에 mount 또는 unmount 됐을 때 실행이 되는 훅
  useEffect(() => {
    //이 부분이 실행된다.
    console.log('hello useEffect');
  }, []);

  /*
=전체 흐름은 아래와 같습니다.=
1. input에 값을 입력한다. 
2. value, 즉 state가 변경된다.
3. state가 변경되었기 때문에, App 컴포넌트가 리렌더링 된다.
4. 리렌더링이 되었기 때문에 useEffect가 다시 실행된다. 
5. 1번 → 5번 과정이 계속 순환환다.
 */

  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default App;
