module.exports = (obj) => {
  if(Object.isFrozen(obj)) return obj 
  return Object.freeze(obj)
}