/**
 * Singleton implementation for the Image Service
 * @param _options
 * @returns {ColorDistanceCielab}
 * @constructor
 */
const ColorDistanceCielab = function (_options) {
  'use strict'

  let _instance

  /**
   * Image Service
   * @class
   */
  class ColorDistance {
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

  return ColorDistance.getInstance()
}

export default ColorDistanceCielab
