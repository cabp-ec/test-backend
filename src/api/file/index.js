import { Router } from 'express'
import { create, show } from './controller'

const router = new Router()

/**
 * @api {post} /file Create file
 * @apiName CreateFile
 * @apiGroup File
 * @apiSuccess {Object} file File's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 File not found.
 */
router.post('/',
  create)

/**
 * @api {get} /file/:id Retrieve file
 * @apiName RetrieveFile
 * @apiGroup File
 * @apiSuccess {Object} file File's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 File not found.
 */
router.get('/:id',
  show)

export default router
