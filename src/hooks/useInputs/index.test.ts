import { renderHook } from "@testing-library/react";
import { useInputs } from ".";
import { act } from "react";

describe("useInputs 테스트", () => {
  test("초기값이 올바르게 설정되는지 확인", () => {
    const { result } = renderHook(() => useInputs({ name: "", nickname: "" }));

    expect(result.current.values).toEqual({
      name: "",
      nickname: "",
    });
  });

  test("handleChange 함수가 값을 올바르게 업데이트하는지 확인", () => {
    const { result } = renderHook(() => useInputs({ name: "", value: "" }));

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "김철수" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values.name).toBe("김철수");
  });

  test("handleChange 함수로 여러 값을 업데이트할 때 올바르게 작동하는지 확인", () => {
    const { result } = renderHook(() => useInputs({ name: "", nickname: "" }));

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "김철수" },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: "nickname", value: "철수" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values.name).toBe("김철수");
    expect(result.current.values.nickname).toBe("철수");
  });

  test("handleDelete 함수가 특정 필드를 올바르게 삭제하는지 확인", () => {
    const { result } = renderHook(() =>
      useInputs({ name: "김철수", nickname: "철수" }),
    );

    act(() => {
      result.current.handleDelete("name");
    });

    expect(result.current.values.name).toBe("");
    expect(result.current.values.nickname).toBe("철수");
  });
});
