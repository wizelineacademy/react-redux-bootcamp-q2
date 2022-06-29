import { AddToCartButton } from ".";

export default {
  title: "Components / Buttons",
  components: AddToCartButton,
};

export const AddToCart = (args) => {
  return <AddToCartButton {...args} />;
};

AddToCart.args = {};
