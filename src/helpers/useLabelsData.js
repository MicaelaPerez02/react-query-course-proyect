import { useQuery } from "react-query";

export function useLabelData() {
    const labelsQuery = useQuery(
        ["labels"],
        () => fetch("https://ui.dev/api/courses/react-query/labels").then((res) => res.json()),
        {
            staleTime: 1000 * 60 * 60,
        }
    )

    return labelsQuery;
}