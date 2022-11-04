import React, { useState } from 'react';
import { faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/types/hooks';
import { productsValue, removeProduct } from '@/store/productsSlice';

export default function CartTable() {
  const [quantity, setQuantity] = useState(1);
  const products = useAppSelector(productsValue);
  const dispatch = useAppDispatch();
  const removeFromCart = (id: string) => {
    dispatch(removeProduct(id));
  };

  return (
    <table>
      <thead>
        <tr className="border-b-2 border-[rgb(217,217,217)]">
          <th className="bg-transparent text-dark px-0">Products</th>
          <th className="bg-transparent text-dark px-0">Quantity</th>
          <th className="bg-transparent text-dark px-0">Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr className="mt-2" key={index}>
            <td className="px-0 pt-6">
              <div className="flex items-center">
                <div className="w-40 mr-6">
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
                  onClick={() =>
                    setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))
                  }
                  className="flex cursor-pointer p-1 mr-2 border-0"
                >
                  <FontAwesomeIcon icon={faMinus} className="h-2" />
                </button>
                <p className="font-bold mb-0 text-lg">{quantity}</p>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex cursor-pointer p-1 ml-2 border-0"
                >
                  <FontAwesomeIcon icon={faPlus} className="h-2" />
                </button>
              </div>
            </td>
            <td className="px-0 pt-6">
              <h6 className="font-bold text-lg mb-0">{product.price}$</h6>
            </td>
            <td className="px-0 pt-7">
              <button
                type="button"
                onClick={() => removeFromCart(product.id)}
                className="border-0 p-0"
              >
                <FontAwesomeIcon
                  className="h-6 hover:text-accent-color"
                  icon={faClose}
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
