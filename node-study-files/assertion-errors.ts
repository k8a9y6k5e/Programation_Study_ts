// assertion error are exception launched when a condition isn't true

//to create an assert error us import the command
import assert from "node:assert";

//after use the command
try {
  const var1 = null;
  // if the condition entered is false, launch an error with the message entred at second argument
  assert(var1, "var1 isn't exist");
} catch (err) {
  const informations = err as { message: string };
  console.log(informations.message);
}

// syntax :
// assert(<condition>, <message>);
