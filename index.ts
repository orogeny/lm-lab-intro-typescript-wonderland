import { seeWhiteRabbit } from "./src/extension_1/extension_1";
import { clear, print, askQuestion } from "./src/ui/console";

export function haveAdventures(): void {
  clear(false);
  print("--------------------------");
  print("| Welcome to Wonderland! |");
  print("--------------------------");

  askQuestion(`What's your name? `, startAdventure); // 👉 FIXME ❌
}

function startAdventure(name: string): void {
  if (name && name.length > 0) {
    if (checkEntryCodeIsBiggerThanThree(numberBiggerThanThree)) {
      return seeWhiteRabbit(name);
    } else {
      print("***************************************");
      print(`Hi ${name}. Sadly, the entry code failed! ☹`);
      return endAdventure();
    }
  } else {
    print(`I don't know who you are!`);
    return endAdventure();
  }
}

// function failImmediately() {
// 	clear(false);
// 	return endAdventure();
// }

const numberBiggerThanThree: number = 11; // 👉 FIXME ❌

// 👉 FIXME ❌
function checkEntryCodeIsBiggerThanThree(code: number) {
  return code > 3; // 👉 FIXME ❌
}

export function endAdventure(): void {
  print("***************************************");
  print("You did not make it through Wonderland. 😭");
  askQuestion("Press ENTER to restart! ", haveAdventures);
}

haveAdventures();
