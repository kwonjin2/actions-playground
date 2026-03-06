import { render, screen } from "@testing-library/react";
import ProductItem from ".";

test("현재 상품의 title과 description에 입력한 내용이 제대로 렌더링이 되는지 확인", () => {
  render(<ProductItem title="청소기" description="끝내주는 청소기입니다." />);

  const title = screen.getByText("청소기");
  const description = screen.getByText("끝내주는 청소기입니다.");

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});

test("증가 버튼과 감소 버튼, 초기 숫자인 1이 존재하는지 확인하기", () => {
  render(<ProductItem title="청소기" description="끝내주는 청소기입니다." />);

  const plusButton = screen.getByRole("button", { name: "+" });
  const minusButton = screen.getByRole("button", { name: "-" });
  const initialNumber = screen.getByText("1");

  expect(plusButton).toBeInTheDocument();
  expect(minusButton).toBeInTheDocument();
  expect(initialNumber).toBeInTheDocument();
});

test("구매하기 버튼이 존재하는지 확인하기", () => {
  render(<ProductItem title="청소기" description="끝내주는 청소기입니다." />);

  const buyButton = screen.getByRole("button", { name: "구매하기" });

  expect(buyButton).toBeInTheDocument();
});

test("상품이 품절 상태(isSoldOut={true})일 때 “품절” 텍스트가 렌더링되는지 확인하기", () => {
  render(
    <ProductItem
      title="청소기"
      description="끝내주는 청소기입니다."
      isSoldOut={true}
    />,
  );

  const soldOutText = screen.getByText("품절");

  expect(soldOutText).toBeInTheDocument();
});

test("상품이 품절 상태(isSoldOut={true})일 때 버튼이 비활성화(disabled)되고, CSS 클래스명에 opacity-50과 cursor-not-allowed가 포함되는지 확인하기", () => {
  render(
    <ProductItem
      title="품절 상품"
      description="품절된 상품입니다."
      isSoldOut={true}
    />,
  );

  const purchaseButton = screen.getByRole("button", { name: "구매하기" });

  expect(purchaseButton).toBeDisabled();
  expect(purchaseButton).toHaveClass("opacity-50");
  expect(purchaseButton).toHaveClass("cursor-not-allowed");
});
