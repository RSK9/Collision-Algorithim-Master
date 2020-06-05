function touching(mo,fi) { 
    if (mo.x - fi.x < fi.width/2 + mo.width/2
      && fi.x - mo.x < fi.width/2 + mo.width/2
      && mo.y - fi.y < fi.height/2 + mo.height/2
      && fi.y - mo.y < fi.height/2 + mo.height/2) {
  return true
      }
      else {
        return false
      }
  }