import useSnackBar from '@/hooks/use-snackBar';
import {
  decrementFromCart,
  incrementFromCart,
  removeProduct,
} from '@/store/productsSlice';
import { useAppDispatch } from '@/types/hooks';
import { Product } from '@/types/main';
import { faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

interface Props {
  product: Product;
}

export default function TableItem({ product }: Props) {
  const dispatch = useAppDispatch();
  const addProductInfo = useSnackBar({
    amount: 1,
    product: product.name,
    snacktype: {
      type: `product`,
      func: `add`,
    },
    variant: `success`,
  });
  const removeProductInfo = useSnackBar({
    amount: 1,
    product: product.name,
    snacktype: {
      type: `product`,
      func: `remove`,
    },
    variant: `error`,
  });
  const removeAllProductsInfo = useSnackBar({
    amount: product.quantity,
    product: product.name,
    snacktype: {
      type: `product`,
      func: `remove`,
    },
    variant: `error`,
  });

  const removeAllCart = (id: string) => {
    removeAllProductsInfo();
    dispatch(removeProduct(id));
  };

  const descrementAmount = (id: string) => {
    removeProductInfo();
    dispatch(decrementFromCart(id));
  };
  const incrementAmount = (id: string) => {
    addProductInfo();
    dispatch(incrementFromCart(id));
  };
  return (
    <tr className="mt-2">
      <td className="px-0 pt-6">
        <div className="flex items-center">
          <div className="min-w-[8rem] mr-6">
            <Image
              src={product.image}
              height={500}
              width={500}
              objectFit="cover"
              alt="product"
              layout="responsive"
            />
          </div>
          <div>
            <h6 className="text-[#555]">{product.category}</h6>
            <h5 className="font-bold">{product.name}</h5>
          </div>
        </div>
      </td>
      <td className="px-0 pt-6">
        <div className="flex items-center justify-center">
          <button
            onClick={() => descrementAmount(product.id)}
            className="flex cursor-pointer p-1 mr-2 border-0"
          >
            <FontAwesomeIcon icon={faMinus} className="h-2" />
          </button>
          <p className="font-bold mb-0 text-lg">{product.quantity}</p>
          <button
            onClick={() => incrementAmount(product.id)}
            className="flex cursor-pointer p-1 ml-2 border-0"
          >
            <FontAwesomeIcon icon={faPlus} className="h-2" />
          </button>
        </div>
      </td>
      <td className="px-0 pt-6">
        <h6 className="font-bold text-lg mb-0">{product.totalPrice}$</h6>
      </td>
      <td className="px-0 pt-7">
        <button
          type="button"
          onClick={() => removeAllCart(product.id)}
          className="border-0 p-0"
        >
          <FontAwesomeIcon
            className="h-6 hover:text-accent-color"
            icon={faClose}
          />
        </button>
      </td>
    </tr>
  );
}
