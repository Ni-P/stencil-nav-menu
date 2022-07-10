import { newE2EPage } from "@stencil/core/testing";

describe("alx-nav-item", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<alx-nav-item></alx-nav-item>");
    const element = await page.find("alx-nav-item");
    expect(element).toHaveClass("hydrated");
  });
});
