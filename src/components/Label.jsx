import { useLabelData } from "../helpers/useLabelsData";

export default function Label({label}) {
    const labelsQuery = useLabelData();

    if (labelsQuery.isLoading) return null;

    const labelObj = labelsQuery.data.find(queryLabel =>
        queryLabel.id === label);

    if (!labelObj) return null;

    return <span className={`label ${labelObj.color}`}>
        {labelObj.name}
    </span>;
}