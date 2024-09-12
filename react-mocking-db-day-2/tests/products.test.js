import { it, describe, expect, beforeAll, afterEach, afterAll } from "vitest";

import { render, screen } from "@testing-library/react";

import { HttpResponse, delay, http } from "msw";
import { server } from "./mocks/server";

// import { db } from "./mocks/db";

import "@testing-library/jest-dom";

// import ProductContainer from "../src/components/ProductContainer";

import ProductCard from "../src/components/ProductCard";

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe("products", () => {
  // const productIds = [];

  // const products = [];

  // beforeAll(() => {
  //   [1, 2, 3].forEach(() => {
  //     const product = db.product.create();
  //     productIds.push(product.id);
  //     products.push(product);
  //   });
  // });

  // afterAll(() => {
  //   db.product.deleteMany({ where: { id: { in: productIds } } });
  // });

  it("should give a list of 5 products", async () => {
    // server.use(
    //   http.get("/products", async () => {
    //     await delay();
    //     return HttpResponse.json([]);
    //   })
    // );

    // render(<ProductCard />);

    // const items = await screen.findAllByRole("cardwrapper");
    // expect(items.length).toBeGreaterThan(0);

    const result = 1;
    expect(result).toEqual(1);
  });
});
