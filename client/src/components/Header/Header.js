import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eaebfb6af1f3014a7b193b43d1a96d7b&w=1000&q=80',
    altText: '',
    caption: '',
    header: '',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/10/13/15/29/black-coffee-2847957_960_720.jpg',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src:'http://pvp.trb.com/3690581438001/2016/09/3690581438001_5121576874001_image-1473696577341.jpg?pubId=3690581438001', 
    altText: '',
    caption: '',
    header: ''
  }
];
const Header = () => <UncontrolledCarousel items={items} />;

export default Header;