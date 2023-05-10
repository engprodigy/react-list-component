import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

const List = (props) => {
  const [numbers, setSelectedOption] = useState(props.items);
  const onOptionClicked = (numbers, value) => () => {
    if (value == 'A') {
      let count = numbers.indexOf('A');
      console.log(count);
      numbers.splice(count, 1);
      numbers.splice(0, 0, 'A');
      numbers = [...numbers];
      setSelectedOption(numbers);
    } else if (value == 'B') {
      let count = numbers.indexOf('B');
      console.log(count);
      numbers.splice(count, 1);
      numbers.splice(0, 0, 'B');
      numbers = [...numbers];
      setSelectedOption(numbers);
    } else if (value == 'C') {
      let count = numbers.indexOf('C');
      console.log(count);
      numbers.splice(count, 1);
      numbers.splice(0, 0, 'C');
      numbers = [...numbers];
      setSelectedOption(numbers);
    }
  };

  const listItems = numbers.map((number) => (
    <li key={number.toString()} onClick={onOptionClicked(numbers, number)}>
      {number}
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

document.body.innerHTML = "<div id='root'></div>";

const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
ReactDOM.render(<List items={['B', 'C', 'A']} />, rootElement);

let listItem = document.querySelectorAll('li')[2];
if (listItem) {
  listItem.click();
}

setTimeout(() => console.log(document.getElementById('root').innerHTML));
