export async function getProductByNameUrl (nameUrl) {
  const data = {}

  if (nameUrl === 'alicate-de-corte-espicula') {
    data.name = 'ALICATE DE CORTE ESPICULA'
    data.photos = [
      {
        index: 0,
        src: 'alicate.svg',
        title: 'Imagem 3x4'
      },
      {
        index: 1,
        src: 'alicate.svg',
        title: 'Imagem 6x8'
      },
      {
        index: 2,
        src: 'alicate.svg',
        title: 'Imagem 9x12'
      }
    ]
    data.categories = [
      {
        name: 'Podologia',
        href: '/categoria/podologia'
      },
      {
        name: 'Alicates e Pinças',
        href: '/categoria/podologia/alicates-e-pincas/'
      }
      // {
      //   name: 'Alicates de Corte Espicula',
      //   href: '/categoria/podologia/alicates-e-pincas/alicates-de-corte-espicula'
      // }
    ]
  }

  return {
    nameUrl,
    data
  }
}
