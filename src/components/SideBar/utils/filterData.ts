import {IData} from '../../../hooks/useFetchData';

const filterData = (tag: string, data: IData[]) => {
  if (tag === 'Все темы') {
    return data;
  }

  return data.filter(course => course.tags.some(t => t === tag));
}

export default filterData;
