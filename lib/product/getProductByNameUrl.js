export async function getProductByNameUrl (nameUrl) {
  const data = {}

  if (nameUrl === 'alicate-de-corte-espicula') {
    data.name = 'Alicate de Corte Espícula'
    data.description = '- Alicate em aço inox cirurgico'

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
    data.principalFeatures = [
      {
        title: 'Marca',
        description: 'Mocar'
      },
      {
        title: 'Quantidade',
        description: '1 Unidade'
      },
      {
        title: 'Material',
        description: 'Aço Inox cirúrgico'
      },
      {
        title: 'Comprimento',
        description: '110mm'
      }
    ]
    data.replies = [
      {
        index: '1',
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
        reply: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        by: 'Felipe pego de CS'
      },
      {
        index: '2',
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
        reply: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        by: 'Felipe pego de CS'
      }
    ]
  }

  return {
    nameUrl,
    data
  }
}
