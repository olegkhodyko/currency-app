import Constants from '@utils/constants';
import Toast, { ToastPosition } from 'react-native-toast-message';

interface ShowErrorToastProps {
  title: string;
  message: string;
  visibilityTime?: number;
  position?: ToastPosition;
  topOffset?: number;
}

export const showErrorToast = ({
  title = 'Error',
  message,
  visibilityTime = Constants.DefaultToastVisibilityTime,
  position = 'top',
  topOffset = 50,
}: ShowErrorToastProps) => {
  Toast.show({
    type: 'error',
    text1: title,
    text2: message,
    position,
    visibilityTime,
    topOffset,
  });
};
