import mongoose, { Schema } from 'mongoose'

const imageSchema = new Schema({
  url: {
    type: String
  },
  name: {
    type: String
  },
  ext: {
    type: String
  },
  height: {
    type: Number
  },
  width: {
    type: Number
  },
  attributes: [{
    key: String,
    value: String
  }],
  colors: [{
    type: String
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: false,
    transform: (obj, ret) => {
      delete ret._id
    }
  }
})

imageSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      url: this.url,
      name: this.name,
      height: this.height,
      width: this.width,
      attributes: this.attributes,
      colors: this.colors,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Image', imageSchema)

export const schema = model.schema
export default model
