import { renderHook } from '@testing-library/react-hooks';
import copy from 'clipboard-copy';
import { useCopyToClipboard } from './useCopyToClipboard';

jest.mock('clipboard-copy');

describe('useCopyToClipboard', () => {
  test('copies text if provided as hook parameter', () => {
    const { result } = renderHook(() => useCopyToClipboard('text-to-copy'));
    result.current();
    expect(copy).toHaveBeenCalledWith('text-to-copy');
  });

  test('copies text from event if text is not provided', () => {
    const originalExecCommand = document.execCommand;
    document.execCommand = jest.fn();
    const { result } = renderHook(() => useCopyToClipboard());
    const select = jest.fn();
    result.current({ target: { select } });
    expect(select).toHaveBeenCalled();
    expect(document.execCommand).toHaveBeenCalledWith('copy');
    document.execCommand = originalExecCommand;
  });
});
