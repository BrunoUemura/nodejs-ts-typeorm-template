import { getCustomRepository, Repository } from "typeorm";
import { User } from "../models/User";
import { UsersRepository } from "../repositories/UsersRepository";

export class UserService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async getUsers() {
    return await this.usersRepository.find();
  }

  async getUser(id: string) {
    return await this.usersRepository.findOne(id);
  }

  async createUser(user: any) {
    const newUser = this.usersRepository.create(user);
    return await this.usersRepository.save(newUser);
  }

  async updateUser(id: string, updatedUser: any) {
    const userExist = await this.usersRepository.findOne(id);
    if (!userExist) {
      throw new Error(`No user with id: ${id}`);
    }

    await this.usersRepository.update(id, updatedUser);
    return updatedUser;
  }

  async deleteUser(id) {
    const userExist = await this.usersRepository.find(id);
    if (!userExist) {
      throw new Error(`No user with id: ${id}`);
    }

    await this.usersRepository.delete(id);
    return id;
  }
}
