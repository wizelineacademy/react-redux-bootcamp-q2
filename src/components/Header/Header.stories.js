import { BrowserRouter } from "react-router-dom";
import { Header } from ".";

export default {
  title: "Components / Header",
  components: Header,
};

export const Primary = (args) => {
  return (
    <BrowserRouter>
      <Header {...args} />
    </BrowserRouter>
  );
};

Primary.args = {};
