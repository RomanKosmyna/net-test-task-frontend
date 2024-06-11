type Props = {
    marginTop?: string;
};

export default function SeparationLine({ marginTop }: Props) {
    return (
        <span className={`block w-full h-[1px] ${marginTop ? `mt-${marginTop}` : ""} shadow-dark`}></span>
    )
}