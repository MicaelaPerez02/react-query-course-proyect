import { useQuery } from "react-query";

export function useUserData(userId) {
    const usersData = useQuery(
        ["users", userId],
        ({ signal }) => fetch(`https://ui.dev/api/courses/react-query/users/${userId}`, {signal})
            .then(res => res.json()), {
        staleTime: 1000 * 60 * 5,
    }
    )

    return usersData;
}