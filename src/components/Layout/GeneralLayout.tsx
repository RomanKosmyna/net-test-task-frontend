type GeneralLayoutProps = {
    children: React.ReactNode;
};

const GeneralLayout = ({ children }: GeneralLayoutProps) => {
    return (
        <main className="w-full max-w-[1100px] min-h-[calc(100vh-84px)] flex flex-col pt-[64px]">
            {children}
        </main>
    )
};

export default GeneralLayout;