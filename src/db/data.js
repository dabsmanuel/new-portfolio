import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
 SiNextdotjs,
 SiFramer
} from "react-icons/si";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
    ],
  }
];

//services Data
export const serviceData = [
  {
    id: 1,
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Unique visual identities that elevate the message and values of your brand.',
  },
  {
    id: 2,
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Intuitive and engaging interfaces that captivate the attention of your audience.',
  },
  {
    id: 3,
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Robust and scalable frontend solutions that bring your vision to life.',
  },
  {
    id: 4,
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimized online presence that drives organic traffic and growth.',
  },
];

// testimonial data
export const testimonialData = [
  {
    id: 1,
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    id: 2,
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    id: 3,
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

//workSlides Data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};  
