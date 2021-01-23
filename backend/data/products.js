const products=[
  {
    
    name: 'HP Laptop',
    image: '/images/laptop/product-1.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'HP',
    category: 'Computer',
    price: 289.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 15,
  },
  {
    
    name: 'Asus Laptop',
    image: '/images/laptop/product-2.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Asus',
    category: 'Computer',
    price: 249.99,
    countInStock: 18,
    rating: 4.3,
    numReviews: 10,
  },
  {
   
    name: 'Dell Laptop',
    image: '/images/laptop/product-3.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Dell',
    category: 'Computer',
    price: 250.99,
    countInStock: 20,
    rating: 4.6,
    numReviews: 15,
  },
  {
   
    name: 'Mens Red Jackets',
    image: '/images/vippng-1.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Top ten',
    category: 'clothes',
    price: 99.99,
    countInStock: 0,
    rating: 3.9,
    numReviews: 5,
  },
  {
  
    name: 'Girls Jackets',
    image: '/images/SeekPng-1.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Yellow',
    category: 'clothes',
    price: 149.99,
    countInStock: 12,
    rating: 4.3,
    numReviews: 7,
  },
  {
    
    name: 'Super bag',
    image: '/images/image-16.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Xiaomi',
    category: 'Bag',
    price: 200.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 11,
  },
  
  {
    
    name: 'Samsung S8+',
    image: '/images/phone/phone-1.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Samsung',
    category: 'Mobile',
    price: 989.99,
    countInStock: 15,
    rating: 4.8,
    numReviews: 9,
  },
  {
   
    name: 'Samsung S10',
    image: '/images/phone/phone-3.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Samsung',
    category: 'Mobile',
    price: 1099.99,
    countInStock: 15,
    rating: 4.8,
    numReviews: 10,
  },
  {
   
    name: 'iphone pro 11',
    image: '/images/phone/phone-2.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Apple',
    category: 'mobile',
    price: 1589.99,
    countInStock: 20,
    rating: 4.6,
    numReviews: 9,
  },
  {
   
    name: 'Samsung S7+',
    image: '/images/phone/phone-1.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Top ten',
    category: 'clothes',
    price: 790.99,
    countInStock: 12,
    rating: 4.5,
    numReviews: 8,
  },
  {
   
    name: 'Mens Red Bag',
    image: '/images/bags/bag-1.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Max',
    category: 'Bags',
    price: 80.99,
    countInStock: 18,
    rating: 4.7,
    numReviews: 11,
  },
  {
   
    name: 'Black bag',
    image: '/images/bags/bag-3.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Max',
    category: 'Bags',
    price: 130.99,
    countInStock: 15,
    rating: 4.7,
    numReviews: 10,
  },
  {
    
    name: 'super Bags',
    image: '/images/bags/bag-2.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Burton',
    category: 'Bags',
    price: 120.99,
    countInStock: 10,
    rating: 4.3,
    numReviews: 5,
  },
  {
  
    name: 'AirMax Shoes',
    image: '/images/shoes/shoe-3.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'AirMax',
    category: 'Shoes',
    price: 70.99,
    countInStock: 20,
    rating: 4.9,
    numReviews: 8,
  },
  {
    
    name: 'Zoom Shoe',
    image: '/images/shoes/shoe-2.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Nike',
    category: 'Shoes',
    price: 78.99,
    countInStock: 14,
    rating: 4.6,
    numReviews: 8,
  },
  {
   
    name: 'Sply 350',
    image: '/images/shoes/shoe-2.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam illo incidunt earum porro mollitia quos ipsam totam? Iusto nobis ipsa cumque totam officiis doloremque. Ea a perferendis facere. Culpa.',
    brand: 'Nike',
    category: 'Shoes',
    price: 49.99,
    countInStock: 10,
    rating: 4.2,
    numReviews: 6,
  },


]
export default products