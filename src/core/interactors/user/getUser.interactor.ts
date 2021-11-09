import User from '../../entities/User';
import { UserRepositoryGetId } from '../../repositories/user.repository';

const getUserInteractor = (userRepository: UserRepositoryGetId) => async (userId: string) => {
  const user: User = await userRepository.getById(userId);
  return user;
};

export default getUserInteractor;

