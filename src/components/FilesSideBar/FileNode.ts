export type FileNode = {
  name: string;
  type: "directory" | "file";
  children?: FileNode[];
};

export default function organizeFiles(
  filePaths: string[],
  basePath: string
): FileNode[] {
  const cleanedPaths = filePaths.map((path) => path.replace(basePath, ""));
  const root: FileNode[] = [];

  cleanedPaths.forEach((path) => {
    const parts = path.split("/");
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
