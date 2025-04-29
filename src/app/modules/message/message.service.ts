import status from 'http-status';
import AppError from '../../error/appError';
import { TMessage } from './message.interface';
import { Message } from './message.model';

const createMessageIntoDB = async (payload: TMessage) => {
  const result = await Message.create(payload);

  return result;
};

export const getAllMessagesFromDB = async () => {
  const result = await Message.find();
  return result;
};

const getSingleMessageFromDB = async (id: string) => {
  const messageId = await Message.findById(id);
  if (!messageId) {
    throw new AppError(status.NOT_FOUND, 'message id not found');
  }
  const result = await Message.findById(id);
  return result;
};
const updateMessageFromDB = async (id: string, payload: Partial<TMessage>) => {
  const messageId = await Message.findById(id);
  if (!messageId) {
    throw new AppError(status.NOT_FOUND, 'message id not found');
  }
  const result = await Message.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteMessageFromDB = async (id: string) => {
  const messageId = await Message.findById(id);
  if (!messageId) {
    throw new AppError(status.NOT_FOUND, 'message id not found');
  }
  const result = await Message.findByIdAndDelete(id);
  return result;
};

export const MessageServices = {
  createMessageIntoDB,
  getAllMessagesFromDB,
  getSingleMessageFromDB,
  updateMessageFromDB,
  deleteMessageFromDB,
};
