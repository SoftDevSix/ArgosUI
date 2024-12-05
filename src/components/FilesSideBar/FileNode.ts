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
    const relativePath = fullPath.replace(basePath, "");
    const parts = relativePath.split("/");

    if (parts.some((part) => part === "test")) {
      return; 
    }

    if (!/\.java$/.test(fullPath) && !relativePath.endsWith("/")) {
      return; 
    }

    let currentLevel = root;

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1 && /\.\w+$/.test(part);
      const existingNode = currentLevel.find((node) => node.name === part);

      if (existingNode) {
        if (existingNode.type === "directory") {
          currentLevel = existingNode.children!;
        }
      } else {
        const newNode: FileNode = {
          name: part,
          filePath: fullPath,
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
