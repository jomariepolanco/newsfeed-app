import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import {User} from "../entity/User";

export class UserController {
  private userRepo = getRepository(User);

  async all(req: Request, res: Response, next: NextFunction) {
    const users = await User.find({ relations: ["notes"] });
    return users;
  }

  async one(req: Request, res: Response, next: NextFunction) {
    return this.userRepo.findOne(req.params.id);
  }

  async save(req: Request, res: Response, next: NextFunction) {
    return this.userRepo.save(req.body);
  }
}

//Did not create a DELETE controller because not using in frontend. When that functionality is needed, it can easily be added.
