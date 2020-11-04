/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { exists } from '../../services/validation'

import Button from '../Button'
import Input from '../Input'

import styles from './styles.module.css'

function UploadModal ({ show, setShow, photos, setPhotos, currentPhoto }) {
  const [urlUploading, setUrlUploading] = useState(false)
  const [typedUrl, setTypedUrl] = useState('')

  const [files, setFiles] = useState('')
  const [uploadedFile, setUploadedFile] = useState('')
  const [imgSrc, setImgSrc] = useState('')
  const [status, setStatus] = useState(0)

  useEffect(() => {
    const drop_ = document.querySelector(`.${styles.upload} #upload-file`)

    if (drop_) {
      drop_.addEventListener('dragenter', function () {
        document.querySelector(`.${styles.upload}`).classList.add(`${styles.highlight}`)
      })
      drop_.addEventListener('dragleave', function () {
        document.querySelector(`.${styles.upload}`).classList.remove(`${styles.highlight}`)
      })
      drop_.addEventListener('drop', function () {
        document.querySelector(`.${styles.upload}`).classList.remove(`${styles.highlight}`)
      })
    }
  }, [urlUploading])

  useEffect(() => {
    const inputUpload = document.querySelector('#upload-file')

    if (inputUpload) {
      inputUpload.addEventListener('change', function () {
        setUploadedFile('')
        setImgSrc('')
        setStatus(0)

        var files = this.files
        setFiles(files)
        for (var i = 0; i < files.length; i++) {
          var info = validarArquivo(files[i])

          if (info.error === undefined) {
            var reader = new FileReader()
            reader.onload = function (e) {
              setImgSrc(e.target.result)
            }
            reader.readAsDataURL(this.files[0])

            setStatus(1)

            setUploadedFile(
              <p className={styles.success}>
                <FontAwesomeIcon icon="check-circle" className={styles.icon} />
                {info.success}
              </p>
            )
          } else {
            setUploadedFile(
              <p className={styles.error}>
                <FontAwesomeIcon icon="exclamation-triangle" className={styles.icon} />
                {info.error}
              </p>
            )
          }
        }
      })
    }
  }, [urlUploading])

  function validarArquivo (file) {
    var mime_types = ['image/jpeg', 'image/png', 'image/webp']

    if (mime_types.indexOf(file.type) === -1) {
      return { error: `A extensão do arquivo ${file.name} não é permitida` }
    }

    if (file.size > (2 * 1024 * 1024)) {
      return { error: `${file.name} ultrapassou limite de 2MB` }
    }

    return { success: `Enviando: ${file.name}` }
  }

  function handleCheckClick (e) {
    if (e.target.classList.contains(styles.container)) {
      closeUploadModal()
    }
  }

  function closeUploadModal () {
    setShow(false)

    changeUrlUploading(false)
    setTypedUrl('')

    setFiles('')
    setUploadedFile('')
    setImgSrc('')

    setStatus(0)
  }

  function sendPhoto () {
    closeUploadModal()

    const updatedPhotos = photos.map((photo, index) => {
      if (index === currentPhoto) {
        if (files !== '') {
          return {
            ...files,
            src: imgSrc
          }
        } else {
          return {
            0: {
              name: imgSrc
            },
            fetchUrl: true,
            src: imgSrc
          }
        }
      }

      return photo
    })

    setPhotos(updatedPhotos)
    setFiles('')
  }

  function changeUrlUploading (to) {
    setUrlUploading(to)

    setTypedUrl('')

    setFiles('')
    setUploadedFile('')
    setImgSrc('')

    setStatus(0)
  }

  function fetchUrl () {
    setStatus(0)
    setUploadedFile(
      <p><FontAwesomeIcon icon="spinner" pulse /></p>
    )
    setImgSrc('')

    const image = new Image()
    image.src = typedUrl

    image.addEventListener('load', () => {
      setStatus(1)
      setImgSrc(typedUrl)
      console.log(image)

      setUploadedFile(
        <p className={styles.success}>
          <FontAwesomeIcon icon="check-circle" className={styles.icon} />
          Enviando: {typedUrl.length > 30 ? `${typedUrl.substr(0, 30)}...` : typedUrl}
        </p>
      )
    })
    image.addEventListener('error', () => {
      setUploadedFile(
        <p className={styles.error}>
          <FontAwesomeIcon icon="exclamation-triangle" className={styles.icon} />
          Não foi possível buscar uma imagem através deste link. Por favor, tente novamente
        </p>
      )
    })
  }

  return (
    <div
      className={`${styles.container} ${show ? styles.show : styles.hide}`}
      onClick={e => handleCheckClick(e)}
    >
      <div className={styles.content}>
        <span
          className={styles.close}
          onClick={() => closeUploadModal()}
        >
          <FontAwesomeIcon icon="times" />
        </span>

        <div className={styles.title}>
          Carregamento da foto do produto
        </div>

        <main className={`${styles.main} ${urlUploading === true && styles.urlUploading}`}>
          {urlUploading === true
            ? <>
              <div className={styles.row}>
                <div className={styles.bigColumn}>
                  <Input
                    name="typed_url"
                    icon="link"
                    placeholder="URL aqui..."
                    value={typedUrl}
                    onChange={e => setTypedUrl(e.target.value)}
                  />
                </div>

                <div className={styles.normalColumn}>
                  <Button
                    icon="long-arrow-alt-right"
                    text="Buscar arquivo"
                    reverse
                    borderedButton
                    submitButton
                    disabled={typedUrl.length === 0}
                    onClick={() => fetchUrl()}
                  />
                </div>
              </div>

              <span
                className={styles.goBack}
                onClick={() => changeUrlUploading(false)}
              >
                <img
                  src="/images/icons/back.svg"
                  alt="Go-back"
                />
                <span>Voltar à arrastar ou buscar arquivo do seu computador</span>
              </span>
            </>
            : <>
              <div className={styles.upload}>
                <label htmlFor="upload-file">
                  <FontAwesomeIcon icon="cloud-upload-alt" className={styles.icon} />
                  <p>Arraste o arquivo ou clique aqui para buscar em seu computador</p>
                </label>

                <input
                  type="file"
                  accept="image/jpg,image/jpeg,image/png,image/webp"
                  id="upload-file"
                />
              </div>

              <Button
                icon="link"
                text="Desejo digitar a URL"
                borderedButton
                style={{ marginTop: '1rem', animation: 'fadeIn 200ms' }}
                onClick={() => changeUrlUploading(true)}
              />
            </>
          }
        </main>
      </div>

      {exists(uploadedFile) || exists(imgSrc)
        ? <div className={styles.uploaded}>
          <Button
            icon="long-arrow-alt-right"
            text="Enviar este arquivo"
            style={{ width: '100%' }}
            reverse
            submitButton
            borderedButton
            disabled={status === 0}
            onClick={() => sendPhoto()}
          />
          {uploadedFile}
          {imgSrc !== '' &&
            <img src={imgSrc} className={styles.photoPreview} alt="Photo-Preview" />
          }
        </div>
        : ''
      }
    </div>
  )
}

export default UploadModal
