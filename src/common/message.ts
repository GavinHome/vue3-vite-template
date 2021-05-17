/* eslint-disable */

import { message } from "ant-design-vue";

export const openSuccessMsg = (
  content: any,
  duration?: number,
  onClose?: () => void
) => {
  message.success(content, duration, onClose);
};

export const openWarnMsg = (
  content: any,
  duration?: number,
  onClose?: () => void
) => {
  message.warning(content, duration, onClose);
};

export const openInfoMsg = (
  content: any,
  duration?: number,
  onClose?: () => void
) => {
  message.info(content, duration, onClose);
};

export const openErrorMsg = (
  content: any,
  duration?: number,
  onClose?: () => void
) => {
  message.error(content, duration, onClose);
};
