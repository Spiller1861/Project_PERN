const Router = require('express')
const router = new Router()
const deviceRouter = require('../controllers/deviceController')
const checkRole = require('../middleWare/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), deviceRouter.create)
router.get('/', deviceRouter.getAll)
router.get('/:id', deviceRouter.getOne)

module.exports = router