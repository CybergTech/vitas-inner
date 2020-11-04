/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { exists } from '../../services/validation'

import Button from '../Button'

import styles from './styles.module.css'

function UploadModal ({ show, setShow, photos, setPhotos, currentPhoto }) {
  const [files, setFiles] = useState('')
  const [uploadedFile, setUploadedFile] = useState('')
  const [imgSrc, setImgSrc] = useState('')
  const [status, setStatus] = useState(0)

  useEffect(() => {
    const drop_ = document.querySelector(`.${styles.upload} #upload-file`)

    drop_.addEventListener('dragenter', function () {
      document.querySelector(`.${styles.upload}`).classList.add(`${styles.highlight}`)
    })
    drop_.addEventListener('dragleave', function () {
      document.querySelector(`.${styles.upload}`).classList.remove(`${styles.highlight}`)
    })
    drop_.addEventListener('drop', function () {
      document.querySelector(`.${styles.upload}`).classList.remove(`${styles.highlight}`)
    })
  }, [])

  useEffect(() => {
    document.querySelector('#upload-file').addEventListener('change', function () {
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
      };
    })
  }, [])

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
    setUploadedFile('')
    setImgSrc('')
    setStatus(0)
  }

  function sendPhoto () {
    closeUploadModal()

    const updatedPhotos = photos.map((photo, index) => {
      if (index === currentPhoto) {
        return {
          ...files,
          src: imgSrc
        }
      }

      return photo
    })

    setPhotos(updatedPhotos)
    setFiles('')
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

        <h3 className={styles.title}>
          Carregamento da foto do produto
        </h3>

        <main className={styles.main}>
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
