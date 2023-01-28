function Quote({quote, author, company}:QuoteProps) {
    return (
        <section className="bg-black p-10 relative">
             <div>
                <img className="w-[200px] z-50 absolute -top-[60px] -left-[40px] opacity-50 " style={{  "transform": "scaleX(-1)"}} src="https://i.imgur.com/Mi9RIIu.png" />
            </div>
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