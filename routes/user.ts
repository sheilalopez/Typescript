import { Router } from 'express';
import userController from '../controllers/user';

const router: Router = Router();

router.get('/all',  userController.getUsers);
router.get('/:id',  userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
