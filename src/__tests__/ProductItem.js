import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ProductItem from "../components/ProductItem.jsx";

afterEach(cleanup)

it("renders Product Item correctly", () => {
  render(<ProductItem/>)

  //Renders product card and details
  screen.getByTestId("product-card");
  screen.getByTestId("product-image");
  screen.getByTestId("product-name");
  screen.getByTestId("product-category");
  screen.getByTestId("product-price");
  screen.getByTestId("product-btn-add_to_cart");
})

it("renders with the info that comes by props", () => {
  const mockProps =         {
    "id": 1,
    "name": "85\" QN95B Samsung Neo QLED 4K Smart TV (2022)",
    "price": 5999.99,
    "description": "Quantum Matrix with Mini LEDs Brilliant details shine even in daylight with Quantum Matrix Technology. Powered by a huge grid of Samsung’s ultra-precise Quantum Mini LEDs, it takes exact control of the individual zones of light in your picture for breathtaking color and contrast.",
    "images": [
      "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QS95B_QN95B_QN85B_Q80B_Q70B_Q-Symphony_PC_708xV.jpg?$feature-benefit-jpg",
      "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QN85B_Q80B_100_Color_Volume_with_Quantum_Dot_PC_708xV.jpg?$feature-benefit-jpg",
      "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QLED_Features_EyeComfort_Mode_4K_PC_708xV.jpg?$feature-benefit-jpg"
    ],
    "categories": ["Television & video"]
  }

  render(<ProductItem {...mockProps}/>)

  const image = screen.getByTestId("product-image")

  //Render the properly the info passed in props
  expect(image.src).toContain(mockProps.images[0])
  expect(screen.getByTestId("product-name").textContent).toContain(mockProps.name)
  expect(screen.getByTestId("product-category").textContent).toContain(mockProps.categories[0])
  expect(screen.getByTestId("product-price").textContent).toContain(mockProps.price.toString())
})