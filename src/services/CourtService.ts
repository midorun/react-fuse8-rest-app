export default class CourtService {
  private _rootUrl: string;

  constructor(){
    this._rootUrl = 'https://603e38c548171b0017b2ecf7.mockapi.io'
  }

  getData = async (url: string) => {
    const response = await fetch(this._rootUrl + url)

    if(response.ok){
      return await response.json()
    }

    throw new Error('Error with data fetching')
  }

  getCourtItems = async () => {
    return await this.getData('/homes')
  }
}