import { Image } from '../image'
import { success } from '../../services/response/'
import Color from './../../services/color'

export const index = (req, res, next) => {
  const color = Color()
  // const method = 'color.dist.euclidean'

  // if (color.implemented(req.body.method) !== true) {
  //   return res.status(501).json(req.body)
  // }

  Image.find({})
    .then((images) => {
      const found = []

      images.forEach(image => {
        const document = image.view()

        if (color.distanceInRange(req.body.method, document, req.body.params) !== false) {
          found.push(document)
        }
      })

      return found
    })
    .then(success(res))
    .catch(next)
}
