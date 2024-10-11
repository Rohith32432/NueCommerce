import React, { useRef, useEffect, useState } from 'react';
import CallApis from '../Useful/CallApi';
import { Link, useNavigate } from 'react-router-dom';

function Search() {
  const myRef = useRef();
  const { getdata } = CallApis();
  const[results,setresults]=useState([])
  const navigate=useNavigate()
  const Debounce = (delay, cb) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const handleInput = Debounce(500, async () => {
      const query = myRef.current.value;

      if (query) {
        if(query.length==0) setresults([])
        try {
          const data = await getdata(`search?name=${query}`);
          console.log(data);
          setresults(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    });

    const inputElement = myRef.current;
    inputElement.addEventListener('input', handleInput);

    return () => {
      inputElement.removeEventListener('input', handleInput);
    };
  }, [getdata]);

  return (
    <>
  <div className='relative'>
  <input
    ref={myRef}
    type="text"
    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Search..."
  />
  <div className='absolute w-full mt-1 rounded-md shadow-lg bg-white z-10'>
    {results.slice(0,10).map((e, i) => (
      <Link key={i} className='block px-3 py-2 hover:bg-slate-300' to={`/product/${e.id}`}>
        {e.name}
      </Link>
    ))}
  </div>
</div>

    </>
  );
}

export default Search;
