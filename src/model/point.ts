class Point {
    public latitude: number
    public longitude: number

    public constructor (arr:any[]) {
      this.latitude = arr[0] || 0
      this.longitude = arr[1] || 0
    }

    public toString = () : string => {
      return `This is a geolocation point at [${this.latitude},${this.longitude}]`
    }
}

export default Point
