import { Image } from '../image'
import { notFound } from '../../services/response'

const path = require('path')
const fs = require('fs')
const uploadPath = path.resolve(__dirname, './..', './..', './..', './uploads')

export const create = (req, res, next) => {
  const fileExtAvail = {
    png: 'png',
    jpeg: 'jpg'
  }
  const type = req.body.image.split(';')[0].split('/')[1]
  const data = { ext: fileExtAvail[type], ...req.body.data }

  Image.create(data)
    .then((image) => image.view(true))
    .then((document) => {
      const fileName = `${uploadPath}/${document.id}.${fileExtAvail[type]}`
      const filePath = path.resolve(uploadPath, fileName)
      const base64Data = req.body.image.replace(/^data:([A-Za-z-+/]+);base64,/, '')
      fs.writeFileSync(filePath, base64Data, { encoding: 'base64' })
      return res.status(201).json(document)
    })
    .catch(next)
}

export const show = ({ params }, res, next) => {
  Image.findById(params.id)
    .then(notFound(res))
    .then((image) => {
      if (!image) {
        return null
      }
      res.sendFile(path.resolve(uploadPath, `${params.id}.${image.ext}`))
    })
    .catch(next)
}
