import React from 'react';

import { IData } from '../../../../hooks/useFetchData';

import './CourseCard.scss';

interface ICourseCard {
  className?: string;
  course: IData;
  onClick?: () => void;
}

const CourseCard: React.FC<ICourseCard> = ({className, course, onClick}) => {
  return (
    <a
      href='#'
      onClick={onClick}      // TODO - заглушка
      className={`link ${className}`}
    >
      <h3 className='link__title'>
        {course.name}
      </h3>

      <p
        className='link__image'
        style={{background: course.bgColor}}
      >
        <img
          className='link__img'
          width='144px'
          height='144px'
          src={course.image}
          alt={course.name}
        />
      </p>
    </a>
  );
};

export default CourseCard;
