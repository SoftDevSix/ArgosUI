import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import FileOption from "./FileMenuOption/FileOption";
import DirectoryOption from "./FileMenuOption/DirectoryOption";
import organizeFiles, { FileNode } from "./FileNode";
import FileMenuSideBar from "./FileMenuSideBar";

describe("FileOption", () => {
  it("renders file name and calls setSelected on click", async () => {
    const mockSetSelected = vi.fn();
    const fileNode: FileNode = {
      name: "exampleFile.java",
      filePath: "/path/to/exampleFile.java",
      type: "file",
    };

    render(
      <FileOption
        node={fileNode}
        setSelected={mockSetSelected}
        isSelected={false}
      />
    );

    expect(screen.getByText("exampleFile.java")).toBeInTheDocument();

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(mockSetSelected).toHaveBeenCalled();
  });
});

describe("organizeFiles", () => {
  it("organizes file paths into a nested structure", () => {
    const filePaths = [
      "projects/base/projectFiles/dir1/file1.java",
      "projects/base/projectFiles/dir1/subdir1/file2.java",
      "projects/base/projectFiles/dir2/file3.java",
    ];
    const basePath = "projects/base/projectFiles/";

    const result = organizeFiles(filePaths, basePath);

    // Expected structure
    const expected: FileNode[] = [
      {
        name: "dir1",
        filePath: "projects/base/projectFiles/dir1/file1.java",
        type: "directory",
        children: [
          {
            name: "file1.java",
            filePath: "projects/base/projectFiles/dir1/file1.java",
            type: "file",
          },
          {
            name: "subdir1",
            filePath: "projects/base/projectFiles/dir1/subdir1/file2.java",
            type: "directory",
            children: [
              {
                name: "file2.java",
                filePath: "projects/base/projectFiles/dir1/subdir1/file2.java",
                type: "file",
              },
            ],
          },
        ],
      },
      {
        name: "dir2",
        filePath: "projects/base/projectFiles/dir2/file3.java",
        type: "directory",
        children: [
          {
            name: "file3.java",
            filePath: "projects/base/projectFiles/dir2/file3.java",
            type: "file",
          },
        ],
      },
    ];

    expect(result).toEqual(expected);
  });

  it("handles an empty list of file paths", () => {
    const result = organizeFiles([], "projects/base/projectFiles/");
    expect(result).toEqual([]);
  });
});

describe("FileOption", () => {
  it("renders file name and calls setSelected on click", async () => {
    const mockSetSelected = vi.fn();
    const fileNode: FileNode = {
      name: "exampleFile.java",
      filePath: "/path/to/exampleFile.java",
      type: "file",
    };

    render(
      <FileOption
        node={fileNode}
        setSelected={mockSetSelected}
        isSelected={false}
      />
    );

    expect(screen.getByText("exampleFile.java")).toBeInTheDocument();

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(mockSetSelected).toHaveBeenCalled();
  });
});

describe("DirectoryOption", () => {
  it("renders directory name and toggles expansion", () => {
    const mockSetFileSelected = vi.fn();

    const mockNode: FileNode = {
      name: "TestDirectory",
      filePath: "/path/to/TestDirectory",
      type: "directory",
      children: [
        {
          name: "File1.java",
          filePath: "/path/to/TestDirectory/File1.java",
          type: "file",
        },
        {
          name: "SubDirectory",
          filePath: "/path/to/TestDirectory/SubDirectory",
          type: "directory",
          children: [
            {
              name: "File2.java",
              filePath: "/path/to/TestDirectory/SubDirectory/File2.java",
              type: "file",
            },
          ],
        },
      ],
    };

    render(
      <DirectoryOption
        node={mockNode}
        fileSelected=""
        setFileSelected={mockSetFileSelected}
      />
    );

    expect(screen.getByText("TestDirectory")).toBeInTheDocument();

    

    const header = screen.getByRole("button", { name: /testdirectory/i });
    fireEvent.click(header);

    expect(screen.getByText("File1.java")).toBeInTheDocument();
    expect(screen.getByText("SubDirectory")).toBeInTheDocument();
  });

  it("calls setFileSelected when a file is clicked", () => {
    const mockSetFileSelected = vi.fn();

    const mockNode: FileNode = {
      name: "TestDirectory",
      filePath: "/path/to/TestDirectory",
      type: "directory",
      children: [
        {
          name: "File1.java",
          filePath: "/path/to/TestDirectory/File1.java",
          type: "file",
        },
      ],
    };

    render(
      <DirectoryOption
        node={mockNode}
        fileSelected=""
        setFileSelected={mockSetFileSelected}
      />
    );

    const header = screen.getByRole("button", { name: /testdirectory/i });
    fireEvent.click(header);

    const fileButton = screen.getByText("File1.java");
    fireEvent.click(fileButton);

    expect(mockSetFileSelected).toHaveBeenCalledWith(
      "File1.java",
      "/path/to/TestDirectory/File1.java"
    );
  });
});

describe("FileMenuSideBar", () => {
  it("renders the project files sidebar with a title", () => {
    const mockSetSelectedFilePath = vi.fn();

    const projectFiles = [
      "/base/path",
      "/base/path/Directory1",
      "/base/path/Directory1/File1.java",
      "/base/path/File2.java",
    ];

    render(
      <FileMenuSideBar
        projectFiles={projectFiles}
        basePath="/base/path"
        setSelectedFilePath={mockSetSelectedFilePath}
      />
    );

    expect(screen.getByText("Project Files")).toBeInTheDocument();

    expect(screen.getByText("Directory1")).toBeInTheDocument();
    expect(screen.getByText("File2.java")).toBeInTheDocument();
  });

  it("calls setSelectedFilePath when a file is selected", () => {
    const mockSetSelectedFilePath = vi.fn();

    const projectFiles = [
      "/base/path",
      "/base/path/File1.java",
    ];

    render(
      <FileMenuSideBar
        projectFiles={projectFiles}
        basePath="/base/path"
        setSelectedFilePath={mockSetSelectedFilePath}
      />
    );

    const fileButton = screen.getByText("File1.java");
    fireEvent.click(fileButton);

  });
});
