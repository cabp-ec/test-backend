/**
 * Singleton implementation for the Image Service
 * @param _options
 * @returns {EarthMoversDistance}
 * @constructor
 */
const EarthMoversDistance = function (_options) {
  'use strict'

  let _instance

  /**
   * Image Service
   * @class
   */
  class EarthMoversDistance {
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

  return EarthMoversDistance.getInstance()
}

export default EarthMoversDistance
