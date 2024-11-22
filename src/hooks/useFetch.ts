import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
};

type UseFetchReturn<T> = {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
};

const useFetch = <T>(url: string): UseFetchReturn<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  });

  useEffect(() => {
    let isMounted = true;
    const getFetch = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          if (isMounted) {
            setState({
              data: null,
              isLoading: false,
              hasError: true,
              errorMessage: `Error ${response.status}: ${response.statusText}`,
            });
          }
          return;
        }

        const data: T = await response.json();
        if (isMounted) {
          setState({
            data,
            isLoading: false,
            hasError: false,
            errorMessage: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            isLoading: false,
            hasError: true,
            errorMessage: error instanceof Error ? error.message : "Unknown error",
          });
        }
      }
    };

    getFetch();
    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    errorMessage: state.errorMessage,
  };
};

export default useFetch;
