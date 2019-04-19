import dotenv from 'dotenv'

import app from './app'

dotenv.config()

app.listen(3000, (): void => console.log('Listening on port 3000'))
