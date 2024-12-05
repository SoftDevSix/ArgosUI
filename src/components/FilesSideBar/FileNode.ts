export type FileNode = {
  name: string;
  filePath: string;
  type: "directory" | "file";
  children?: FileNode[];
};

export default function organizeFiles(
  filePaths: string[],
  basePath: string
): FileNode[] {
  const root: FileNode[] = [];

  filePaths.forEach((fullPath) => {
    const relativePath = fullPath.replace(basePath, "").replace(/^\/+/, "");
    const parts = relativePath.split("/");

    if (parts.some((part) => part === "test")) {
      return;
    }

    if (!/\.java$/.test(fullPath)) {
      return;
    }

    let currentLevel = root;

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1 && /\.java$/.test(part);
      const existingNode = currentLevel.find((node) => node.name === part);

      if (existingNode) {
        if (existingNode.type === "directory") {
          currentLevel = existingNode.children!;
        }
      } else {
        const newNode: FileNode = {
          name: part,
          filePath: isFile ? fullPath : parts.slice(0, index + 1).join("/"),
          type: isFile ? "file" : "directory",
          ...(isFile ? {} : { children: [] }),
        };

        currentLevel.push(newNode);
        if (!isFile) {
          currentLevel = newNode.children!;
        }
      }
    });
  });

  return root;
}
