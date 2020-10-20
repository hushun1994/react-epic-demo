import { observable, action, makeObservable } from 'mobx'
import { Uploader } from '../models'

class ImageStore {
  constructor() {
    makeObservable(this)
  }

  @observable filename = ''
  @observable file = null
  @observable isUpLoading = false
  @observable serverFile = null

  @action setFilename(newFilename) {
    this.file = newFilename
  }

  @action setFile(newFile) {
    this.file = newFile
  }

  @action upload() {
    this.isUpLoading = true
    return new Promise((resolve, reject) => {
      Uploader.add(this.file, this.filename)
        .then((serverFile) => {
          this.serverFile = serverFile
          resolve(serverFile)
        })
        .catch((error) => {
          console.log('上传失败')
          reject(error)
        })
        .finally(() => {
          this.isUpLoading = false
        })
    })
  }
}

export default new ImageStore()
