import * as rp from 'request-promise-native'

import Forecast from '../model/forecast'
import Point from '../model/point'

class Darksky {
  private url = 'https://api.darksky.net/forecast/'
  private lang = 'pt'
  private units = 'si'
  private apiKey: string

  public constructor (apiKey: string, lang?: string, units?: string) {
    this.apiKey = apiKey
    this.lang = lang || this.lang
    this.units = units || this.units
  }

  public async getData (point: Point): Promise<Forecast> {
    return rp.get({
      url: `${this.url}${this.apiKey}/${point.latitude},${point.longitude}?lang=${this.lang}&units=${this.units}`,
      json: true
    }).then((result): Forecast => { return new Forecast(result) })
  }
}

export default Darksky
