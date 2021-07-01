
import { FC, useEffect, useState } from 'react';
import withCourtService from '../../hoc/withCourtService';
import { CourtItemType, CourtServiceType } from '../../types';
import CourtList from "../CourtList";
import Filter from '../Filter';
import * as ST from './styles'

interface AppProps {
  CourtService: CourtServiceType
}

const App: FC<AppProps> = ({ CourtService }) => {

  const [courtItems, setCourtItems] = useState<CourtItemType[]>([])
  const [filterValue, setFilterValue] = useState<string>('')

  useEffect(() => {
    CourtService.getCourtItems().then((courtItems) => setCourtItems(courtItems))
    console.log('render');

  }, [CourtService])

  const changeFilterValue = (value: string) => {
    setFilterValue(value)
  }

  const filterCourtItems = (filterValue: string) => {
    if (filterValue.length >= 3) {
      return courtItems.filter(courtItem => courtItem.title.toLowerCase().indexOf(filterValue) > -1)
    }
    return courtItems
  }

  return (
    <ST.Wrapper>
      <ST.Container>
        <ST.Header>Our Latest Developments</ST.Header>
        <Filter value={filterValue} changeFilterValue={changeFilterValue} />
        <CourtList courtItems={filterCourtItems(filterValue.toLowerCase())} />
      </ST.Container>
    </ST.Wrapper>
  );
}



export default withCourtService()(App);
