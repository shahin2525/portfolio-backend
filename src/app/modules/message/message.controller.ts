import { RequestHandler } from 'express';

import StatusCodes from 'http-status-codes';
import { MessageServices } from './message.service';
import {
  createMessageValidationSchema,
  updateMessageValidationSchema,
} from './message.validation';
const createMessage: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const validatedData = createMessageValidationSchema.parse(data);

    // console.log(userData);
    const result = await MessageServices.createMessageIntoDB(validatedData);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Message created successfully',
      statusCode: StatusCodes.CREATED,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// single landlord
const getAllMessages: RequestHandler = async (req, res, next) => {
  try {
    // console.log(userData);
    const result = await MessageServices.getAllMessagesFromDB();
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'get all messages data successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// message update
const updateMessage: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;

    const id = req.params.id;
    // console.log(userData);
    const validatedData = updateMessageValidationSchema.parse(data);
    const result = await MessageServices.updateMessageFromDB(id, validatedData);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Message updated successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// delete user

const deleteMessage: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(userData);
    await MessageServices.deleteMessageFromDB(id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'message deleted successfully',
      statusCode: StatusCodes.OK,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleMessage: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await MessageServices.getSingleMessageFromDB(id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'single message retrieve successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const MessageController = {
  createMessage,
  updateMessage,
  deleteMessage,
  getAllMessages,
  getSingleMessage,
};
