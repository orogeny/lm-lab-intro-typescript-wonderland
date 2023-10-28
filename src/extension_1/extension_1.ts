import { endAdventure } from "../..";
import { enterTheRabbitHole } from "../chapter_1/chapter_1_rabbit_hole";
import { askQuestion, clear, print } from "../ui/console";

const ATTIRE = [ "tuxedo", "tracksuit", "hoodie", "waistcoat", "poncho" ] as const;

// type Garments = "tuxedo" | "tracksuit" | "hoodie" | "waistcoat" | "poncho";

type Garment = typeof ATTIRE[number];

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export function seeWhiteRabbit(name: string) {
    clear(false);
	print('------------------------');
	print(`🥳 Welcome ${name}! 🥳`);
	print('------------------------');
    print('Lazing on a sun drenched riverbank, a White Rabbit catches your attention.');
    ATTIRE.forEach((g) => print(`   a ${capitalize(g)}`));
    askQuestion('You realise he is wearing a:', chooseAttire);
}

function chooseAttire(input: string) {
    // const garment = parseAttierInput(input);  
    // const garment = input as Garments;
    const garment = input.toLowerCase() as Garment;

    switch (garment) {
        case "waistcoat":            
            return enterTheRabbitHole();

        case "poncho":  
        case "tracksuit":   // doesn't scream if we comment out an option
        case "tuxedo":
        case "hoodie":
            print(`🤦\ta ${garment} ???`);
            print(`You realise you must have been dreaming and drift off to sleep`);
            return endAdventure();

        // case "banana":   // does report a problem if we use a non-type string
        //     print("hello");
        //     break;

        default:
            print(`🤷\t${input} does not scan, compute or add up!`);
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
