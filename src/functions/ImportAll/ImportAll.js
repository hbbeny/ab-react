const importAll = r => {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item)
    return null
  })
  return images
}

export default importAll
