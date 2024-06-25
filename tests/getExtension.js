import Mime from "../index.esm";

const tests = [
  [
    "getExtension: just filename",
    function (expect) {
      const x = Mime.getExtension("a.txt");

      expect(x).toBe("txt");
    },
  ],
  [
    "getExtension: filename and path (using slash)",
    function (expect) {
      const x = Mime.getExtension("/a/b/c.txt");

      expect(x).toBe("txt");
    },
  ],
  [
    "getExtension: filename and path (using back-slash)",
    function (expect) {
      const x = Mime.getExtension("\\a\\b\\c\\a.txt");

      expect(x).toBe("txt");
    },
  ],
  [
    "getExtension: filename and path from current dir (using slash)",
    function (expect) {
      const x = Mime.getExtension("./a/b/c.txt");

      expect(x).toBe("txt");
    },
  ],
  [
    "getExtension: filename and path from current dir (using back-slash)",
    function (expect) {
      const x = Mime.getExtension(".\\a\\b\\c\\a.txt");

      expect(x).toBe("txt");
    },
  ],
  [
    "getExtension: absolute filename and path dir (using slash)",
    function (expect) {
      const x = Mime.getExtension("c:/a/b/c.txt");

      expect(x).toBe("txt");
    },
  ],
  [
    "getExtension: absolute filename and path dir (using back-slash)",
    function (expect) {
      const x = Mime.getExtension("c:\\a\\b\\c\\a.txt");

      expect(x).toBe("txt");
    },
  ],
];

export default tests;
