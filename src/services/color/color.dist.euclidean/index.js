/**
 * Singleton implementation for the Euclidean Distance
 * @param _options
 * @returns {ColorDistanceEuclidean}
 * @constructor
 */
const ColorDistanceEuclidean = function (_options) {
  'use strict'

  let _instance

  /**
   * Euclidean Distance
   * @class
   */
  class ColorDistance {
    /**
     * Constructor for the Euclidean Distance
     * @param options
     */
    constructor (options) {
      const _o = options

      // Bindings
    }

    inRange (colors, params) {
      const _r = parseInt(params.color.substr(1, 2), 16)
      const _g = parseInt(params.color.substr(3, 2), 16)
      const _b = parseInt(params.color.substr(5, 2), 16)
      const _distance = parseInt(params.distance)
      let inRange = false

      colors.every(color => {
        const r = parseInt(color.substr(1, 2), 16)
        const g = parseInt(color.substr(3, 2), 16)
        const b = parseInt(color.substr(5, 2), 16)
        const distance = Math.sqrt((r - _r) ** 2 + (g - _g) ** 2 + (b - _b) ** 2)
        // console.log(color, color.substr(1, 2))

        if (distance <= _distance) {
          inRange = true
          return false
        }

        return true
      })

      return inRange
    }

    /**
     * Get an instance of the Euclidean Distance
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

export default ColorDistanceEuclidean
