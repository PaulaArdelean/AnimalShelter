import { CreateAnimalHandler } from "./create-animal/create-animal.handler";
import { DeleteAnimalHandler } from "./delete-animal/delete-animal.handler";

export const CommandHandlers = [
  CreateAnimalHandler,
  DeleteAnimalHandler,
];