import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve renderizar o comentario 1", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("comment-field"), {
      target: {
        value: "Comentario 1",
      },
    });
    fireEvent.click(screen.getByTestId("comment-btn"));
    expect(screen.getByText("Comentario 1")).toBeInTheDocument();
  });
  test("Deve renderizar o comentario 2", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("comment-field"), {
      target: {
        value: "Comentario 2",
      },
    });
    fireEvent.click(screen.getByTestId("comment-btn"));
    expect(screen.getByText("Comentario 2")).toBeInTheDocument();
  });
});
