//////////////////////////////////////////////////////
//
// @package PhantonJS
// @https://www.npmjs.com/package/phantom
//
// @author Rodrigo Ribeiro - me@rodrigo3d.com
//
//////////////////////////////////////////////////////

const phantom = require('phantom')

const takeScreenshot = async(url) => {
  const instance = await phantom.create()
  const page = await instance.createPage()

  const status = await page.open(url)
  console.log(status)

  if(status === "success") {
    await page.render('screenshots/globo.png');
  }

  // const content = await page.property('content')
  // console.log(content)

  await instance.exit()
}

takeScreenshot('http://demo.rodrigo3d.com/advogados')
