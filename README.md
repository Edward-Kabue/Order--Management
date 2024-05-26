# Order Management Application

> This project is an order management application developed using Next.js. It manages workflow orders and products from WooCommerce, providing a seamless integration between the two platforms.

## Built With

- **Languages**: JavaScript, TypeScript

- **Frameworks/Libraries**: Next.js, React, WooCommerce REST API

- **Technologies**: Webpack, Babel, ESLint

## Live Demo (if available)

[Live Demo Link](https://livedemo.com)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Node.js installed on your machine

- Basic understanding of JavaScript and React

- Familiarity with Next.js framework

### Installation

1\. Clone the repository:

```

git clone https://github.com/Edward-Kabue/Order-Management.git

```

2\. Navigate into the project directory:

```

cd order-management-app

```

3\. Install dependencies:

```

npm install

```

or

```

yarn install

```

4\. Set up environment variables (if any):

```

cp.env.example.env

```

Edit `.env` file to include your WooCommerce REST API credentials.

### Usage

1\. Start the development server:

```

npm run dev

```

or

```

yarn dev

```

2\. Open your browser and navigate to `http://localhost:3000`.

### Configuration

To configure the WooCommerce REST API package, follow these steps:

1\. Install the WooCommerce REST API package:

```

npm install @woocommerce/woocommerce-rest-api

```

or

```

yarn add @woocommerce/woocommerce-rest-api

```

2\. Configure the package by creating a `.env` file in your project root and adding your WooCommerce REST API credentials:

```

WOOCOMMERCE_STORE_URL=https://yourstore.com

WOOCOMMERCE_STORE_CONSUMER_KEY=ck_your_consumer_key

WOOCOMMERCE_STORE_CONSUMER_SECRET=cs_your_consumer_secret

WOOCOMMERCE_STORE_VERSION=wc/v3

```

3\. Use the configured WooCommerce REST API package in your application to interact with your WooCommerce store.

### Deployment

For deployment, consider using Vercel (the company behind Next.js) or any other platform that supports Next.js applications. Follow the platform's specific instructions for deploying Next.js projects.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!
