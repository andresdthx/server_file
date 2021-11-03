import { getUser, saveUser, updateUser, deleteUser } from '../core/interactors/user';
import { Response, Request } from 'express';
import asyncHandler from "express-async-handler"

export const GetUser = asyncHandler(async(req: Request, res: Response) => {
  const { params } = req;
  const { id } = params;

  const user = await getUser(id);
  res.json(user);
});

export const SaveUser = asyncHandler(async(req: Request, res: Response) => {
  const { body } = req;
  const { userId, file } = body;

  const user = await saveUser(userId, file);
  res.json(user);
});

export const UpdateUser = asyncHandler(async(req: Request, res: Response) => {
  const { body } = req;
  const { userId, file } = body;

  const user = await getUser(userId);
  const userUpdated = await updateUser(user, file);
  res.json(userUpdated);
});

export const DeleteUser = asyncHandler(async(req: Request, res: Response) => {
  const { params } = req;
  const { id } = params;

  const deleted = await deleteUser(parseInt(id));
  res.json(deleted);
});
