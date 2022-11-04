import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();
  return (
    <main className="max-w-screen-lg mx-auto h-[20rem] mt-36">
      <div className="flex flex-col p-10 bg-white ">
        <div className="flex items-center space-x-2 mb-5">
          <FontAwesomeIcon
            icon={faSquareCheck}
            className="h-6 text-accent-color mr-8"
          />
          <h1 className="text-3xl">
            Thank you, your order has been confirmed!
          </h1>
        </div>
        <p className="mb-8">
          Thank you for your shopping with us. We&apos;ll send a confirmation
          once your item has shipped. If you would like to check the status of
          your order(s), please press the link below.
        </p>
        <Button
          onClick={() => router.push(`/orders`)}
          className="btn btn-primary w-1/3"
        >
          Go to my orders
        </Button>
      </div>
    </main>
  );
}
