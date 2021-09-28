import { Router } from 'express'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /search Retrieve searches
 * @apiName RetrieveSearches
 * @apiGroup Search
 * @apiUse listParams
 * @apiSuccess {Object[]} searches List of searches.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.post('/',
  index)

export default router
