import TestRunner from "@locustjs/test";
import test1 from "./getExtension";
import test2 from "./getMimeType";
import test3 from "./getExtensions";
import test4 from "./setMimeProvider";

TestRunner.start(test1, test2, test3, test4);
