import User from '../../entities/User';
import { UserRepositoryDelete } from '../../repositories/user.repository';

const deleteUserInteractor = (userRepository: UserRepositoryDelete) => async (userId: Number) => {
    const deleted: Number = await userRepository.deleteUser(userId);
    return deleted;
}

export default deleteUserInteractor;