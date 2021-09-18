import { render, waitFor } from "@testing-library/react";
import React from "react";
import { isLoggedInVar } from "../../apollo";
import { App } from "../app";

// mocking next module
// import { LoggedInRouter } from "../routers/logged-in-router";
// import { LoggedOutRouter } from "../routers/logged-out-router";
jest.mock("../../routers/logged-out-router", () => {
  return {
    LoggedOutRouter: () => <span>logged-out</span>,
  };
});
jest.mock("../../routers/logged-in-router", () => {
  return {
    LoggedInRouter: () => <span>logged-in</span>,
  };
});

describe("<App />", () => {
  it("renders LoggedOutRouter", () => {
    const { getByText, debug } = render(<App />);
    getByText("logged-out");
    // ✅ debug() 함수를 이용해서 , 컴포넌트를 볼 수 있다.
    debug();
    // console.log
    // <body>
    //   <div>
    //     <span>
    //       logged-out
    //     </span>
    //   </div>
    // </body>
  });
  it("renders LoggedInRouter", async () => {
    const { getByText } = render(<App />);
    // ✅ 사용자가 한 행동처럼 act() 안에 변수를 바꿔줄수 있도록 한다.
    await waitFor(() => {
      isLoggedInVar(true);
    });
    getByText("logged-in");
  });
});
