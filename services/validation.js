function exists (value) {
  if (!value) return false
  if (Array.isArray(value) && value.length === 0) return false
  if (typeof value === 'string' && !value.trim()) return false
  return true
}

function notExists (value) {
  if (exists(value)) return false
  return true
}

function equals (valueA, valueB) {
  if (valueA !== valueB) return false
  return true
}

function validFirstName (name) {
  name = name.trim()
  if (name.split(' ').length > 2) {
    return false
  }
  return true
}

function validEmail (email) {
  const user = email.substring(0, email.indexOf('@'))
  const domain = email.substring(email.indexOf('@') + 1, email.length)

  if (
    (user.length >= 1) &&
    (domain.length >= 3) &&
    (user.search('@') === -1) &&
    (domain.search('@') === -1) &&
    (user.search(' ') === -1) &&
    (domain.search(' ') === -1) &&
    (domain.search('.') !== -1) &&
    (domain.indexOf('.') >= 1) &&
    (domain.lastIndexOf('.') < domain.length - 1)
  ) {
    return true
  } else {
    return false
  }
}

function validDate (date, birthday = false) {
  const ExpReg = new RegExp('(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}')
  const splitedDate = date.split('/')
  var error = false

  if (date.search(ExpReg) === -1) {
    error = true
  } else if (
    (
      (splitedDate[1] === 4) ||
      (splitedDate[1] === 6) ||
      (splitedDate[1] === 9) ||
      (splitedDate[1] === 11)
    ) &&
    (splitedDate[0] > 30)
  ) {
    error = true
  } else if (splitedDate[1] === 2) {
    if ((splitedDate[0] > 28) && ((splitedDate[2] % 4) !== 0)) {
      error = true
    }
    if ((splitedDate[0] > 29) && ((splitedDate[2] % 4) === 0)) {
      error = true
    }
  }

  if (!error && birthday) {
    const typedDate = new Date(date.split('/').reverse())
    const currentDate = new Date()
    // console.log(typedDate, currentDate)

    if (typedDate > currentDate) {
      error = true
    }
  }

  if (error) {
    return false
  }

  return true
}

function validPassword (password) {
  if (password.length < 6) {
    return false
  }

  return true
}

export {
  exists,
  notExists,
  equals,
  validEmail,
  validFirstName,
  validDate,
  validPassword
}
