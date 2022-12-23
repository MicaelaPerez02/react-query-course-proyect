import { useQuery } from "react-query";

export function useUserData(userId) {
    const usersData = useQuery(
        ["users", userId],
        () => fetchWithError(`https://ui.dev/api/courses/react-query/users/${userId}`),
        {
            staleTime: 1000 * 60 * 5,
        }
    )

    return usersData;
}