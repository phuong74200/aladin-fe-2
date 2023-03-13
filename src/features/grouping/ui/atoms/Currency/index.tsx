interface CurrencyProps {
    label?: string;
}

export default function Currency({ label = "VND" }: CurrencyProps) {
    return <small>{label}</small>;
}
