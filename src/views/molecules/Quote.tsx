function Quote({quote, author, company}:QuoteProps) {
    return (
        <section className="bg-black p-10 ">
            <div className="max-w-[580px] h-[220px] mx-auto text-center text-white flex flex-col items-center ">
                <p className="text-2xl font-light mb-5">“{quote}”</p>
                <div className="flex flex-col">
                    <span className="text-sm">{author}</span>
                    <a href={company?.link} className="font-medium underline text-sm">{company?.name}</a>
                </div>
            </div>
        </section>
    )
}

export default Quote;

interface QuoteProps {
    quote: string;
    author?: string;
    company?: {
        name?: string;
        link?: string;
    };
}