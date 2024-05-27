import React, {useState} from 'react';

import SideBar from './components/SideBar';
import Courses from './components/Courses';

import './styles/global.scss';
import './App.scss'
import { IData, useFetchData } from './hooks/useFetchData';

function App() {
  const { data } = useFetchData();
  const [ visibleCourses, setVisibleCourses] = useState<IData[]>(data);

  return (
    <main className="main">
      <h1 className='visually-hidden'>
        Курсы
      </h1>

      <SideBar className='main__side-bar' setVisibleCourses={setVisibleCourses} data={data} />

      <Courses className='main__courses' visibleCourses={visibleCourses} />
    </main>
  );
}

export default App;
