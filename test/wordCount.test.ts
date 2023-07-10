import { expect, test } from "vitest";
import { wordCount } from "../src/wordCount";

test("Word count", function () {
  expect(wordCount()).toEqual([
    { word: "is", count: 2 },
    { word: "and", count: 2 },
    { word: "to", count: 2 },
    { word: "javascript", count: 2 },
    { word: "typescript", count: 1 },
    { word: "a", count: 1 },
    { word: "free", count: 1 },
    { word: "open", count: 1 },
    { word: "source", count: 1 },
    { word: "high", count: 1 },
    { word: "level", count: 1 },
    { word: "programming", count: 1 },
    { word: "language", count: 1 },
    { word: "developed", count: 1 },
    { word: "by", count: 1 },
    { word: "microsoft", count: 1 },
    { word: "that", count: 1 },
    { word: "adds", count: 1 },
    { word: "static", count: 1 },
    { word: "typing", count: 1 },
    { word: "with", count: 1 },
    { word: "optional", count: 1 },
    { word: "type", count: 1 },
    { word: "annotations", count: 1 },
    { word: "it", count: 1 },
    { word: "designed", count: 1 },
    { word: "for", count: 1 },
    { word: "the", count: 1 },
    { word: "development", count: 1 },
    { word: "of", count: 1 },
    { word: "large", count: 1 },
    { word: "applications", count: 1 },
    { word: "transpiles", count: 1 },
    { word: "", count: 1 },
  ]);
});