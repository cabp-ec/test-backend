import { success, notFound } from '../../services/response/'
import { Image } from '.'

const path = require('path')
const fs = require('fs')
const uploadPath = path.resolve(__dirname, './..', './..', './..', './uploads')

export const create = (req, res, next) => {
  const fileExtAvail = {
    png: 'png',
    jpeg: 'jpg'
  }

  const uploaded = Boolean(req.body.image.length)
  const type = uploaded ? req.body.image.split(';')[0].split('/')[1] : false
  const data = { ext: uploaded ? fileExtAvail[type] : '', ...req.body.data }

  Image.create(data)
    .then((image) => image.view(true))
    .then((document) => {
      if (uploaded) {
        const fileName = `${uploadPath}/${document.id}.${fileExtAvail[type]}`
        const filePath = path.resolve(uploadPath, fileName)
        const base64Data = req.body.image.replace(/^data:([A-Za-z-+/]+);base64,/, '')
        fs.writeFileSync(filePath, base64Data, { encoding: 'base64' })
      }
      return res.status(201).json(document)
    })
    .catch(next)
}

export const index = ({
  querymen: {
    query,
    select,
    cursor
  }
}, res, next) =>
  Image.find(query, select, cursor)
    .then((images) => images.map((image) => image.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Image.findById(params.id)
    .then(notFound(res))
    .then((image) => image ? image.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({
  bodymen: { body },
  params
}, res, next) =>
  Image.findById(params.id)
    .then(notFound(res))
    .then((image) => image ? Object.assign(image, body).save() : null)
    .then((image) => image ? image.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Image.findById(params.id)
    .then(notFound(res))
    .then((image) => image ? image.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const upload = (req, res, next) => {
}
