import ChisqDistance from './chisq'
import ColorDistanceCielab from './color.dist.cielab'
import ColorDistanceEuclidean from './color.dist.euclidean'
import EarthMoversDistance from './emd'
import WeightedPairsDistance from './weighted.pairs'

/**
 * Singleton implementation for the Image Service
 * @param _options
 * @returns {Color}
 * @constructor
 */
const Color = function (_options) {
  'use strict'

  let _instance

  /**
   * Image Service
   * @class
   */
  class Color {
    /**
     * Constructor for the Image Service
     */
    constructor () {
      this._methodsAvail = [
        'chisq',
        'color.dist.cielab',
        'color.dist.euclidean',
        'emd',
        'weighted.pairs'
      ]
      this._methods = {}

      this._methods.chisq = ChisqDistance({})
      this._methods['color.dist.cielab'] = ColorDistanceCielab({})
      this._methods['color.dist.euclidean'] = ColorDistanceEuclidean({})
      this._methods.emd = EarthMoversDistance({})
      this._methods['weighted.pairs'] = WeightedPairsDistance({})

      // Bindings
    }

    distanceInRange (method, document, params) {
      if (this._methodsAvail.includes(method)) {
        const inRange = this._methods[method].inRange(document.colors, params)
        console.log('inRange', inRange)
        return inRange
      }

      return false
    }

    implemented (method) {
      return this._methodsAvail.includes(method)
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

  return Color.getInstance()
}

export default Color
