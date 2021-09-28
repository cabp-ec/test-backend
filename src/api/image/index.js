import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'

export Image, { schema } from './model'

const router = new Router()
const {
  url,
  name,
  height,
  width,
  attributes,
  colors
} = schema.tree

/**
 * @api {post} /images Create image
 * @apiName CreateImage
 * @apiGroup Image
 * @apiParam url Image's url.
 * @apiParam name Image's name.
 * @apiParam height Image's height.
 * @apiParam width Image's width.
 * @apiParam attributes Image's attributes.
 * @apiParam colors Image's colors.
 * @apiSuccess {Object} image Image's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Image not found.
 */
router.post('/',
  create)

/**
 * @api {get} /images Retrieve images
 * @apiName RetrieveImages
 * @apiGroup Image
 * @apiUse listParams
 * @apiSuccess {Object[]} images List of images.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /images/:id Retrieve image
 * @apiName RetrieveImage
 * @apiGroup Image
 * @apiSuccess {Object} image Image's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Image not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /images/:id Update image
 * @apiName UpdateImage
 * @apiGroup Image
 * @apiParam url Image's url.
 * @apiParam name Image's name.
 * @apiParam height Image's height.
 * @apiParam width Image's width.
 * @apiParam attributes Image's attributes.
 * @apiParam colors Image's colors.
 * @apiSuccess {Object} image Image's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Image not found.
 */
router.put('/:id',
  body({
    url,
    name,
    height,
    width,
    attributes,
    colors
  }),
  update)

/**
 * @api {delete} /images/:id Delete image
 * @apiName DeleteImage
 * @apiGroup Image
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Image not found.
 */
router.delete('/:id',
  destroy)

export default router
