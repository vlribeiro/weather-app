import Feature from './feature'

class MapboxResponse {
    public type: string
    public features: [Feature]

    public constructor (obj:any) {
      this.type = obj.id || null
      this.features = ((obj.features && obj.features.map) ? obj.features.map((f): Feature => new Feature(f)) : [])
    }
}

export default MapboxResponse
