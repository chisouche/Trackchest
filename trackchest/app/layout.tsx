export const metadata = {
    title: 'TrackChest',
    description: 'Personal Budgeting Made Simple',
    };

    export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="en">
        <body>
        {children} {/* No sidebar here */}
        </body>
    </html>
    );
    }
