import Mime from "../index.esm";

const tests = [
  [
    "getExtensions: multi-extension mime",
    function (expect) {
      const x = Mime.getExtensions("image/jpeg");

      expect(x).notToBeUndefined().toBeSomeArray();
    },
  ],
  [
    "getExtensions: single extension mime",
    function (expect) {
      const x = Mime.getExtensions("application/json");

      expect(x).notToBeUndefined().toBeSomeArray();
    },
  ],
  [
    "getExtensions: unknown mime",
    function (expect) {
      const x = Mime.getExtensions("my-mime");

      expect(x).notToBeSomeArray();
    },
  ],
];

export default tests;
