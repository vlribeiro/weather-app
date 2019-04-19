import DataBlock from './datablock'
import DataPoint from './datapoint'

class Forecast {
    public latitude: string
    public longitude: string
    public timezone: string
    public currently: DataPoint
    public minutely: DataBlock
    public hourly: DataBlock
    public daily: DataBlock

    public constructor (obj:any) {
      this.latitude = obj.latitude || 0
      this.longitude = obj.longitude || 0
      this.timezone = obj.timezone || ''
      this.currently = new DataPoint(obj.currently)
      this.minutely = new DataBlock(obj.minutely)
      this.hourly = new DataBlock(obj.hourly)
      this.daily = new DataBlock(obj.daily)
    }

    public weatherNow (): string {
      return `It is ${this.currently.temperature}° Celsius, with a ${this.currently.precipProbability}% chance of rain.`
    }
}

export default Forecast
