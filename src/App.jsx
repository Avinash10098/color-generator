import { useState } from 'react'
import Values from 'values.js';
import SingleList from './singleList';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [color, setcolor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#db9999').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true)
      toast.error(error.message);
    }
  }

  return (
    <main>
      <section className='section'>
        <h2>color Generator</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type='color'
            value={color}
            onChange={(e) => setcolor(e.target.value)}
          />
          <input id='input-2' className={`${error ? 'ErrorClass' : null}`} type='text' value={color} onChange={(e) => setcolor(e.target.value)} placeholder='#598dfa' />
          <button className='submit-btn' style={{ backgroundColor: color }}><h5>sumbit</h5></button>
        </form>
      </section>
      <section className='section-2'>
        {list.map((red, index) => {
          // console.log(red);
          return <SingleList key={index} {...red} index={index} hexColor={red.hex} />
        })}
      </section>
      <ToastContainer position='top-center' />
    </main>
  )
}

export default App
