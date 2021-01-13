import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import {Note} from "../entity/Note";
import { User } from "../entity/User";

export class NoteController {
  private noteRepo = getRepository(Note);

  async all(req: Request, res: Response, next: NextFunction) {
    const notes = await Note.find({ relations: ["user"] });
    return notes;
  }


  async save(req: Request, res: Response, next: NextFunction) {
      const {text, userId, articleTitle} = req.body 
      const user = await User.findOneOrFail({id: userId})

      const note = new Note()
      note.text = text 
      note.articleTitle = articleTitle
      note.user = user 
      return this.noteRepo.save(note);
  }

  async remove(req: Request, res: Response, next: NextFunction){
      const note = await this.noteRepo.findOne(req.params.id)
      return this.noteRepo.remove(note)
  }
}

//did not make a /notes/:id controller because not using in the front end. 