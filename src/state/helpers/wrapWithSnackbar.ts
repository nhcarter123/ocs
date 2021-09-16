import { notification } from 'antd';

export const wrapWithSnackbar = <Fn extends Function, Args>(
  fn: Fn,
  params: Args,
  successDescription: string
): any => {
  try {
    const result = fn(params);

    notification.success({
      message: 'Success',
      placement: 'bottomRight',
      description: successDescription
    });

    return result;
  } catch (err: any) {
    if (err instanceof Error) {
      notification.error({
        message: 'Error',
        placement: 'bottomRight',
        description: err.message
      });
    }
  }
};
