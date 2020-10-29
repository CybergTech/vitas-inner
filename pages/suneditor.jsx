import React from 'react'
import dynamic from 'next/dynamic'

import { buttonList } from 'suneditor-react'

// import SunEditor from 'suneditor-react'

import 'suneditor/dist/css/suneditor.min.css'

const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false })

function SunEditorDynamic () {
  // const [body, setBody] = useState('body')

  return (
    <div style={{ width: '90%', margin: '1rem auto' }}>
      <SunEditor
        lang="pt_br"
        placeholder="Por favor, digite aqui..."
        setDefaultStyle="font-family: Overpass-Regular; font-size: 14px;"
        setOptions={{
          height: 300,
          buttonList: buttonList.complex,
          templates: [
            {
              name: 'Template-1',
              html: '<p></p>'
            }
          ]
        }}
        // value={body}
        // onChange={e => setBody(e.target.value)}
      />
    </div>
  )
}

export default SunEditorDynamic
