export const withoutNumber = value => {
  return value
    .replace(/\d/g, '')
}

export const justNumbersMask = value => {
  return value
    .replace(/\D/g, '')
}

export const cvvMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})\d+?$/, '$1')
}

export const monthMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})\d+?$/, '$1')
}

export const yearMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})\d+?$/, '$1')
}

export const cpfMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const dateMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1')
}

export const phoneMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
}

export const cepMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

export const cnpjMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const eanMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{13})\d+?$/, '$1')
}

export const measureMask = value => {
  value = value.replace(/\D/g, '')
  // console.log(value)

  value = Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return value
}
