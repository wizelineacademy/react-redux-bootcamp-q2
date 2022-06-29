import { ProductCard } from ".";

export default {
  title: "Components / Cards",
  components: ProductCard,
};

export const Product = (args) => {
  return <ProductCard {...args} />;
};

Product.args = {
  name: '85" QN95B Samsung Neo QLED 4K Smart TV (2022)',
  categories: ["Television & video"],
  price: 5999.99,
  images: [
    "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QS95B_QN95B_QN85B_Q80B_Q70B_Q-Symphony_PC_708xV.jpg?$feature-benefit-jpg",
    "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QN85B_Q80B_100_Color_Volume_with_Quantum_Dot_PC_708xV.jpg?$feature-benefit-jpg",
    "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QLED_Features_EyeComfort_Mode_4K_PC_708xV.jpg?$feature-benefit-jpg",
  ],
};
