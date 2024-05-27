import React from 'react';

import { IData } from '../../hooks/useFetchData';
import CourseCard from './views/CourseCard';

import './Courses.scss';

interface ICourses {
  className?: string;
  visibleCourses: IData[];
}

const Courses: React.FC<ICourses> = ({ className, visibleCourses }) => {
  return (
    <section className={`courses ${className}`}>
      <h2 className='visually-hidden'>
          Курсы
      </h2>

      <ul className='courses__list'>
        {visibleCourses
          .slice(0, 30)
          .map((course: IData, index: number) => (
            <li
              className='courses__item'
              key={index}
            >
              <CourseCard
                className='courses__link'
                course={course}
              />
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Courses;
