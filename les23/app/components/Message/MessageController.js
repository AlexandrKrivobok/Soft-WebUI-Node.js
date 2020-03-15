import {MessageView} from './MessageView.js';
import {MessageModel} from './MessageModel.js';

export class MessageController {
  constructor() {
    this.view = new MessageView();
    this.model = new MessageModel();
    (this.handleLoadMessages.bind(this));

    this.model.getMessages();
  }

  handleLoadMessages(arr) {
    this.view.renderMessages(arr);
  }
}