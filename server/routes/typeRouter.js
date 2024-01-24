const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleWare/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), typeController.create)
router.post('/del', typeController.delete)
router.get('/', typeController.getAll)

module.exports = router
    