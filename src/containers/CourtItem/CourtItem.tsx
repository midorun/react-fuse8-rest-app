import { FC } from 'react'
import image from '../../assets/Image.jpg';
import { CourtItemType } from '../../types';
import * as ST from './styles'

interface CourtItemProps {
  courtItem: CourtItemType
  handleCourtItemClick: (id: number) => void
}

const CourtItem: FC<CourtItemProps> = ({ courtItem: { id, title, address, type, price }, handleCourtItemClick }) => {

  return (
    <ST.Wrapper onClick={() => handleCourtItemClick(id)}>
      <ST.ImageWrapper>
        <ST.Image src={image} />
        <ST.CourtType courtType={type}>{type}</ST.CourtType>
      </ST.ImageWrapper>
      <ST.Description>
        <ST.Title>{title}</ST.Title>
        <ST.Address>{address}</ST.Address>
        <ST.Price>New Properties for Sale from <b>£{price}</b></ST.Price>
        <ST.AdditionalInfo>Shared Ownership Available</ST.AdditionalInfo>
      </ST.Description>
    </ST.Wrapper >
  )
}

export default CourtItem
