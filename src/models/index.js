import AV, { User } from 'leancloud-storage'

AV.init({
  appId: 'eoqKLJLaoqF3Ckjz0X7iGzpf-gzGzoHsz',
  appKey: '3zRaycs1AXzDiIB5sF6MLCwy',
  serverURL: 'https://eoqkljla.lc-cn-n1-shared.com',
})

const Auth = {
  register(username, password) {
    let user = new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then(
        (loginedUser) => resolve(loginedUser),
        (error) => reject(error)
      )
    })
  },

  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(
        (loginedUser) => resolve(loginedUser),
        (error) => reject(error)
      )
    })
  },

  logout() {
    User.logOut()
  },

  getCurrentUser() {
    return User.current()
  },
}

const Uploader = {
  add(file, filename) {
    const item = new AV.Object('Image')
    console.log(333)
    const avFile = new AV.File(filename, file)
    console.log(444)
    item.set('filename', filename)
    item.set('owner', AV.User.current())
    item.set('url', avFile)
    return new Promise((resolve, reject) => {
      item.save().then(
        (serverFile) => {
          resolve(serverFile)
        },
        (error) => {
          reject(error)
        }
      )
    })
  },
}

export { Auth, Uploader }
