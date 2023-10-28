import { endAdventure } from "../..";
import { enterTheRabbitHole } from "../chapter_1/chapter_1_rabbit_hole";
import { askQuestion, clear, print } from "../ui/console";

const ATTIRE = [ "Tuxedo", "Tracksuit", "Hoodie", "Waistcoat", "Poncho" ] as const;

type Garment = typeof ATTIRE[number];

export function seeWhiteRabbit(name: string) {
    clear(false);
	print('------------------------');
	print(`🥳 Welcome ${name}! 🥳`);
	print('------------------------');
    print('Lazing on a sun drenched riverbank, a White Rabbit catches your attention.');
    ATTIRE.forEach((g, i) => print(`   ${i} - ${g}`));
    askQuestion('You realise he is wearing a:', chooseAttire);

}

function chooseAttire(input: string) {
    const garment = parseAttierInput(input);   

    switch (garment) {
        case undefined:
            print(`🤷\t${input} does not scan, compute or add up!`);
            return endAdventure();

        case "Waistcoat":            
            return enterTheRabbitHole();

        default:
            print(`🤦\ta ${garment} ???`);
            print(`You realise you must have been dreaming and drift off to sleep`);
            return endAdventure();
    }
}

// HACK: Thought there would be a way of iterating over a union type.
// HACK: Turns out there isn't (because types, etc are removed at the
// HACK: transpilation stage) and you need to use an array - exactly 
// HACK: as HOLES/Hole have been implemented. 
function parseAttierInput(input: string) : Garment | undefined {
    const garmentIndex = parseInt(input);

    if (isNaN(garmentIndex)) return undefined;

    if (garmentIndex < 0 || garmentIndex > ATTIRE.length - 1) return undefined;

    return ATTIRE[garmentIndex];
}
