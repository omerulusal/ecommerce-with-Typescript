const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-3 md:px-10">
            {children}
            {/* DetailClienttan children alır */}
        </div>
    )
}

export default PageContainer