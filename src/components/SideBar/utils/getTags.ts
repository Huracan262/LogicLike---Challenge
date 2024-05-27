import {IData} from '../../../hooks/useFetchData';

const getTags = (courses: IData[]): string[] => {
  const tagsSet: Set<string> = new Set()

  tagsSet.add('Все темы');

  courses.forEach(course => {
    course.tags.forEach((tag: string): void => {
      tagsSet.add(tag);
    });
  });

  return Array.from(tagsSet);
}

export default getTags;
