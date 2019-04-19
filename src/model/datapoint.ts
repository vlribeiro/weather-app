class DataPoint {
    public time: Date
    public summary: string
    public icon: string
    public temperature: number
    public apparentTemperature: number
    public windSpeed: number
    public windGust: number
    public windBearing: number
    public cloudCover: number
    public uvIndex: number
    public visibility: number
    public ozone: number
    public precipIntensity: number
    public precipProbability: number
    public precipType: string

    public constructor (obj:any) {
      this.time = new Date(obj.time * 1000) || null
      this.summary = obj.summary || ''
      this.icon = obj.icon || ''
      this.temperature = obj.temperature || 0
      this.apparentTemperature = obj.apparentTemperature || 0
      this.windSpeed = obj.windSpeed || 0
      this.windGust = obj.windGust || 0
      this.windBearing = obj.windBearing || 0
      this.cloudCover = obj.cloudCover || 0
      this.uvIndex = obj.uvIndex || 0
      this.visibility = obj.visibility || 0
      this.ozone = obj.ozone || 0
      this.precipIntensity = obj.precipIntensity || 0
      this.precipProbability = obj.precipProbability || 0
      this.precipType = obj.precipType || ''
    }
}

export default DataPoint
