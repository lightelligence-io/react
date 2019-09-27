import { useCallback } from 'react';
import copyToClipboard from 'clipboard-copy';

export const useCopyToClipboard = (text) => {
  const handleClick = useCallback(
    ({ key, target } = {}) => {
      if (key && key !== 'Enter') {
        return;
      }

      if (text) {
        copyToClipboard(text);
      } else if (target && target.select) {
        target.select();
        document.execCommand('copy');
      } else {
        // eslint-disable-next-line no-console
        console.error('Please provide a text or use inside TextField');
      }
    },
    [text],
  );

  return handleClick;
};
