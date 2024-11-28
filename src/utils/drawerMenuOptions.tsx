import { MenuOption } from "../types/interfaces";
import PieChartIcon from "@mui/icons-material/PieChart";
import { PageNames } from "./pageNames";

export const menuOptionList: MenuOption[] = [
  {
    name: "Project Coverage",
    icon: <PieChartIcon />,
    path: `/${PageNames.COVERAGE_RESULTS}`,
  },
  {
    name: "File Coverage",
    icon: <PieChartIcon />,
    path: `/${PageNames.FILE_COVERAGE}`,
  },
];
