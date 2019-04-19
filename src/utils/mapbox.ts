import * as rp from 'request-promise-native'

import MapboxResponse from '../model/mapboxresponse'

class Mapbox {
  private url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
  private apiKey: string

  public constructor (apiKey: string) {
    this.apiKey = apiKey
  }

  public async getData (address: string): Promise<MapboxResponse> {
    return rp.get({
      url: `${this.url}${encodeURIComponent(address)}.json/?access_token=${this.apiKey}`,
      json: true
    }).then((result): MapboxResponse => { return new MapboxResponse(result) })
  }
}

export default Mapbox
