import getUserInteractor from './getUser.interactor';
import UserMongo from '../../../dataSources/userMongo.datasource';
import saveUserInteractor from './saveUser.interactor';
import updateUserInteractor from './update.interactor';
import deleteUserInteractor from './delete.interactor';

const userRepository = new UserMongo();

export const getUser = getUserInteractor(userRepository);
export const saveUser = saveUserInteractor(userRepository);
export const updateUser = updateUserInteractor(userRepository);
export const deleteUser = deleteUserInteractor(userRepository);
