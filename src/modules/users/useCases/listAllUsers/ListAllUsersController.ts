import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.headers;
    const user_id = <string>id;

    try {
      const users = this.listAllUsersUseCase.execute({
        user_id,
      });
      return response.json(users);
    } catch {
      return response.status(400).json({ error: "Mensagem do erro" });
    }
  }
}

export { ListAllUsersController };
