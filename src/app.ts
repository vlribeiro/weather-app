import path from 'path'
import express from 'express'
import hbs from 'hbs'

import MapBox from './utils/mapbox'
import Darksky from './utils/darksky'

class App {
    public express: express.Application
    private _publicPath = path.join(__dirname, '..', 'public')
    private _viewsPath = path.join(__dirname, '..', 'templates', 'views')
    private _partialsPath = path.join(__dirname, '..', 'templates', 'partials')

    public constructor () {
      this.express = express()

      this.sets()
      this.middleware()
      this.routes()
    }

    private sets (): void {
      this.express.set('view engine', 'hbs')
      this.express.set('views', this._viewsPath)
      hbs.registerPartials(this._partialsPath)
    }

    private middleware (): void {
      this.express.use(express.static(this._publicPath))
    }

    private routes (): void {
      this.express.get('/', (req, res): void => {
        res.render('index', {
          title: 'Weather',
          name: 'Vini'
        })
      })

      this.express.get('/about', (req, res): void => {
        res.render('about', {
          title: 'About',
          name: 'Vini'
        })
      })

      this.express.get('/help', (req, res): void => {
        res.render('help', {
          title: 'Help',
          name: 'Vini'
        })
      })

      this.express.get('/weather', (req, res): void => {
        if (!req.query.address) {
          res.send({
            error: 'You must provide an address term'
          })
        } else {
          var mapbox = new MapBox(process.env.MAPBOX_KEY)

          mapbox.getData(req.query.address)
            .then((mbRes): void => {
              var darksky = new Darksky(process.env.DARKSKY_KEY)

              darksky.getData(mbRes.features[0].center)
                .then((forecast): void => {
                  res.send(forecast)
                })
            })
        }
      })

      this.express.get('/help/*', (req, res): void => {
        res.send('Help article not found')
      })

      this.express.get('*', (req, res): void => {
        res.render('404', {
          title: '404 error',
          name: 'Vini'
        })
      })
    }
}

export default new App().express
