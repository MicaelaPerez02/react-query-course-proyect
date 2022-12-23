import { useQuery } from "react-query";
import fetchWithError from "./fetchWithError";

export function useLabelData() {
    const labelsQuery = useQuery(
        ["labels"],
        () => fetchWithError("https://ui.dev/api/courses/react-query/labels"),
        {
            staleTime: 1000 * 60 * 60,
        }
    )

    return labelsQuery;
}