import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { FileCoverageInterface } from "../../types/interfaces";
import FileMenuSideBar from "../../components/FilesSideBar";
import FileCoverageBody from "../../components/FileCoverageBody/FileCoverageBody";
import { useUploadedKeys } from "../../hooks/UseUploadedKeys";
import { FILE_MANAGER_API_BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { PageNames } from "../../utils/pageNames";

const FileCoverage: React.FC = () => {
  const navigate = useNavigate();
  const { uploadedKeys, hasUploadedKeys } = useUploadedKeys();
  const [selectedFilePath, setSelectedFilePath] = useState<string | null>(null);
  const [apiUrl, setApiUrl] = useState<string | null>(null);

  useState<FileCoverageInterface | null>(null);

  const { data, loading, error } = useFetch<string>(apiUrl);

  useEffect(() => {
    if (uploadedKeys && uploadedKeys.length > 0) {
      setApiUrl(
        `${FILE_MANAGER_API_BASE_URL}/fileManager/files?projectId=${uploadedKeys}`
      );
    } else if (!hasUploadedKeys) navigate(`/${PageNames.PROJECT_SETUP}`);
  }, [uploadedKeys, hasUploadedKeys, navigate]);

  return (
    <Box display={"flex"} width={"100%"} mt={"30px"}>
      {data && (
        <Box zIndex={1}>
          <FileMenuSideBar
            projectFiles={JSON.parse(data)}
            basePath={"projects/" + uploadedKeys}
            setSelectedFilePath={setSelectedFilePath}
          />
        </Box>
      )}
      <FileCoverageBody
        data={data}
        error={error}
        loading={loading}
        selectedFilePath={selectedFilePath}
        setSelectedFilePath={setSelectedFilePath}
      />
    </Box>
  );
};

export default FileCoverage;
