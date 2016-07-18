

const _is = {}
_is.odd = (val) => (val%2)
_is.even = (val) => !(val%2)

const is = Object.freeze(_is)
// const is = _is

is.odd = 'oi'
