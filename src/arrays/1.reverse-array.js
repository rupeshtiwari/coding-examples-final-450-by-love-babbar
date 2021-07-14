
function reverseWord(word) {
  const length = word.length;
  let reversed = "";
  for (let idx = length - 1; idx >= 0; idx--) {
    reversed += word[idx];
  }

  return reversed;
}

describe("reverseWord", () => {
  it("test #1", () => {
    expect(reverseWord("Geeks")).toBe("skeeG");
  });
  it("test #1", () => {
    expect(reverseWord("for")).toBe("rofx");
  });
});

