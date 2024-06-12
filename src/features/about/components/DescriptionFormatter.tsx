type Props = {
    description: string
};

const DescriptionFormatter = ({ description }: Props) => {
    const paragraphs = description.split('\n');

    return (
        <div>
            <p className="w-full flex-grow font-bold text-lightBlue text-[20px] text-wrap">{paragraphs[0]}</p>
            <br />
            <p className="w-full flex-grow font-bold text-green-700 text-wrap">{paragraphs[2]}</p>
            <p className="w-full flex-grow font-medium text-heading text-wrap">{paragraphs[4]}</p>
            <p className="w-full flex-grow font-medium text-heading text-wrap">{paragraphs[6]}</p>
            <p className="w-full flex-grow font-medium text-heading text-wrap">{paragraphs[8]}</p>
            <p className="w-full flex-grow font-medium text-heading text-wrap">{paragraphs[10]}</p>
            <p className="w-full flex-grow font-medium text-heading text-wrap">{paragraphs[12]}</p>
            <br />
            <p className="w-full flex-grow font-bold text-green-700 text-wrap">{paragraphs[14]}</p>
            
            <p className="w-full flex-grow font-medium text-heading text-wrap">{paragraphs[16]}</p>
            <p className="w-full flex-grow font-medium text-heading text-wrap">{paragraphs[18]}</p>
            <p className="w-full flex-grow font-medium text-heading text-wrap">{paragraphs[20]}</p>
            <p className="w-full flex-grow font-medium text-heading text-wrap">{paragraphs[22]}</p>
            <p className="w-full flex-grow font-medium text-heading text-wrap">{paragraphs[24]}</p>
        </div>
    )
};

export default DescriptionFormatter;