import { useSnackbar, VariantType } from 'notistack';
import { useCallback } from 'react';
// const variants = [`success`, `error`, `warning`, `info`];
interface Props {
  // [key: string]: string | number;
  amount?: number;
  product?: string;
  snacktype:
    | {
        type: 'product';
        func: 'add' | 'remove' | 'addLike' | 'removeLike';
      }
    | {
        type: 'login';
        func: 'success' | 'logout' | 'error';
      }
    | {
        type: 'message';
        message: string;
      };
  username?: string | null;
  variant: VariantType;
}

export default function useSnackBar({
  amount,
  product,
  snacktype,
  username,
  variant,
}: Props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const productMessage = (product: string, type: string, amount?: number) => {
    // add, remove from cart
    if ((typeof product === `string` && type === `add`) || type === `remove`)
      return `${amount} ${product}${
        (amount && amount > 1 && `s were`) || ` was`
      } ${type}ed ${type === `add` ? `to` : `from`} cart`;
    // add, remove liked
    if (
      (typeof product === `string` && type === `addLike`) ||
      type === `removeLike`
    )
      return `${product} was ${type === `addLike` ? `add` : `remove`}ed ${
        type === `addLike` ? `to` : `from`
      } liked products`;
    // default
    else return `default product snackback info`;
  };

  const loginMessage = (username: string, type: string) => {
    if (type === `success` && username) {
      return `Welcome ${username}`;
    }
    if (type === `logout`) return `Successfully logged out`;
    if (type === `error`) return `You need to log in`;
    else return `Welcome back`;
  };

  const handler = useCallback(
    (message: string, variant: VariantType) => () => {
      enqueueSnackbar(message, {
        variant: variant,
        autoHideDuration: 3000,
      });
    },
    [enqueueSnackbar],
  );

  if (snacktype.type === `product` && product)
    return handler(productMessage(product, snacktype.func, amount), variant);

  if (snacktype.type === `login`)
    return handler(
      loginMessage(username ? username : ``, snacktype.func),
      variant,
    );
  if (snacktype.type === `message`) return handler(snacktype.message, variant);
  else return handler(`error in snackbar hook`, `info`);
}
