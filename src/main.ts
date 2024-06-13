import { config } from "./config";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _main() {
  const user = "Grant";
  Logger.log(main(user));
}

function main(person: string) {
  return `${config.ID} : Hello, ${person}!`;
}
