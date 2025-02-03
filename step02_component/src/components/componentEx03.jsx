/*
3. 재사용 가능한 컴포넌트 구조화하기
React 컴포넌트는 한 번 정의하면 여러 곳에서 재사용이 가능합니다. 
효율적인 컴포넌트 구조화를 위해 다음 원칙을 지키면 좋습니다.

3.1 컴포넌트 분리
하나의 컴포넌트에 많은 기능이 담겨 있으면 유지보수가 어렵습니다. 
따라서 기능별로 컴포넌트를 분리하여 관리하면 재사용성이 높아지고, 코드 가독성도 좋아집니다.
예를 들어, 아래와 같은 컴포넌트 분리가 가능합니다.
*/

// Button.js - 버튼 컴포넌트
export function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

// UserProfile.js - 사용자 프로필 컴포넌트
export function UserProfile({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
}
/*
  3.2 컴포넌트 조합
  컴포넌트는 다른 컴포넌트 안에 포함될 수 있습니다. 이를 **컴포지션(Composition)**이라고 하며, 여러 개의 작은 컴포넌트를 조합해 하나의 큰 컴포넌트를 구성할 수 있습니다.
*/

// UserCard.js
//import UserProfile from './UserProfile';
//import Button from './Button';

export function UserCard(props) {
  return (
    <div className="user-card">
      <UserProfile name={props.name} age={props.age} />
      <Button label="Follow" onClick={props.onFollow} />
    </div>
  );
}
//UserCard 컴포넌트는 UserProfile과 Button 컴포넌트를 포함하여, 하나의 카드 형태로 사용자 정보와 버튼을 보여줍니다.

/*
3.3 부모-자식 컴포넌트 간의 데이터 전달
React에서 데이터는 상위 컴포넌트에서 하위 컴포넌트로 props를 통해 전달됩니다. 이를 통해 데이터를 공유하고 관리할 수 있습니다.
*/


function App() {
  const handleFollow = () => {
    alert("Followed!");
  };

  return (
    <div>
      <UserCard name="John Doe" age={30} onFollow={handleFollow} />
    </div>
  );
}
//위의 App 컴포넌트에서는 handleFollow 함수를 정의하고, UserCard 컴포넌트의 onFollow props로 전달하여 하위 컴포넌트에서 호출할 수 있습니다.