import Button from '@/components/ui/Button';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();
  return (
    <main className="max-w-screen-lg mx-auto py-36">
      <div className="flex flex-col p-10 mb-8">
        <div className="flex items-center space-x-2 mb-5">
          <FontAwesomeIcon
            icon={faSquareCheck}
            className="h-6 text-accent-color mr-8"
          />
          <h1 className="text-3xl">
            Thank you, your order has been confirmed!
          </h1>
        </div>
        <div className="mb-8">
          Thank you for your shopping with us. We&apos;ll send a confirmation
          once your item has shipped. If you would like to check the status of
          your order(s), please press the link below.
        </div>
        <Button onClick={() => router.push(`/profile`)} variant="primary">
          Go to my orders
        </Button>
      </div>
    </main>
  );
}
