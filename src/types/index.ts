import {CourtServiceType} from '../index'

export type CourtItemType = {
  id: number
  title: string
  address: string
  type: string
  price: number
}

export type {CourtServiceType}

export type CourtTypeProps = {
  courtType: string
}


