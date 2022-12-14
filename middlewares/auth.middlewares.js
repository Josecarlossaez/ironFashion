const isLoggedIn = (req, res, next) => {
  console.log(req.session.activeUser)
  if(req.session.activeUser === undefined) {
    res.redirect("/auth/login")
  } else{
    next()
  }
}

const isAdmin = (req, res, next) => {
  if(req.session.activeUser === undefined || req.session.activeUser.role !== "admin") {
    res.render("/auth/login")
  }else {
    next()
  }
}

module.exports = {
  isLoggedIn,
  isAdmin
}