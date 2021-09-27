import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null);
	
	const result = notes.map((note, index) => {
		return <p key={index} onClick={() => setEditNum(index)}>
			{note}
		</p>;
	});
	
	function changeItem(event) {
		setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
	}
	
	return <div>
		{result}
		<input value={editNum ? notes[editNum] : ''} onChange={changeItem} />
	</div>;
}

/*function App() {
	const [notes, setNotes] = useState([1, 2, 3]);
  
  function getSum(arr) {
    let sum = 0;
    
    for (const elem of arr) {
      sum += +elem;
    }
    
    return sum;
  }
	
	function changeHandler(index, event) {
		setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
	}
	
	return <div>
		<input value={notes[0]} onChange={event => changeHandler(0, event)} />
		<input value={notes[1]} onChange={event => changeHandler(1, event)} />
		<input value={notes[2]} onChange={event => changeHandler(2, event)} />
		
		{getSum(notes)}
	</div>;
}

/*function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	
	const result = notes.map((note, index) => {
		return <p key={index} >
			{note}
      <button onClick={() => remItem(index)}>btn</button>
		</p>;
	});
	
	function remItem(index) {
		setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
	}
	
	return <div>
		{result}
	</div>;
}


/*function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	
	const result = notes.map((note, index) => {
		return <p key={index}>{note}</p>;
	});

  function copyArr (){
    const copy = Object.assign([], notes);
    copy.push(6); // так правильно
    setNotes(copy);
  }

	return <div>
		{result}
    <button onClick={copyArr}>btn</button>
	</div>;
}

/*function App() {
	const [value, setValue] = useState(1);
	function changeHandler(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<input
			type="radio"
			name="radio"
			value="1"
			checked={value === '1' ? true : false}
			onChange={changeHandler}
		/> html
		<input
			type="radio"
			name="radio"
			value="2"
			checked={value === '2' ? true : false}
			onChange={changeHandler}
		/> css
		<input
			type="radio"
			name="radio"
			value="3"
			checked={value === '3' ? true : false}
			onChange={changeHandler}
		/>js
      <p>знает {value === '1' ?  'пункт 1': ''} </p>
      <p>знает {value === '2' ?  'пункт 2': ''} </p>
      <p>знает {value === '3' ?  'пункт 3 БРАВО!'  : ''} </p>

</div>
}
/*function App() {
	const [checked, setChecked] = useState(true);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
	
	return <div>
		<div><input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />html </div>
  	<div><input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} />css </div>
    <div><input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} />js </div>
		<p>знает {checked ? 'html' : ''}</p>
    <p>знает  {checked1 ? 'css' : ''}</p>
    <p>знает  {checked2? 'js' : ''}</p>
	</div>;
}*/

/*function App() {
	let [name, setName] = useState('Иван Иванов');
  let [age, setAge] = useState(20);
  let [hater, setBan] = useState(false);
  
  function ban() {

	} 

	return <div>
		<span>{name}</span>
		<span>{age}</span>
    <span>{hater}</span>
    <span>{!hater ? '   забанен' : '   незабанен'}</span>
    <button onClick={() => setBan(!hater)}>{!hater ? '   Разбанить' : '   В бан'}</button>
    <button onClick={() => setAge(age + 1)}>+</button>
    <button onClick={() => setAge(age - 1)}>-</button>
	</div>;
}*/
export default App;