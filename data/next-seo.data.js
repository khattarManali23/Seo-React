/* eslint-disable camelcase */
export const SITE_URL = 'https://www.hercotransformers.com'
export const SITE_NAME = 'Herco Transformers'
export const SITE_LOGO = SITE_URL + 'herco fav.png'
export const SITE_FAVICON = SITE_URL + 'android-chrome-512x512.png'
export const SITE_BANNER = SITE_URL + '/logo.jpeg'

const GlobalSEO = {
  global: {
    title:
      'Herco Transformers - High-Quality Transformers for Your Industry Needs',
    description:
      'Herco Transformers provides high-quality transformers for a wide range of industries. Discover our superior transformer solutions for power generation, transportation, and telecommunications industries. Contact us today to learn more!',
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title:
        'Herco Transformers - High-Quality Transformers for Your Industry Needs',
      description:
        'Herco Transformers provides high-quality transformers for a wide range of industries. Discover our superior transformer solutions for power generation, transportation, and telecommunications industries. Contact us today to learn more!',
      images: [
        {
          url: SITE_BANNER,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
    // twitter: {
    //   handle: "@akbarbhai",
    //   site: SITE_NAME,
    //   cardType: "summary_large_image",
    // },
    additionalLinkTags: [
      {
        rel: 'icon',
        href: SITE_FAVICON,
      },
      {
        rel: 'apple-touch-icon',
        // href: SITE_ICO_DIR + "apple-icon-76x76.png",
        sizes: '76x76',
      },
      {
        rel: 'manifest',
        // href: SITE_ICO_DIR + "manifest.json",
      },
    ],
  },
  '/': {
    title:
      'Herco Transformers - High-Quality Transformers for Your Industry Needs',
    description:
      'Herco Transformers provides high-quality transformers for a wide range of industries. Discover our superior transformer solutions for power generation, transportation, and telecommunications industries. Contact us today to learn more!',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title:
        'Herco Transformers - High-Quality Transformers for Your Industry Needs',
      description:
        'Herco Transformers provides high-quality transformers for a wide range of industries. Discover our superior transformer solutions for power generation, transportation, and telecommunications industries. Contact us today to learn more!',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/blogs': {
    title:
      'Herco Transformers Blog - Stay Informed About Our Latest Developments',
    description:
      "Stay informed about the latest transformer developments, news, and updates with Herco Transformers' blog. Our expert insights and thought leadership offer industry knowledge and updates on our products and services. Subscribe today to stay up-to-date!",

    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title:
        'Herco Transformers Blog - Stay Informed About Our Latest Developments',
      description:
        "Stay informed about the latest transformer developments, news, and updates with Herco Transformers' blog. Our expert insights and thought leadership offer industry knowledge and updates on our products and services. Subscribe today to stay up-to-date!",
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,

          alt: SITE_NAME,
        },
      ],
    },
  },
  '/auth/dealership-registration': {
    title:
      'Become a Herco Transformers Dealer - Partner with a Leading Provider of High-Quality Transformers',
    description:
      "Join Herco Transformers' team as a dealer and gain access to our high-quality products, expert support, and industry expertise. Our dealers are a vital part of our business, and we are committed to providing the support and resources needed to succeed. Contact us today to learn more about becoming a Herco Transformers dealer.",
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title:
        'Become a Herco Transformers Dealer - Partner with a Leading Provider of High-Quality Transformers',
      description:
        "Join Herco Transformers' team as a dealer and gain access to our high-quality products, expert support, and industry expertise. Our dealers are a vital part of our business, and we are committed to providing the support and resources needed to succeed. Contact us today to learn more about becoming a Herco Transformers dealer.",
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/orders/checkout': {
    title: 'Herco Transformers || Checkout',
    description:
      'Herco Transformers || Checkout: Check your cart and complete order with amzing offers',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title: 'Herco Transformers || Checkout',
      description:
        'Herco Transformers || Checkout: Check your cart and complete order with amzing offers',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/p': {
    title: 'Our Products - High-Quality Transformers for Your Industry Needs',
    description:
      'Herco Transformers offers a wide range of high-quality transformers for power generation, transportation, telecommunications, and more. Our innovative solutions are custom-designed to meet unique industry requirements. Trust Herco Transformers for your transformer needs. Contact us to learn more!',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title: 'Our Products - High-Quality Transformers for Your Industry Needs',
      description:
        'Herco Transformers offers a wide range of high-quality transformers for power generation, transportation, telecommunications, and more. Our innovative solutions are custom-designed to meet unique industry requirements. Trust Herco Transformers for your transformer needs. Contact us to learn more!',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/categories': {
    title: 'Our Products - High-Quality Transformers for Your Industry Needs',
    description:
      'Herco Transformers offers a wide range of high-quality transformers for power generation, transportation, telecommunications, and more. Our innovative solutions are custom-designed to meet unique industry requirements. Trust Herco Transformers for your transformer needs. Contact us to learn more!',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title: 'Our Products - High-Quality Transformers for Your Industry Needs',
      description:
        'Herco Transformers offers a wide range of high-quality transformers for power generation, transportation, telecommunications, and more. Our innovative solutions are custom-designed to meet unique industry requirements. Trust Herco Transformers for your transformer needs. Contact us to learn more!',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/offers': {
    title: 'Herco Transformers || Offers',
    description:
      'Herco Transformers || Offers: Get Amazing Offers on your favourite Products.',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title: 'Herco Transformers || Offers',
      description:
        'Herco Transformers || Offers: Get Amazing Offers on your favourite Products.',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/contact-us': {
    title:
      'Contact Herco Transformers - Let Us Help Meet Your Transformer Needs',
    description:
      'Herco Transformers is your trusted partner for all your transformer needs. Contact our experts today to learn more about our products and services. Our team is available to answer your questions and provide you with the support you need for optimal transformer performance.',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title: 'Herco Transformers || Contact Us',
      description:
        'Herco Transformers is your trusted partner for all your transformer needs. Contact our experts today to learn more about our products and services. Our team is available to answer your questions and provide you with the support you need for optimal transformer performance.',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/auth/login': {
    title: 'Herco Transformers || Login',
    description: 'Herco Transformers || Login: Great to have you back!',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title: 'Herco Transformers || Login',
      description: 'Herco Transformers || Login: Great to have you back!',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/auth/registration': {
    title: 'Herco Transformers || Registration',
    description:
      'Herco Transformers || Registration: Register today to shop for our exclusive products!',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title: 'Herco Transformers || Registration',
      description:
        'Herco Transformers || Registration: Register today to shop for our exclusive products!',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/privacy-policy': {
    title: 'Herco Transformers || Privacy Policy',
    description: 'Herco Transformers || Privacy Policy: Know our policy user',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title: 'Herco Transformers || Privacy Policy',
      description: 'Herco Transformers || Privacy Policy: Know our policy user',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/account/profile': {
    title: 'Herco Transformers || My Profile',
    description:
      'Herco Transformers || My Profile: Check your profile, wishlists and, orders',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title: 'Herco Transformers || My Profile',
      description:
        'Herco Transformers || My Profile: Check your profile, wishlists and, orders',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  '/about-us': {
    title:
      'About Herco Transformers - Your Trusted Partner in High-Quality Transformers',
    description:
      'Herco Transformers is a trusted provider of high-quality transformers for over 50 years. Our commitment to quality, reliability, and customer satisfaction sets us apart. Learn about our company, history, and industry expertise. Contact us to experience the Herco difference.',
    openGraph: {
      image: SITE_BANNER,
      type: 'website',
      locale: 'en_IE',
      url: SITE_URL,
      site_name: SITE_NAME,
      title:
        'About Herco Transformers - Your Trusted Partner in High-Quality Transformers',
      description:
        'Herco Transformers is a trusted provider of high-quality transformers for over 50 years. Our commitment to quality, reliability, and customer satisfaction sets us apart. Learn about our company, history, and industry expertise. Contact us to experience the Herco difference.',
      images: [
        {
          url: `https://www.hercotransformers.com/logo.jpeg`,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
}

export default GlobalSEO
