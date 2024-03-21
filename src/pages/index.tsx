import React, { useState } from 'react';
//First, I imported React and a function called useState from the 'react' library, it's a tool provided by React to manage the state of our application. 

export default function Home() { //Where all the logics and the flow of the website is managed. It handles user interactions, and renders the user interface to display the stack and allow users to interact with it.
  const [stack, setStack] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  //executes the removal of the top item in the stack
  const removeTop = (arr: string[]) => {
    if (arr.length === 1) {
      return [];
    }
    const newArr = new Array(arr.length - 1);
    for (let i = 1; i < arr.length; i++) {
      newArr[i - 1] = arr[i];
    }
    return newArr;
  };

  //in this part, executes when the user clicks on the "Push" button in the user interface whether it contains string or not.
  const handlePush = () => {
    if (!inputValue.trim()) {
      alert('Please enter a valid input.'); 
      return; //If the user will click the push button and the there's no inputted string listed yet, the alert would diplay
    }
    //handles the process of adding a new item to the stack:
    const newItem = inputValue; 
    const updatedStack = [newItem].concat(stack);
    setStack(updatedStack);
    setInputValue('');
  };

  // the total opposite of "Push" button, this removes a string from the top.
  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return; //If the user will click the pop button and the there's no stack listed yet, the alert would diplay
    }
    const updatedStack = removeTop(stack);
    setStack(updatedStack); 
  };

  return ( //In this part, is where all the used functions is being added some values. 
    <div className="container">
      <div className="border rounded-md p-4">
        <div className="mb-4">
          <input
            type="text"
            className="input-field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="button-group">
            <button className="push-button" onClick={handlePush}>
              Push
            </button>
            <button className="pop-button" onClick={handlePop}>
              Pop
            </button>
          </div>
        </div>
        {stack.length > 0 && (
          <ul className="stack-list">
            {stack.map((item, index) => (
              <li key={index} className="stack-item">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
