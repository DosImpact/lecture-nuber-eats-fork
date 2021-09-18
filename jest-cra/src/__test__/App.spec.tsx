// 프론트 테스트

import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "../App";
import { atomUserState } from "../recoil/user";
import { RecoilRoot, useRecoilState } from "recoil";

describe("<App/>", () => {
  it("renders OK", () => {
    const { getByText } = render(<App />);
    getByText("App");
  });

  it("loggout", () => {
    const { getByText } = render(<App />);
    getByText("LoggedOut");
  });
});
