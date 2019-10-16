import v1 from "./v1.js";
import v4 from "./v4.js";

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;
