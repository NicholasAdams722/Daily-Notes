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
console.log("***Average Topics Per Note***");

//Create variable for average number of topics
let totalNumberOfTopics = 0;

//nested for..of loop is used to find the specific data in topics.
for (const note of notes) {
  for (const topic of note.topics) {
    //Each iteration through the loop will add the value of 1 to totalNumberOfTopics value
    totalNumberOfTopics++;
  }
}
console.log(totalNumberOfTopics / notes.length);
