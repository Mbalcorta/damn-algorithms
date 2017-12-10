/*
Given an arbitrary target string and another string of lyrics, write a function that returns a boolean of whether or not the target string can be formulated from the lyrics.

Each letter in the lyrics string can only be used once in your target string.

Note: Ignore case-sensitivity.
*/

let target_string = 'Hack Reactor';
let good_kid_chorus = 'Mass hallucination baby Ill education baby Want to reconnect with your elations This is your station baby';

/**
 * @param {string} target
 * @param {string} lyrics
 * @return {boolean}
 */

const can_formulate = (target, lyrics) => {
  if (target.length > lyrics.length) {
   return false;
  }

  let target_lowercase = target.toLowerCase();
  let lyrics_lowercase = lyrics.toLowerCase();

  let possible_chars = {};

  for (let char of lyrics_lowercase) {
   possible_chars[char] = (possible_chars[char] || 0) + 1;
  }

  for (let char of target_lowercase) {
   possible_chars[char] = (possible_chars[char] || 0) - 1;
   if (possible_chars[char] === -1) {
     return false;
   }
  }

  return true;
}

export default can_formulate;