import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://raw.githubusercontent.com/sorines/aspacetopause/master/assets/images/pic1.jpg',
    altText: '',
    caption: '',
    header: '',
  },
  {
    src: 'https://raw.githubusercontent.com/sorines/aspacetopause/master/assets/images/pic3.jpg',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src:'https://raw.githubusercontent.com/sorines/aspacetopause/master/assets/images/pic2.jpg', 
    altText: '',
    caption: '',
    header: ''
  }
];
const Header = () => <UncontrolledCarousel items={items} />;

export default Header;