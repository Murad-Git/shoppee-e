import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <h5 className="text-white font-bold">Many desktop publishing</h5>
            <p className="text-[#555] mt-4">
              Do you want to receive exclusive email offers? Subscribe to our
              newsletter! You will receive a unique promo code which gives you a
              20% discount on all our products in 10 minutes.
            </p>
          </div>
        </div>
        <hr />
        <div className="my-12 flex flex-col justify-between">
          <div className="flex justify-between flex-col">
            <div>
              <h2>
                Shoppee-<i>e</i>
              </h2>
              <p className="text-white font-light mb-0">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s,
              </p>
            </div>
            <div className="socials mt-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="text-2xl mr-2 text-white"
              />
              <FontAwesomeIcon
                icon={faHouse}
                className="text-2xl mr-2 text-white"
              />
              <FontAwesomeIcon
                icon={faHouse}
                className="text-2xl mr-2 text-white"
              />
              <FontAwesomeIcon
                icon={faHouse}
                className="text-2xl mr-2 text-white"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div>
              <h5 className="uppercase font-bold text-white mb-6">company</h5>
              <ul>
                <li className="mb-4 text-[#555] cursor-pointer">
                  <p>What We Do</p>
                </li>
                <li className="mb-4 text-[#555] cursor-pointer">
                  <p>Available Services</p>
                </li>
                <li className="mb-4 text-[#555] cursor-pointer">
                  <p>Latest Posts</p>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase font-bold text-white mb-6">
                my account
              </h5>
              <ul>
                <li className="mb-4 text-[#555] cursor-pointer">
                  <p>Sign In</p>
                </li>
                <li className="mb-4 text-[#555] cursor-pointer">
                  <p>View Cart</p>
                </li>
                <li className="mb-4 text-[#555] cursor-pointer">
                  <p>Order Tracking</p>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase font-bold text-white mb-6">
                customer service
              </h5>
              <ul>
                <li className="mb-4 text-[#555] cursor-pointer">
                  <p>Help & Contact Us</p>
                </li>
                <li className="mb-4 text-[#555] cursor-pointer">
                  <p>Returns and Refunds</p>
                </li>
                <li className="mb-4 text-[#555] cursor-pointer">
                  <p>Online Stores</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-7 px-0">
          <p className="text-[#555] mb-0">© 2020-2022 powered by Flatlogic</p>
        </div>
      </div>
    </div>
  );
}
