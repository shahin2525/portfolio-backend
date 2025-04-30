import { Router } from 'express';
import { MessageController } from './message.controller';

const router = Router();

router.put(
  '/messages/:id',

  MessageController.updateMessage,
);

router.delete(
  '/messages/:id',

  MessageController.deleteMessage,
);
router.post('/messages/', MessageController.createMessage);
router.get(
  '/messages',

  MessageController.getAllMessages,
);

router.get(
  '/messages/:id',

  MessageController.getSingleMessage,
);

export const MessageRoutes = router;
