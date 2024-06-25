import Mime, { MimeProviderBase, setMimeProvider } from "../index.esm";

class MyMime extends MimeProviderBase {
  getFullMime(filenameOrExtension) {
    return "$full-mime";
  }
  getMimeType(filenameOrExtension) {
    return "$mime";
  }
  getExtensions(mime) {
    return ["$ext"];
  }
}

const tests = [
  [
    "setMimeProvider: 1",
    function (expect) {
      const x = Mime.instance;
      const y = new MyMime();

      setMimeProvider(y);

      expect(Mime != x).toBeTrue();
    },
  ],
  [
    "setMimeProvider: 2",
    function (expect) {
      const x = Mime.instance;
      const y = new MyMime();

      setMimeProvider(y);

      const z = Mime.getMimeType("foo");

      expect(z).toBe("$mime");
    },
  ],
  [
    "setMimeProvider: 3",
    function (expect) {
      const x = Mime.instance;
      const y = new MyMime();

      setMimeProvider(y);

      const z = Mime.getExtensions("foo");

      expect(z).toBeSomeArray();
      expect(z[0]).toBe("$ext");
    },
  ],
];

export default tests;
