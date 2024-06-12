type GeneralLayoutProps = {
    children: React.ReactNode;
};

const GeneralLayout = ({ children }: GeneralLayoutProps) => {
    return (
        <main className="w-full max-w-[1100px] min-h-[calc(100vh-84px)] mt-[84px] flex flex-col pt-[44px]">
            {children}
        </main>
    )
};

export default GeneralLayout;