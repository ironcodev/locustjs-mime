import Mime from "../index.esm";

const tests = [
  [
    "getMimeType: just extension",
    function (expect) {
      const x = Mime.getMimeType("txt");

      expect(x).notToBeUndefined();
    },
  ],
  [
    "getMimeType: filename and extension",
    function (expect) {
      const x = Mime.getMimeType("a.txt");

      expect(x).notToBeUndefined();
    },
  ],
  [
    "getMimeType: filename with path",
    function (expect) {
      const x = Mime.getMimeType("a/b/c.txt");

      expect(x).notToBeUndefined();
    },
  ],
];

export default tests;
