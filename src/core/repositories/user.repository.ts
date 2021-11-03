import User from '../entities/User';

export interface UserRepositoryGetId {
  getById(id: string): Promise<User>;
}

export interface UserRepositorySave {
  saveUser(userId: Number, image: string): Promise<User>;
}

export interface UserRepositoryUpdate {
  updateUser(user: User, image: string): Promise<User>;
}

export interface UserRepositoryDelete {
  deleteUser(userId: Number): Promise<Number>;
}

