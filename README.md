# Shoppee-<i>e</i>

https://user-images.githubusercontent.com/45511700/203849872-6b739620-da3a-43ab-9edf-c85098bc8dd4.mp4

> E-commerce web shop platform.
>
> [Live demo](https://shoppee-e-wnsg.vercel.app/).

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies)
- [Features](#features)
- [Setup](#quick-setup)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## General Information

- This is fullstack e-commerce website created with React, TypeScript, NextJS, Firebase, Stripe and Sanity CMS.

## Technologies

- React <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="30" height="20"/> </a>
- TypeScript <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="30" height="20"/> </a>
- NextJS <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" alt="nextjs" width="20" height="20"/> </a>
- Firebase <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.gstatic.com/devrel-devsite/prod/ve6e6ebff6d326e85aedeebfd3fad7cfd85d0fc48cfc2ee55b5498d178a34d928/firebase/images/touchicon-180.png" alt="firebase" width="20" height="20"/> </a>
- Stripe <a href="https://stripe.com/en-pl" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="stripe" width="40" height="20"/> </a>
- Sanity CMS <a href="https://www.sanity.io/" target="_blank" rel="noreferrer"> <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png" alt="sanity" width="30" height="20"/> </a>
- Tailwind CSS <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="20" height="20"/> </a>, SASS <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="20" height="20"/> </a>

## Features

- You can login by using your google account.
- You can filter products, add to liked list or to the cart. You can process payment by using test cart credentials provided below 'Cart Total' segment. After successfull payment you can find your orders history in profile page.
- Payment process is handled by Stripe platform, which provides payments dashboard to control all payments
- After successfull payment the order is located into Firebase database by webhook.
- All products are fetched from Sanity CMS platform. You can add any products by special sanity content management page.
- the website uses ISR (Incremental Static Regeneration) and SSR (Server Side Rendering) technologies.

## Sanity

- Sanity content management page preview

https://user-images.githubusercontent.com/45511700/203850225-2afee71c-7944-47f8-8cbd-84d5665932cd.mp4

## Quick Setup

Download the repo by using in your terminal `git clone https://github.com/Murad-Git/shoppee-e`
then go to the main folder and start the project by

```
cd shoppee-e
npm i
# or
yarn install

npm run dev
# or
yarn dev
```

## Project Status

Project is: In progress

## Room for Improvement

Room for improvement:

- Adding additional login options (GitHub, Facebook)
- Light and dark themes

## Acknowledgements

- The layout was inspired from [Flatlogic](https://flatlogic-ecommerce.herokuapp.com/)

## Contact

Created by [Murad Kos](https://github.com/Murad-Git) - feel free to contact me!
