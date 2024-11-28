import { MenuOption } from "../types/interfaces";
import PieChartIcon from "@mui/icons-material/PieChart";

export const menuOptionList: MenuOption[] = [
  {
    name: "Project Coverage",
    icon: <PieChartIcon />,
    path: "/project-coverage",
  },
  {
    name: "File Coverage",
    icon: <PieChartIcon />,
    path: "/file-coverage",
  },
];
