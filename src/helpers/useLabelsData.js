import { useQuery } from "react-query";

export function useLabelData() {
    const labelsQuery = useQuery(
        ["labels"],
        ({signal}) => fetch("https://ui.dev/api/courses/react-query/labels", {signal}).then((res) => res.json()),
        {
            staleTime: 1000 * 60 * 60,
        }
    )

    return labelsQuery;
}