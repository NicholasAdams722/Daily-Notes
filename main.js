/*
    Define a variable named `notes` and assign a value of an empty array
*/

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const notes = [
  {
    id: 1,
    text: "A few notes",
    author: "Nick",
    date: "8/13/2022",
    topics: ["hey", "code", "me"],
  },
  {
    id: 2,
    text: "I want all of these animals",
    author: "Nick",
    date: "8/14/2022",
    topics: ["cat", "dog", "wolf", "fox"],
  },
  {
    id: 3,
    text: "Find musicians for band",
    author: "Nick",
    date: "8/15/2022",
    topics: ["guitar", "bass", "drums", "vocal"],
  },
];
notes.push(
  {
    id: 4,
    topics: ["strategy", "professional", "help"],
    text: "Review all old code before asking for help",
    author: "Val",
    date: "8/21/2022",
  },
  {
    id: 5,
    topics: ["thinking"],
    text: "I have found that slowing down and thinking about the problem is beneficial",
    author: "Dakota",
  },
  {
    id: 6,
    topics: ["reminder", "github"],
    text: "Back up all code onto Github.",
    author: "Natalie",
    date: "10/12/2022",
  }
);

//Display String Below
console.log("*** Note Articles ***");

/*
    Since the string has to be built up in parts - in both
    the outer loop and the inner loop - start off with a
    variable that has an initial value of an empty string.
*/
let textString=""
/*
    Iterate all notes
*/


/*
Inside the iteration of all notes, add the open article
tag and the note text. 
*/
for (const note of notes) {
  textString += `<article>${note.text}`
  for (const topic of note.topics){
    const section = `<section>${topic}</section>`;
    textString += section
  }
  textString += '</article>'
  }

console.log(textString);

/*
Then iterate the `topics` array for the current note.
*/

/*
    Create a string template with an opening and closing
    <section> element with the topic text interpolated
    between them. Then add the string template to the
    variable created at the start with the += operator.
*/

/*
    After both for..of loops are done, add the closing
    </article> tag to the end of the main string with +=
*/

//create new variable to push output into
