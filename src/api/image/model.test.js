import { Image } from '.'

let image

beforeEach(async () => {
  image = await Image.create({ url: 'test', name: 'test', height: 'test', width: 'test', attributes: 'test', colors: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = image.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(image.id)
    expect(view.url).toBe(image.url)
    expect(view.name).toBe(image.name)
    expect(view.height).toBe(image.height)
    expect(view.width).toBe(image.width)
    expect(view.attributes).toBe(image.attributes)
    expect(view.colors).toBe(image.colors)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = image.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(image.id)
    expect(view.url).toBe(image.url)
    expect(view.name).toBe(image.name)
    expect(view.height).toBe(image.height)
    expect(view.width).toBe(image.width)
    expect(view.attributes).toBe(image.attributes)
    expect(view.colors).toBe(image.colors)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
