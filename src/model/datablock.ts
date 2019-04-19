import DataPoint from './datapoint'

class DataBlock {
    public data: [DataPoint]
    public summary: string
    public icon: string

    public constructor (obj:any) {
      if (obj) {
        this.data = ((obj.data && obj.data.map) ? obj.data.map((d): DataPoint => new DataPoint(d)) : [])
        this.summary = obj.summary || ''
        this.icon = obj.icon || ''
      }
    }
}

export default DataBlock
