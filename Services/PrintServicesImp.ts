import { writeFile } from "fs/promises";
import { PrintServices } from "./PrintServices.js";
import { User } from "../user.js";

export class PrintServicesImp implements PrintServices {
  constructor() {}
  public async printPages(pages: Array<string>, baseNamePage: string) {
    let i: number = 0;

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      await writeFile(`${baseNamePage}${i}.html`, page);
    }
  }

  public async printJson(users: Array<User>) {
    const json = JSON.stringify(users);
    await writeFile("users.json", json);
  }
}