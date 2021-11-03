import { UserRepositoryDelete, UserRepositoryGetId, UserRepositorySave, UserRepositoryUpdate } from '../core/repositories/user.repository';
import User from '../core/entities/User';
import UserModel from '../db/models/user.model';

class UserMongo implements
  UserRepositoryGetId,
  UserRepositorySave,
  UserRepositoryUpdate,
  UserRepositoryDelete {
  public async getById(userId: string): Promise<User> {
    const user: User = await UserModel.findOne({ userId });
    return user;
  }

  public async saveUser(userId: Number, image: string): Promise<User>{
    const user: User = await UserModel.create({
      userId,
      image
    });

    return user;
  }

  public async updateUser(objUser: any, image: string): Promise<User> {
    objUser.image = image;
    const user: User = await objUser.save();
    return user;
  }

  public async deleteUser(userId: Number): Promise<Number> {
    const deleted = await UserModel.deleteOne({ userId });
    return deleted.deletedCount;
  }
}
export default UserMongo;
