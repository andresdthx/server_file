import { UserRepositoryDelete, UserRepositoryGetId, UserRepositorySave, UserRepositoryUpdate } from '../../src/core/repositories/user.repository';
import User from '../../src/core/entities/User';

class UserMock implements
  UserRepositoryGetId,
  UserRepositorySave,
  UserRepositoryUpdate,
  UserRepositoryDelete {
  public async getById(userId: string): Promise<User> {
    return {
      _id: "618a8a12a9844feb0b701dd0",
      userId: 1,
      image: "image-644dflkjspdfsdsdkfjrktmdfmvdvnkskdffsoifof"
    }
  }

  public async saveUser(userId: Number, image: string): Promise<User>{
    return {
      userId: 1,
      image: image,
      _id: "618a8a12a9844feb0b701dd0"
    }
  }

  public async updateUser(objUser: any, image: string): Promise<User> {
    objUser.image = image;
    return objUser;
  }

  public async deleteUser(userId: Number): Promise<Number> {
    return 1;
  }
}
export default UserMock;
