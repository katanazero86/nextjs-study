import Card from "@/components/Card/Card";

export default function Posts() {
    return (
        <div className="grow grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4 justify-between py-2 pr-10">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}