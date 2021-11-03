import User from '../../entities/User';
import { UserRepositoryUpdate } from '../../repositories/user.repository';

const updateUserInteractor = (userRepository: UserRepositoryUpdate) => async (objUser: User, image: string) => {
    const user: User = await userRepository.updateUser(objUser, image);
    return user;
}

export default updateUserInteractor;