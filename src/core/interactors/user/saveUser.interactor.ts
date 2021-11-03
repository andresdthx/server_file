import User from '../../entities/User';
import { UserRepositorySave } from '../../repositories/user.repository';

const saveUserInteractor = (userRepository: UserRepositorySave) => async (userId: Number, image: string) => {
    const user: User = await userRepository.saveUser(userId, image);
    return user;
}

export default saveUserInteractor;