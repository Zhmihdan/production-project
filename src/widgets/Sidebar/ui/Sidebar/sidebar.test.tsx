import { fireEvent, screen } from "@testing-library/react";
import testWithTranslation from "shared/lib/tests/testWithTranslation/testwithTranslation";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
	test("Рендер сайдбара", () => {
		testWithTranslation(<Sidebar />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});
	test("Проверка свертывания сайдбара", () => {
		testWithTranslation(<Sidebar />);
		const toggleBtn = screen.getByTestId("toggle-sidebar");
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
	});
});