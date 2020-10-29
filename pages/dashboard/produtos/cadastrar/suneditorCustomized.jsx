/* eslint-disable no-undef */
import React, { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import AsideBar from '../../../../components/AsideBar'
import Header from '../../../../components/Header'
import Button from '../../../../components/Button'

import 'suneditor/dist/css/suneditor.min.css'

import grid from '../../../../styles/grid/dashboard.module.css'
import mainStyles from '../../../../styles/main.module.css'
import dashboardStyles from '../../../../styles/Dashboard.module.css'

const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false })

const paths = [
  {
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    name: 'Produtos',
    href: '/dashboard/produtos'
  },
  {
    name: 'Cadastrar',
    href: '/dashboard/produtos/cadastrar'
  },
  {
    name: 'Novo',
    href: '/dashboard/produtos/cadastrar/novo'
  }
]

function NewProductRegister () {
  const [minimizedMenu, setMinimizedMenu] = useState(false)

  return (
    <div className={`${grid.wrapper} ${minimizedMenu && grid.hideMenu}`}>
      <Head>
        <title>Cadastrar - Produtos - Ecovitas Marketplace</title>
      </Head>

      <aside className={grid.aside}>
        <AsideBar activeLink="product-register" minimizedMenu={minimizedMenu} />
      </aside>

      <header className={grid.header}>
        <Header
          minimizedMenu={minimizedMenu}
          setMinimizedMenu={setMinimizedMenu}
          paths={paths}
        />
      </header>

      <main className={grid.main}>
        <section className={mainStyles.section}>
          <div className={`${dashboardStyles.row} ${dashboardStyles.start}`}>
            <Button
              icon="box"
              text="Painel de produtos"
              link="/dashboard/produtos"
            />

            <Button
              icon="th-list"
              text="Lista dos produtos"
              link="/dashboard/produtos/lista"
            />
          </div>
        </section>

        <section className={mainStyles.section}>
          <div className={dashboardStyles.row}>
            <div className={`${dashboardStyles.flexColumn} ${dashboardStyles.wideColumn}`}>
              <h3 className={mainStyles.sectionTitle}>Cadastrar o novo produto</h3>
            </div>
          </div>

          <div className={dashboardStyles.row}>
            <SunEditor
              lang="pt_br"
              placeholder="Por favor, digite aqui..."
              setDefaultStyle="font-family: Overpass-Regular; font-size: 14px; background-color: #161A1D; color: #FFF; border-radius: 2px;"
              //
              setOptions={{
                height: 300,
                paragraphStyles: [
                  'spaced',
                  'bordered',
                  {
                    name: 'Padrão',
                    class: '__se__customClass'
                  }
                ],
                buttonList: [
                  ['undo', 'redo'],
                  [':p-Mais Parágrafos-default.more_paragraph', 'paragraphStyle', 'blockquote'],
                  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                  ['removeFormat'],
                  ['outdent', 'indent'],
                  ['list', 'lineHeight'],
                  ['template'],
                  ['-right', ':i-Mais Configurações-default.more_vertical', 'showBlocks', 'codeView', 'preview', 'print'],
                  ['-right', 'fullScreen']
                ],
                templates: [
                  {
                    name: 'Template Básico',
                    html: `
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                      <p><br></p>

                      <p><strong>Placeholder text commonly used:</strong></p>

                      <ul>
                        <li>Linha 1</li>
                        <li>Linha 2</li>
                        <li>Linha 3</li>
                      </ul>
                    `
                  }
                ]
              }}
              // value={body}
              // onChange={e => setBody(e.target.value)}
            />
          </div>
        </section>
      </main>

      <style jsx global>{`
        .grecaptcha-badge {
          z-index: 2000;
        }

        .sun-editor {
          background-color: #383B3E;
          border-color: #383B3E;
          border-width: 5px;
          border-radius: 2px;
        }

        .sun-editor .se-wrapper,
        .sun-editor .se-wrapper-inner.se-wrapper-wysiwyg.sun-editor-editable {
          border-radius: 2px 2px 0 0;
          background-color: #161A1D;
          color: #FFF;
        }

        .se-toolbar.sun-editor-common {
          border-radius: 2px 2px 0 0;
          background-color: #383B3E;
          outline-color: #383B3E;
        }

        .sun-editor .se-tooltip .se-tooltip-inner .se-tooltip-text {
          background-color: #FFF;
          color: #383B3E;
          z-index: 50;
        }
        .sun-editor .se-tooltip .se-tooltip-inner .se-tooltip-text:after {
          border-bottom-color: #FFF;
        }

        .se-btn-module.se-btn-module-border {
          border-color: #FFF7;
        }

        .sun-editor button {
          color: #FFF;
        }

        .sun-editor .se-btn-list:disabled,
        .sun-editor .se-btn:disabled,
        .sun-editor button:disabled {
          color: #FFF3;
        }

        .sun-editor .se-btn-module .se-btn:not(:disabled):hover,
        .sun-editor .se-btn:not(:disabled):hover,
        .sun-editor .se-btn-module .se-btn.on,
        .sun-editor .se-tooltip.se-btn.on {
          background-color: #22FF7A;
          color: #161A1D;
        }

        .sun-editor .se-btn-module .se-btn.active,
        .sun-editor .se-tooltip.se-btn.active {
          color: #22FF7A;
        }

        .sun-editor .se-btn-module .se-btn-more.on {
          background-color: #22FF7A;
          color: #161A1D;
        }
        .sun-editor .se-btn-module .se-btn-more.on:hover,
        .sun-editor .se-tooltip.se-btn.on:hover,
        .sun-editor .se-tooltip.se-btn.active:hover {
          background-color: #22FF7Add;
          color: #161A1D;
        }

        .se-resizing-bar.sun-editor-common {
          border-radius: 0 0 2px 2px;
          background-color: #22FF7A;
          border-color: #22FF7A;
          min-height: 20px;
        }
        .sun-editor .se-navigation.sun-editor-common {
          color: #161A1D;
          line-height: 2;
        }

        .sun-editor .se-list-layer {
          border-color: #FFF;
          border-radius: 2px;
        }
        .sun-editor .se-list-inner .se-list-basic button {
          color: #161A1D;
        }

        .sun-editor .se-toolbar-more-layer {
          border-radius: 2px 2px 0 0;
          background-color: #FFF3;
        }

        .sun-editor .se-toolbar-more-layer .se-more-layer {
          border-color: transparent;
          border-radius: 2px 2px 0 0;
        }
      `}</style>
    </div>
  )
}

export default NewProductRegister
