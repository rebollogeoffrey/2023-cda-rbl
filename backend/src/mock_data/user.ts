import { UserRole } from '../entities/user.entity';

export const valuesUser = [
  {
    id: '5c0eda5f-306d-4a6e-8f7a-6b3bf841420b',
    name: 'William Brunelle ',
    email: 'william.brunelle@gmail.com',
    password: '$2a$04$DWC1OfQqISD5H2H/xmNQK.N/088kw09Jtr07ZD1NHQP1lKNoL0M5u',
    url_image:
      'https://robohash.org/perferendisveritatisitaque.png?size=50x50&set=set1',
    role: UserRole.ADMIN,
  },
  {
    id: 'c90e1467-a6d7-4a75-a544-c86a0e29e7a2',
    name: 'Laurent Pomin',
    email: 'moulinpaiou@hotmail.com',
    password: '$2a$04$7TsjWX5GxNbcKpwoFJPIueFozoZEfkIY9eTZDPxT572bjHzWu5F0K',
    url_image: 'https://robohash.org/veroomnisearum.png?size=50x50&set=set1',
    role: UserRole.BASIC,
  },
];
