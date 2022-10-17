import Province from "../province/province.js";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { expect } = require("chai");
var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });
});

function sampleProvinceData() {
  return {
    name: "Asia",
    producers: [
      { name: "Byzantium", cost: 10, production: 9 },
      { name: "Attalia", cost: 12, production: 10 },
      { name: "Sinope", cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20,
  };
}
