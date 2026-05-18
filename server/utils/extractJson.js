const extractJson = (text) => {
  try {
    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/gi, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.log("JSON Parse Error:", error);

    return null;
  }
};

export default extractJson;
// This file defines a utility function called extractJson, which takes a string input and attempts to extract and parse JSON data from it. The function removes any code block markers (```json and ```) from the input string, trims any extra whitespace, and then tries to parse the cleaned string as JSON. If the parsing is successful, it returns the resulting JavaScript object. If there is an error during parsing (e.g., if the input is not valid JSON), it logs the error to the console and returns null.
