import { EventEmitter } from 'events';

/* eslint-disable */
const createUUID = () => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
/* eslint-enable */

class NotificationManagerClass extends EventEmitter {
  constructor() {
    super();
    this.listNotify = [];
  }

  create(notify) {
    const finalNotify = {
      id: createUUID(),
      type: 'info',
      title: null,
      content: null,
      timeout: 4000,
      ...notify,
    };
    this.listNotify = [finalNotify].concat(this.listNotify);
    this.emitChange();
  }

  info({ title, content, timeout, onClose, onClick, onHide }) {
    this.create({
      type: 'info',
      title,
      content,
      timeout,
      onClose,
      onClick,
      onHide,
    });
  }

  success({ title, content, timeout, onClose, onClick, onHide }) {
    this.create({
      type: 'success',
      title,
      content,
      timeout,
      onClose,
      onClick,
      onHide,
    });
  }

  warning({ title, content, timeout, onClose, onClick, onHide }) {
    this.create({
      type: 'warning',
      title,
      content,
      timeout,
      onClose,
      onClick,
      onHide,
    });
  }

  error({ title, content, timeout, onClose, onClick, onHide }) {
    this.create({
      type: 'error',
      title,
      content,
      timeout,
      onClose,
      onClick,
      onHide,
    });
  }

  remove(notification) {
    this.listNotify = this.listNotify.filter((n) => notification.id !== n.id);
    this.emitChange();
  }

  emitChange() {
    this.emit('CHANGE', this.listNotify);
  }

  addChangeListener(callback) {
    this.addListener('CHANGE', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('CHANGE', callback);
  }
}

const NotificationManager = new NotificationManagerClass();
export { NotificationManager };
