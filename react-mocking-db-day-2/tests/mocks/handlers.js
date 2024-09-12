import { db } from "./db";

// export const handlers = [
//   http.get("/products", () => {
//     return HttpResponse.json([
//       {
//         id: 1,
//         name: "name 1",
//         desc: "desc 1",
//         price: 10,
//       },
//     ]);
//   }),
// ];

export const handlers = [...db.products.toHandlers("rest")];
