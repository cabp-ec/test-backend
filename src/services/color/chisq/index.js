/**
 * Singleton implementation for the Image Service
 * @param _options
 * @returns {ChisqDistance}
 * @constructor
 */
const ChisqDistance = function (_options) {
  'use strict'

  let _instance

  /**
   * Image Service
   * @class
   */
  class ChisqDistance {
    /**
     * Constructor for the Image Service
     * @param options
     */
    constructor (options) {
      const _o = options

      // Bindings
    }

    get (document, params = {}) {
      // TODO: implement
      return false
    }

    /**
     * Get an instance of the Image Service
     * @returns {*}
     */
    static getInstance () {
      if (!_instance) {
        _instance = new this(_options)
      }

      return _instance
    }
  }

  return ChisqDistance.getInstance()
}

export default ChisqDistance
