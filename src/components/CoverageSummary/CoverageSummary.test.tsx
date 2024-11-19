import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CoverageSummary from "./CoverageSummary";

describe("CoverageSummary component", () => {
    const mockSummaryData = [
        { value: 80, label: "Overall Coverage" },
        { value: 75, label: "Line Coverage" },
        { value: 70, label: "Method Coverage" },
        { value: 65, label: "Class Coverage" },
    ];

    const mockComparisonData = [
        { value: 78, label: "Overall Coverage" },
        { value: 73, label: "Line Coverage" },
        { value: 68, label: "Method Coverage" },
        { value: 62, label: "Class Coverage" },
    ];

    const improvedFiles = ["FileA.java", "FileB.java"];
    const decreasedFiles = ["FileC.java"];
    const baseBranchName = "develop";
    const coverageChange = 5;
    const colors = ["#4caf50", "#ffd700", "#ff9800", "#ff5722"];

    it("should render the summary data texts", () => {
        render(
            <CoverageSummary
                baseBranchName={baseBranchName}
                summaryData={mockSummaryData}
                comparisonData={mockComparisonData}
                improvedFiles={improvedFiles}
                decreasedFiles={decreasedFiles}
                coverageChange={coverageChange}
            />
        );

        mockSummaryData.forEach((item, index) => {
            const textElement = screen.getByText(`${item.label}: ${item.value}%`);
            expect(textElement).toBeInTheDocument();
            expect(textElement).toHaveStyle(`color: ${colors[index]}`);
        });
    });

    it("should render improved and decreased files lists", () => {
        render(
            <CoverageSummary
                baseBranchName={baseBranchName}
                summaryData={mockSummaryData}
                comparisonData={mockComparisonData}
                improvedFiles={improvedFiles}
                decreasedFiles={decreasedFiles}
                coverageChange={coverageChange}
            />
        );

        improvedFiles.forEach((file) => {
            const fileElement = screen.getByText(`• ${file}`);
            expect(fileElement).toBeInTheDocument();
        });

        decreasedFiles.forEach((file) => {
            const fileElement = screen.getByText(`• ${file}`);
            expect(fileElement).toBeInTheDocument();
        });
    });

    it("should display the comparison with the base branch", () => {
        render(
            <CoverageSummary
                baseBranchName={baseBranchName}
                summaryData={mockSummaryData}
                comparisonData={mockComparisonData}
                improvedFiles={improvedFiles}
                decreasedFiles={decreasedFiles}
                coverageChange={coverageChange}
            />
        );

        const comparisonText = screen.getByText(`Comparison with Base Branch (${baseBranchName})`);
        expect(comparisonText).toBeInTheDocument();
    });
});
