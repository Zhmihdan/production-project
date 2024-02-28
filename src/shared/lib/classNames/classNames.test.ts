import { classNames } from "./classNames";

describe("classNames", () => {
	test("Один класс", () => {
		expect(classNames("someClass")).toBe("someClass");
	});
	test("Два класса", () => {
		expect(classNames("someClass", {}, ["someClassTwo"])).toBe("someClass someClassTwo");
	});
	test("Три класса", () => {
		expect(classNames("someClass", {}, ["someClassTwo", "someClassThree"])).toBe("someClass someClassTwo someClassThree");
	});
	test("Три класса + рабочий мод", () => {
		expect(classNames("someClass", { "mode": true }, ["someClassTwo", "someClassThree"])).toBe("someClass someClassTwo someClassThree mode");
	});
	test("Три класса + нерабочий мод", () => {
		expect(classNames("someClass", { "mode": false }, ["someClassTwo", "someClassThree"])).toBe("someClass someClassTwo someClassThree");
	});
	test("класc + рабочий мод", () => {
		expect(classNames("someClass", { "mode": true })).toBe("someClass mode");
	});
});