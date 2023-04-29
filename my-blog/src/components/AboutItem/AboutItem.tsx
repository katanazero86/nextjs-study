interface AboutItemProps {
    title: string;
    description: string;
}

const AboutItem = ({title, description}: AboutItemProps) => {
    return (
        <div className="py-4">
            <p className="text-xl font-medium text-slate-900 text-center">
                {title}
            </p>
            <pre className="whitespace-pre-wrap font-medium text-sm text-slate-500 font-mono text-center tracking-tight">
                {description}
            </pre>
        </div>
    )
};

export default AboutItem