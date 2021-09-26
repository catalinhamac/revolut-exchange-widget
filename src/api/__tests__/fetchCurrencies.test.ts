import { fetchCurrencies } from "../fetchCurrencies";

describe("fetchCurrencies", () => {
  test("call fetchCurrencies", async () => {
    const result = async () => {
      await fetchCurrencies();
    };

    await expect(result).rejects.toThrow(new Error("Network request failed"));
  });
});
