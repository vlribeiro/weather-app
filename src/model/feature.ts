import Point from './point'

class Feature {
    public id: string
    public type: string
    public text: string
    public placeName: string
    public center: Point

    public constructor (obj:any) {
      this.id = obj.id || null
      this.type = obj.type || ''
      this.text = obj.text || ''
      this.placeName = obj.placeName || ''
      this.center = new Point(obj.center)
    }
}

export default Feature
