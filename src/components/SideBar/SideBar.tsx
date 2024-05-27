import React, { useCallback, useEffect, useState } from 'react';

import getTags from './utils/getTags';
import filterData from './utils/filterData';
import Button from '../../UI/Button';
import { IData } from '../../hooks/useFetchData';

import './SideBar.scss';

interface ISideBar {
  className?: string;
  data: IData[];
  setVisibleCourses: (visibleCourses: IData[]) => void;
}

const SideBar: React.FC<ISideBar> = ({ className, setVisibleCourses, data }) => {
  const [currentTag, setCurrentTag] = useState<string>('Все темы');
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setTags(getTags(data));
  }, [data]);

  const changeCurrentTag = useCallback((tag: string) => {
    const filteredData: IData[] = filterData(tag, data);
    setVisibleCourses(filteredData);
    setCurrentTag(tag);
  }, [setVisibleCourses, data]);

  useEffect(() => {
    changeCurrentTag('Все темы');
  }, [changeCurrentTag]);

  return (
    <aside className={`side-bar ${className}`}>
      <h2 className='visually-hidden'>
        Темы курсов
      </h2>

      <nav className='side-bar__nav-menu'>
        <ul className='side-bar__list'>
          {tags
            .slice(0, 20)
            .map((tag: string, index: number) => (
              <li
                className='side-bar__item'
                key={index}
              >
                <Button
                  className={`side-bar__button ${tag === currentTag ? 'side-bar__button--current' : ''}`}
                  onClick={() => changeCurrentTag(tag)}
                >
                  {tag}
                </Button>
              </li>
            ))
          }
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
