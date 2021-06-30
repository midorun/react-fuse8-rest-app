import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import CourtService from '../../services/CourtService';
import CourtItem from '../CourtItem';
import { CourtItemType } from '../../types';

interface CourtListViewProps {
  courtItems: CourtItemType[]
}

const CourtList = () => {

  const courtService = new CourtService()

  const [courtItems, setCourtItems] = useState<CourtItemType[]>([])

  useEffect(() => {
    courtService.getCourtItems().then((courtItems) => setCourtItems(courtItems))

  })

  return (
    <Wrapper>
      <CourtListView courtItems={courtItems} />
    </Wrapper>
  )
}


const CourtListView: FC<CourtListViewProps> = ({ courtItems }) => {


  return (
    { courtItems }
  )
}

const Wrapper = styled.div`
  margin-top: 46px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 15px
`

const Button = styled.button`
  
`

export default CourtList
