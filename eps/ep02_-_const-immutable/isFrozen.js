module.exports = (obj) => {
  if(Objct.isFrozen(obj)) return obj 
  return Obejct.freeze(obj)
}