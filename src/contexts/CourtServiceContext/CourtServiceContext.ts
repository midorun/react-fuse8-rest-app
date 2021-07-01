import React from 'react'
import {CourtServiceType} from '../../types';

const CourtServiceContext = React.createContext<CourtServiceType | null>(null);
export default CourtServiceContext