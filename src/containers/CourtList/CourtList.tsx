import { FC } from 'react';
import CourtItem from '../CourtItem';
import { CourtItemType } from '../../types';
import { ReactComponent as ChevronIcon } from '../../assets/Chevron.svg'
import * as ST from './styles'
import { useHistory } from 'react-router-dom';

interface CourtListProps {
  courtItems: CourtItemType[]
}

const CourtList: FC<CourtListProps> = ({ courtItems }) => {
  const history = useHistory()

  const handleCourtItemClick = (id: number) => {
    history.push('/details/' + id)
  }

  return (
    <ST.Wrapper>
      <CourtListView courtItems={courtItems} handleCourtItemClick={handleCourtItemClick} />
      <ST.Button>
        See more
        <ChevronIcon className="icon" />
      </ST.Button>
    </ST.Wrapper>
  )
}

interface CourtListViewProps extends CourtListProps {
  handleCourtItemClick: (id: number) => void;
}

const CourtListView: FC<CourtListViewProps> = ({ courtItems, handleCourtItemClick }) => {

  return (
    <ST.CourtListWrapper>
      {courtItems.map((courtItem) => (
        <CourtItem
          key={courtItem.id}
          courtItem={courtItem}
          handleCourtItemClick={handleCourtItemClick}
        />
      ))}
    </ST.CourtListWrapper>
  )
}

export default CourtList
